export default function Joke(whatever) {
  return (
    <>
      <section className="text-black">
        <div>{whatever.setup}</div>
        <div>{whatever.punchline}</div>
      </section>
    </>
  );
}
