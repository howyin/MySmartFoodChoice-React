// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './LandingPage/HomePage.jsx';
import ReviewForm from './ReviewPage/ReviewForm.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import LoginForm from './AuthenticationPage/LoginForm.jsx';
import Guest from './Pages/Guest.jsx'; 
import GuestRecordMeal from './Pages/GuestRecordMeal.jsx';
import GuestViewMeal from './Pages/GuestViewMeal.jsx';
import GuestViewFood from './Pages/GuestViewFood.jsx';
import CheckIn from './Pages/CheckIn.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import CreateBusinessProfile from './Dashboard/CreateBusinessProfile.jsx';
import DietitianDashBoard from './Dashboard/DietitianDashboard.jsx';
import SignUpForm from './AuthenticationPage/SignUpForm.jsx';
import CreateRecipe from './Dashboard/CreateRecipes.jsx';

import './App.css';

function App() 
{
  // remove login and logout

  // add more routes as needed
  // review database share route
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path = "/SignIn" element={<LoginForm/>} />
        <Route path = "/SignUp" element={<SignUpForm />} />
        <Route path = "/ReviewForm" element={<ReviewForm />} /> 
        <Route path = "/AboutUs" element={<AboutUs />} /> 
        <Route path = "/ContactUs" element={<ContactUs />} /> 
        <Route path="/Guest" element={<Guest />} />
        <Route path="/GuestRecordMeal" element={<GuestRecordMeal />} />
        <Route path="/GuestViewMeal" element={<GuestViewMeal />} />
        <Route path="/GuestViewFood" element={<GuestViewFood />} />
        <Route path="/CheckIn" element={<CheckIn />} />
        <Route path="/DietitianDashBoard" element={<DietitianDashBoard />} />
        <Route path="/CreateBusinessProfile" element={<CreateBusinessProfile />} />
        <Route path="/CreateRecipe" element={<CreateRecipe />} />
        {/* Add more routes as needed */}
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
