import { useState } from "react";
import "./App.css";
import contactData from "./contacts.json";

function App() {
  const [contactsArray, setContactsArray] = useState(contactData.slice(0, 5));

  // 2. Add random contacts
  function getRandomContact() {
    const remainingContacts = contactData.filter((eachData) => {
      const existingContacts = contactsArray.find((existingContact) => {
        return eachData.id === existingContact.id;
      });
      return !existingContacts;
    });

    const randomNum = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomNum];

    setContactsArray((contactsArray) => [randomContact, ...contactsArray]);
  }

  return (
    <div className="Contact">
      <h1>Iron Contacts</h1>
      <button onClick={getRandomContact}>Add Random Contact</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {contactsArray.map((contact) => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td>
                  <img
                    className="contact-img"
                    src={contact.pictureUrl}
                    alt="img"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🥈" : ""}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
