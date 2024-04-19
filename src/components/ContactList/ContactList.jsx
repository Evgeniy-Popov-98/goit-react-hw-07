import { useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import Contact from "../Contact/Contact";

import clsx from "clsx";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const loading = useSelector((state) => state.contacts.loading);

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={clsx(css.contactsList)}>
      {loading && <Loader />}
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
