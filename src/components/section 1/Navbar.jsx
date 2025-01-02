import reactLogo from '../../assets/section 1/react.svg';

export default function Navbar() {
  return (
    <>
      <section className="flex items-center shadow-2xl bg-gray-800 z-50 h-28">
        <img className="m-2 ml-2 w-20" src={reactLogo} alt="React-Logo" />
        <h1 className="font-extrabold react-color text-2xl">ReactFacts</h1>
        <button
          className="ml-4 p-2 text-white rounded shadow-lg"
          style={{ backgroundColor: '#61DAFB' }}
        >
          <i className="fas fa-home text-gray-700"></i>
        </button>
        <ul className="ml-auto mr-4 flex space-x-4">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
    </>
  );
}
