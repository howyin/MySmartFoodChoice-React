import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeSignInPage from './AuthenticationPage/HomeSignInPage.jsx';
import HomeSignUpPage from './AuthenticationPage/HomeSignUpPage.jsx';
import { HomePage } from './LandingPage/HomePage.jsx';
import ReviewForm from './ReviewPage/ReviewForm.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignUp" element={<HomeSignUpPage />} />
        <Route path="/SignIn" element={<HomeSignInPage />} />
        <Route path = "/ReviewForm" element={<ReviewForm />} /> 
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
