import './index_section_one/section_one_index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar_two from './components/section_two/Navbar_two.jsx';
import Entry from './components/section_two/Entry.jsx';
import Joke from './components/section_two/Joke.jsx';

export default function App() {
  const jokes = {
    setup_one: 'I got my daughter a fridge for her birthday.',
    punchline_one: "I can't wait to see her face light up when she opens it",
    setup_two: 'How did the hacker escape the police.',
    punchline_two: 'He just ransomware!',
    setup_three: "Why don't pirates travel on mountain roads?",
    punchline_three: 'Scurvy',
    setup_four: 'Why do bees stay in the hive in the winter?',
    punchline_four: 'Swarm.',
  };

  return (
    <>
      <Navbar_two />
      <Entry />
      {/*<Joke setup={jokes.setup_one} punchline={jokes.punchline_one} />*/}
      {/*<Joke punchline={jokes.punchline_one} />*/}
      {/*<Joke setup={jokes.setup_two} punchline={jokes.punchline_two} />*/}
      {/*<Joke setup={jokes.setup_three} punchline={jokes.punchline_three} />*/}
      {/*<Joke setup={jokes.setup_four} punchline={jokes.punchline_four} />*/}
    </>
  );
}
