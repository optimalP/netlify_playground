import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Update form data as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    // Do not call preventDefault(), allow form to be submitted naturally
    // We can add custom actions like logging, but we let Netlify handle the POST
    console.log("Form submitted:", formData);
  };

  return (
    <div className="App">
      <h1>Netlify Form Test with handleSubmit</h1>

      {/* Simple form for testing Netlify submission */}
      <form name="test-form" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        {/* Hidden input for Netlify form processing */}
        <input type="hidden" name="form-name" value="test-form" />

        {/* Name Field */}
        <p>
          <label>
            Your Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        </p>

        {/* Email Field */}
        <p>
          <label>
            Your Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </p>

        {/* Submit Button */}
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}

export default App;
