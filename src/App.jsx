// need to import more component for the UI.
import './App.css'
import Header from './Authentication/Header.jsx';
import LoginForm from './Authentication/LoginForm.jsx';

function App() 
{
  return(
    <div className='app'>
        <Header/>
        <LoginForm/>
    </div>
  );
}

export default App;