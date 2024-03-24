// need to import more component for the UI.
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeSignInPage from './AuthenticationPage/HomeSignInPage.jsx';
import HomeSignUpPage from './AuthenticationPage/HomeSignUpPage.jsx';
import {HomePage} from './LandingPage/HomePage.jsx'

// some components are not showing up.
function App() 
{
  return(
    // add in more components here
    /*
      <div className='App'>
      <Home/>
      
    </div> route is for registering the path for the components.
    */
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/SignUp' Component={HomeSignUpPage}/>
        <Route path='/SignIn' Component={HomeSignInPage}/>  
        // Add more routes as needed
      </Routes>
    </BrowserRouter>
  );
}

export default App;