import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar_two from './components/section_two/Navbar_two.jsx';
import Entry from './components/section_two/Entry.jsx';
import travelData from './assets/section_two/section_two_data/travelData.js';

export default function App() {
  const entryElements = travelData.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <>
      <Navbar_two />
      <main>{entryElements}</main>
    </>
  );
}
