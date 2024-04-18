


// require the necessary imports are already included
// too late to test everything as the prototype is already done in native Android app.
const classifyImage = async (image) => 
{
  try {
    const model = await Model.newInstance(requireActivity().getApplicationContext());

    const inputFeature0 = TensorBuffer.createFixedSize([1, 224, 224, 3], DataType.FLOAT32);

    const byteBuffer = new Float32Array(4 * imageSize * imageSize * 3);

    const intValues = new Int32Array(imageSize * imageSize);
    image.getPixels(intValues, 0, image.getWidth(), 0, 0, image.getWidth(), image.getHeight());
    let pixel = 0;
    for (let i = 0; i < imageSize; i++) {
      for (let j = 0; j < imageSize; j++) {
        const val = intValues[pixel++];
        byteBuffer[pixel++] = ((val >> 16) & 0xFF) * (1.0 / 255.0);
        byteBuffer[pixel++] = ((val >> 8) & 0xFF) * (1.0 / 255.0);
        byteBuffer[pixel++] = (val & 0xFF) * (1.0 / 255.0);
      }
    }

    inputFeature0.loadBuffer(byteBuffer);

    const outputs = await model.process(inputFeature0);
    const outputFeature0 = outputs.getOutputFeature0AsTensorBuffer();

    const confidences = outputFeature0.getFloatArray();
    let maxPos = 0;
    let maxConfidence = 0;
    for (let i = 0; i < confidences.length; i++) {
      if (confidences[i] > maxConfidence) {
        maxConfidence = confidences[i];
        maxPos = i;
      }
    }

    const classes = ["Nasi Lemak", "Kaya Toast", "Curry Puff", "Fish Soup"];

    const foodName = classes[maxPos];
    foodNameTextView.setText(foodName);

    const call = caloriesNinjaAPI.getFoodItem(foodName);
    call.then(callBackNutritionValueResponseFromAPI());

    let modifiedName = "";
    switch (foodName) {
      case "Nasi Lemak":
        modifiedName = "Nasi lemak";
        break;
      case "Fish Soup":
        modifiedName = "Fish Soup";
        break;
    }

    const dishCall = freeFoodAPI.searchMealByName(modifiedName);
    dishCall.then(callBackDishInfoResponseFromAPI());

    const s = classes.map((className, index) => `${className}: ${(confidences[index] * 100).toFixed(1)}%\n`).join('');
    // confidence.setText(s);

    model.close();
  } catch (error) {
    console.error("ClassifyImage: ", error.message);
    // Handle the exception
  }
};
