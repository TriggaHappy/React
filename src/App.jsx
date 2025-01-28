import MainContent from './components/MainContent.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer.jsx';
import backgroundImage from './assets/react-background.png';

export default function App() {
  console.log(backgroundImage);

  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}
