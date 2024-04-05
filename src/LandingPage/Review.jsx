// import React, { useEffect, useState } from 'react';
// import db from './firebaseConfig'; // Adjust the path as necessary
// import { collection, getDocs } from 'firebase/firestore';
// import './All.css';

// const Review = () => {
//     const generateRandomReview = () => {
//         const reviews = [
//             "Great product, highly recommended!",
//             "Excellent service, will definitely come back!",
//             "Amazing experience, exceeded my expectations!",
//             "Top-notch quality, worth every penny!",
//             "Outstanding customer support, very satisfied!",
//             "Impressive delivery time, very happy with my purchase!",
//             "Fantastic product, couldn't be happier!"
//         ];
//         return reviews[Math.floor(Math.random() * reviews.length)];
//     };

//     return (
//         <div>
//             <div>
//                 <div className='userReview'>
//                     <div className="rating-bar">⭐⭐⭐⭐⭐</div>
//                     <p className="text-with-padding">{generateRandomReview()}</p>
//                 </div>
//                 <div className='userReview'>
//                     <div className="rating-bar">⭐⭐⭐⭐</div>
//                     <p className="text-with-padding">{generateRandomReview()}</p>
//                 </div>
//                 <div className='userReview'>
//                     <div className="rating-bar">⭐⭐⭐</div>
//                     <p className="text-with-padding">{generateRandomReview()}</p>
//                 </div>
//                 <div className='userReview'>
//                     <div className="rating-bar">⭐⭐⭐⭐⭐</div>
//                     <p className="text-with-padding">{generateRandomReview()}</p>
//                 </div>
//                 <div className='userReview'>
//                     <div className="rating-bar">⭐⭐</div>
//                     <p className="text-with-padding">{generateRandomReview()}</p>
//                 </div>
//                 <div className='userReview'>
//                     <div className="rating-bar">⭐⭐⭐⭐</div>
//                     <p className="text-with-padding">{generateRandomReview()}</p>
//                 </div>
//                 <div className='userReview'>
//                     <div className="rating-bar">⭐⭐⭐⭐⭐</div>
//                     <p className="text-with-padding">{generateRandomReview()}</p>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Review;
import React, { useEffect, useState } from 'react';
import { db, auth } from '../Firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import './All.css';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Reviews'));
        console.log("Fetched reviews:", querySnapshot.docs.map(doc => doc.data())); // Log fetched data
        const reviewsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setReviews(reviewsArray);
      } catch (error) {
        console.error("Error fetching reviews:", error); // Log any errors
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className='userReview'>
          <div className="rating-bar">{ "⭐".repeat(review.rating) }</div>
          <p className="text-with-padding">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
