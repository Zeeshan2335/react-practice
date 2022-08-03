import logo from './logo.svg';
import './App.css';
import Landing from './Landing';
import User from './Components/User';
import MobileList from './Components/todos/mobileList';


function App() {
  return (
    <div className="App">
      {/* <Landing  /> */}
      <MobileList/>
{/* <User/> */}
    </div>
  );
}

export default App;
