import { useSelector } from "react-redux";
import { useMemo } from "react";

import Loader from "../Loader/Loader";
import Contact from "../Contact/Contact";

import clsx from "clsx";
import css from "./ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);
  const loading = useSelector((state) => state.contacts.loading);

  const filteredContacts = useMemo(
    () =>
      selectContacts.filter((contact) => {
        return contact.name
          .toLowerCase()
          .includes(selectNameFilter.toLowerCase());
      }),
    [selectNameFilter, selectContacts]
  );

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
