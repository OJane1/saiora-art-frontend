import React from 'react';
import { socialContacts } from './data';
import './Contact.css';

const Contact = () => {
  return (
    <div className="footer">
      <div className="footer-content">
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
    </div>
  );
};

export default Contact;