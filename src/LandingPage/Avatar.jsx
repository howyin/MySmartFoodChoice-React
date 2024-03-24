import './All.css'
import avatar from '../assets/avatar.svg'

const Avatar = () => {

    return(
        <div>
            {[...Array(6)].map((_, index) => (
                <img key={index} src={avatar} className='avatar-image'/>
            ))}
        </div>
    );
}


export default Avatar;
