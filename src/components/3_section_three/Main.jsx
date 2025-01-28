import React from 'react';

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [error, setError] = React.useState(null);

  const ingredientsEntry = ingredients.map((entry) => (
    <li key={entry}>{entry}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    if (newIngredient === '') {
      alert('Box cannot be empty');
    } else {
      !ingredients.includes(newIngredient)
        ? setIngredients((prevIngredient) => [...prevIngredient, newIngredient])
        : alert('Item already exists');
    }
  }

  return (
    <main className="pt-20">
      <form className="flex justify-center gap-3" action={addIngredient}>
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
