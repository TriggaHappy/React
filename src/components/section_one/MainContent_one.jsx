export default function MainContent_one() {
  return (
    <>
      <main className="p-10 flex flex-col min-h-screen bg-gray-500 items-center">
        <section className="mt-4 ml-3 text-3xl">
          <h1 className="mb-2 font-extrabold">Fun Facts about React</h1>
          <ul className="list-disc pl-5 custom-list space-y-2">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k Stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </section>
      </main>
    </>
  );
}
