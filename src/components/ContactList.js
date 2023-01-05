import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return ( 
  <div className="main">
    <h2>Contact list
        <button className="ui button blue right">Add new contact</button>
    </h2>
  <div className="ui celled list">{renderContactList}</div>
  </div>
  )
};

export default ContactList;