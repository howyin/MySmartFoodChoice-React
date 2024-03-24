// need to import more component for the UI.
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Advertisement/Home.jsx';
import SignUpForm from './Authentication/SignUpForm.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import PartnerShip from './Pages/PartnerShip.jsx'

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
        <Route index Component={Home} />
        <Route path='/SignUp' Component={SignUpForm}/>
        <Route path='/AboutUs' Component={AboutUs}/>
        <Route path='/ContactUs' Component={ContactUs}/>
        <Route path='/PartnerShip' Component={PartnerShip}/>
       

        // Add more routes as needed
      </Routes>
    </BrowserRouter>
  );
}

export default App;