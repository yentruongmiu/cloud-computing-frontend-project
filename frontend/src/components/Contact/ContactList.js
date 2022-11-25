import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import Constants from "Constants";

export const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);
  const cookies = new Cookies();

  useEffect(() => {
    if (props.isAuth) {
      const getContacts = async () => {
        const token = cookies.get('token');

        const res = await axios.get(Constants.REACT_APP_CONTACT_ENDPOINT, {
          headers: {
            'content-type': 'application/json',
            'Authorization': token 
          }
        });
        console.log('res', JSON.stringify(res));
        setContacts(res.data);
      }
      getContacts();
    }
    
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Guest Name</th>
          <th scope="col">Email</th>
          <th scope="col">Title</th>
          <th scope="col">Phone</th>
          <th scope="col">Message</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.length && contacts.map((item, idx) => 
            (
              <tr key={idx}>
                <th scope="row">{idx}</th>
                <td>{item.guestname.S}</td>
                <td>{item.email.S}</td>
                <td>{item.title.S}</td>
                <td>{item.phone.N}</td>
                <td>{item.message.S}</td>
              </tr>
            )
          )
        }
        {contacts.length === 0 && 
          (<tr>
          <td colSpan="6">Contact is empty.</td>
        </tr>)
        }
      </tbody>
    </table>
  )
}