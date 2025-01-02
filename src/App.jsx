import MainContent from './components/section 1/MainContent.jsx';
import Navbar from './components/section 1/Navbar.jsx';
import './section 1/section_one_index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/section 1/Footer.jsx';
import backgroundImage from './assets/section 1/react-background.png';

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
