// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './LandingPage/HomePage.jsx';
import ReviewForm from './ReviewPage/ReviewForm.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import LoginForm from './AuthenticationPage/LoginForm.jsx';
/* should not delete this import */
import HomeSignInPage from './AuthenticationPage/HomeSignInPage.jsx';
import HomeSignUpPage from './AuthenticationPage/HomeSignUpPage.jsx';
import Guest from './Pages/Guest.jsx'; 
import GuestRecordMeal from './Pages/GuestRecordMeal.jsx';
import GuestViewMeal from './Pages/GuestViewMeal.jsx';
import GuestViewFood from './Pages/GuestViewFood.jsx';

/* don't delete this import */
import './App.css';
import SignUpForm from './AuthenticationPage/SignUpForm.jsx';

function App() 
{
  // remove login and logout

  // add more routes as needed
  // review database share route
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path = "/SignIn" element={<LoginForm/>} />
        <Route path = "/SignUp" element={<SignUpForm />} />
        <Route path = "/ReviewForm" element={<ReviewForm />} /> 
        <Route path = "/AboutUs" element={<AboutUs />} /> 
        <Route path = "/ContactUs" element={<ContactUs />} /> 
        <Route path="/SignIn" element={<HomeSignInPage />} />
        <Route path="/SignUp" element={<HomeSignUpPage />} />
        <Route path="/Guest" element={<Guest />} />
        <Route path="/GuestRecordMeal" element={<GuestRecordMeal />} />
        <Route path="/GuestViewMeal" element={<GuestViewMeal />} />
        <Route path="/GuestViewFood" element={<GuestViewFood />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
