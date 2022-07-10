import React from 'react';
import { createText } from '../../utils/helpers';
export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Name
      </p>
      {/* onMouseOver={createText()} */}
      <textarea id="text-name" name="name" rows="4" cols="50" >Your name.</textarea>
      <p>
        Email
      </p>
      <textarea id="text-email" name="email" rows="4" cols="50">Your email.</textarea>
      <p>
        Message
      </p>
      <textarea id="text-message" name="message" rows="4" cols="50">Your message.</textarea>
    </div>
  );
}
