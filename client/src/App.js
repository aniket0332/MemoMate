import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MyNotes from './Pages/MyNotes';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>          
           <Route exact path='/' element={<LandingPage/>} />
           <Route path='/login' element={<LoginPage/>} />        
           <Route path='/register' element={<RegisterPage/>} />        
           <Route path='/myNotes' element={<MyNotes/>} />        
           {/* <Route path="/createnote" element={<CreateNote/>} />; */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
