export default function Joke(whatever) {
  return (
    <>
      <section className="text-black">
        {whatever.setup && <div className="text-xl pb-2">{whatever.setup}</div>}
        <div>{whatever.punchline}</div>
        <hr />
      </section>
    </>
  );
}
