export default function Main() {
  const ingredients = ['Chicken', 'Oregano', 'Tomatoes'];
  const ingredientsEntry = ingredients.map((entry) => (
    <li key={entry}>{entry}</li>
  ));

  function formSubmitting(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('ingredient');
    ingredients.push(newIngredient);
  }

  return (
    <main className="pt-20">
      <form className="flex justify-center gap-3" onSubmit={formSubmitting}>
        <input
          className="border-2 rounded-lg border-black shadow-xl flex-grow min-w-4 max-w-lg p-1"
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button className="font-sans rounded-lg bg-gray-800 text-white px-3 font-bold">
          + Add ingredient
        </button>
      </form>
      <ul className="pt-5 flex list-decimal justify-center">
        <div>{ingredientsEntry}</div>
      </ul>
    </main>
  );
}
