import Globe from '../../assets/section_two/globe.svg';

export default function Navbar_two() {
  return (
    <>
      <section className="flex h-10 bg-red-500 items-center justify-center">
        <img src={Globe} />
        <div className="pl-2 text-white text-xl">my travel journal.</div>
      </section>
    </>
  );
}
