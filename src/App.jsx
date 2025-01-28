import './index_section_one/section_one_index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar_two from './components/section_two/Navbar_two.jsx';
import Entry from './components/section_two/Entry.jsx';
import travelData from './assets/section_two/section_two_data/travelData.js';
import jokesData from './assets/section_two/section_two_data/jokesData.js';
import Joke from './components/section_two/Joke.jsx';

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke punchline={joke.punchline} setup={joke.setup} />;
  });

  return (
    <>
      <Navbar_two />
      {travelData.map((data, index) => (
        <Entry
          key={index}
          title={data.title}
          location={data.location}
          googleMapsUrl={data.googleMapsUrl}
          startDate={data.startDate}
          endDate={data.endDate}
          description={data.description}
          img={{ src: data.imageUrl, alt: 'Mount Fuji' }}
        />
      ))}
      {jokeElements}
    </>
  );
}
