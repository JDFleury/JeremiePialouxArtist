import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.page';
import AboutPage from './pages/aboutPage/about.page';
import ContactPage from './pages/contactPage/contact.page';
import Navigation from './components/navigation/navigation.component';
import firebaseApp from './firebase/firebase.utils';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='about' element={<AboutPage />} />
        <Route exact path='contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;