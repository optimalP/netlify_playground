import React, { useState } from 'react';

function IdeaValidation() {
  const [fileError, setFileError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5242880) {  // 5MB in bytes
      setFileError('File size exceeds 5MB');
      e.target.value = ''; // Clear the file input
    } else {
      setFileError('');
    }
  };

  return (
    <section id="idea-validation">
      <h2>Validate My Idea</h2>
      <p>I have a new idea and I'd love your feedback! If you find the idea interesting and would subscribe, I'll consider you for a referral to AMEX. You can also attach your resume if you're interested in future opportunities.</p>
      <form name="idea-validation" method="POST" data-netlify="true" encType="multipart/form-data">
        <input type="hidden" name="form-name" value="idea-validation" />
        
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div>
          <label htmlFor="idea-feedback">Would you subscribe to this idea?</label>
          <select id="idea-feedback" name="idea-feedback" required>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="resume">Upload your resume (PDF, DOC, DOCX):</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
          {fileError && <p style={{color: 'red'}}>{fileError}</p>}
        </div>

        <div>
          <label htmlFor="comments">Any additional comments or thoughts?</label>
          <textarea id="comments" name="comments"></textarea>
        </div>
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default IdeaValidation;
