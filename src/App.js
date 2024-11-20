import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Dashboard from './pages/Home';
import Header from './components/Header';

function App() {
  return (
   <Router>
    <Header/>
   <Routes>
    <Route  path="/" exact={true} element={<Dashboard/>}/>
    <Route  path="/dashboard" exact={true} element={<Dashboard/>}/>

   </Routes>
   </Router>
  );
}

export default App;
