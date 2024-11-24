import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contact}>
    <div className={css.contactDetails}>
      <IoMdPerson className={css.icon} />
      <p className={css.text}>{name}</p>
      <BsFillTelephoneFill className={css.icon} />
      <p className={css.text}>{number}</p>
    </div>
    <button onClick={() => onDeleteContact(id)} className={css.deleteButton}>Delete</button>
  </li>
);

export default Contact;
