import React from 'react';
import { socialContacts } from './data';

const Contact = () => {
  return (
    <div className="contact">
      {socialContacts.map((contact) => (
        <a
          key={contact.platform}
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <contact.icon />
        </a>
      ))}
    </div>
  );
};

export default Contact;