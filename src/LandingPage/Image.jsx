import './All.css'
import image from '../assets/food.jpg'

function Image() {
    // add image component code here
    return (
        <div>
            {/* we can put error image here */}
            <img src={image} alt="Food" className="image"/>
            
        </div>
    );
}

export default Image;
