// need to import more component for the UI.
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Authentication/LoginPage.jsx';
import SignUpForm from './Authentication/SignUpForm.jsx'

// some components are not showing up.
function App() 
{
  return(
    // add in more components here
    /*
      <div className='App'>
      <Home/>
      
    </div>
    */

    <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
        <Route path='/SignUp' Component={SignUpForm}/>

        // Add more routes as needed
      </Routes>
    </BrowserRouter>


  );
}

export default App;