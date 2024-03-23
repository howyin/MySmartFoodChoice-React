// need to import more component for the UI.
import './App.css'
import Header from './Authentication/Header.jsx';
import LoginForm from './Authentication/LoginForm.jsx';
import Test from './Test/Card.jsx';
// some components are not showing up.
function App() 
{
  // the part 
  return(
    <>
      <Header/>
      <LoginForm/>
    </>
  );
}

export default App;