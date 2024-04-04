// import './All.css'
// import SortImage from '../assets/sort.svg'


// const Title = () => {
//     return (
//         <div className='titleCenter'>
//             <h2>⭐⭐⭐⭐⭐ 4.6/5 based on 500 Reviews</h2>
//             <img className='imageDropDownSmall'src={SortImage}/>
//             <h2>Sort</h2>
//         </div>
//     );
// };


// export default Title;
import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Firebase'; // Adjust based on actual path
import { collection, getDocs } from 'firebase/firestore';

const ReviewSummary = () => {
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Reviews'));
        const reviewsArray = querySnapshot.docs.map(doc => doc.data());

        // Calculate the total number of reviews
        const total = querySnapshot.size;
        setTotalReviews(total);

        // Calculate the average rating
        const totalRating = reviewsArray.reduce((acc, review) => acc + Number(review.rating), 0);
        const average = total > 0 ? (totalRating / total) : 0;
        setAverageRating(Number(average.toFixed(1))); // Adjusted to keep one decimal for the average

      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Function to generate stars based on the average rating, rounded to the nearest whole number
  const renderStars = (rating) => "⭐".repeat(Math.round(rating));

  return (
    <div>
      <h3>{averageRating}/5 {renderStars(averageRating)} based on {totalReviews} Reviews</h3>
    </div>
  );
};

export default ReviewSummary;



