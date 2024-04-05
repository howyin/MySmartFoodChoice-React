import './All.css'
import image from '../assets/food.jpg';

function Image() {
    return (
        <div>
            <img src={image} alt="Food" className="img-fluid"/>
        </div>
    );
}

export default Image;
