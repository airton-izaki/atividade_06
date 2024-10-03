import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function RegistrationForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${inputs.name}, Email: ${inputs.email}, Password: ${inputs.password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your email:
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your password:
        <input
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Register" />
    </form>
  );
}

export default RegistrationForm;