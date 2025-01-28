import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar_two from './components/2_section_two/Navbar_two.jsx';
import Entry from './components/2_section_two/Entry.jsx';
import travelData from './assets/2_section_two/section_two_data/travelData.js';
import Navbar_three from './components/3_section_three/Navbar_three.jsx';
import Main from './components/3_section_three/Main.jsx';
import StatePractice from './components/3_section_three/StatePractice.jsx';

export default function App() {
  /*section Two
    // const entryElements = travelData.map((entry) => {
  //   return <Entry key={entry.id} entry={entry} />;
  // });

  return (
    <>
      <Navbar_two />
      <main>{entryElements}</main>
    </>
  );
}
*/

  return (
    <>
      {/*<Navbar_three />*/}
      {/*<Main />*/}
      <StatePractice />
    </>
  );
}
