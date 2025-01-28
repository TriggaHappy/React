import React from 'react';

export default function Forms() {
  function signUp(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const description = formData.get('description');
    const status = formData.get('employmentStatus');
    console.log(email);
    console.log(password);
    console.log(description);
    console.log(status);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />

        <br />
        <label htmlFor="description">Description: </label>
        <br />
        <textarea
          className="border-2"
          name="description"
          id="description"
        ></textarea>
        <br />

        <fieldset className="border-2">
          <legend>Employment Status</legend>
          <label className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="employmentStatus"
              value="unemployed"
            />
            Unemployed
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="employmentStatus"
              value="part-time"
            />
            Part Time
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="employmentStatus"
              value="full-time"
            />
            Full Time
          </label>
        </fieldset>

        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}
