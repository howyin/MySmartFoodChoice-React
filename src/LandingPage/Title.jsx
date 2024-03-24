import './All.css'
import SortImage from '../assets/sort.svg'


const Title = () => {
    return (
        <div className='titleCenter'>
            <h2>⭐⭐⭐⭐⭐ 4.6/5 based on 500 Reviews</h2>
            <img className='imageDropDownSmall'src={SortImage}/>
            <h2>Sort</h2>
        </div>
    );
};


export default Title;
