import React, { useEffect, useState } from "react";
import { Input } from "components/Input/Input";
import { Textarea } from "components/Textarea/Textarea";
import { Button } from "components/Button/Button";
import { Snackbar } from "components/Snackbar/Snackbar";
import axios from 'axios';

import './ContactForm.css';

const contactUrl = "https://a5els4vmw2.execute-api.us-east-1.amazonaws.com/v1/contacts";

export const ContactForm = (props) => {
  const initContact = {
    title: '',
    email: '',
    message: '',
    guestname: '',
    phone: ''
  };
  const initValidator = {
    title: '',
    email: '',
    message: '',
    guestname: ''
  };
  const [contactData, setContactData] = useState(initContact);
  const [validator, setValidator] = useState(initValidator);
  const [formValid, setFormValid] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [status, setStatus] = useState('success');
  
  const onChange = (evt) => {
    setContactData({
      ...contactData,
      [evt.target.name]: evt.target.value
    });

    validateField(evt.target.name, evt.target.value);
  }

  const contactHandler = async () => {    
    if (formValid) {
      const res = await axios.post(contactUrl, contactData, {
        headers: { 'content-type': 'application/json' }
      });

      console.log('result:', JSON.stringify(res));
      //show snackbar
      if (res.statusCode === 200) {
        setConfirmMsg('Your message has been sent. Thank you!');
      } else {
        setConfirmMsg(res.message);
      }
      
      setIsShow(!isShow);
      setTimeout(() => setIsShow(false), 1000);
    }
  }
  const validateField = (fieldName, fieldValue) => {
    let message = '';
    if (['title', 'message', 'email', 'guestname'].includes(fieldName)) {
      let name = '';
      switch (fieldName) {
        case 'title':
          name = 'Subject';
          break;
        case 'guestname':
          name = 'Full name';
          break;
        case 'email':
          name = 'Email';
          break;
        case 'message':
          name = 'Message';
          break;
        default:
          name = 'Phone';
          break;
      }
      
      if (fieldValue === '') {
        message = `${name} is invalid!`;
      } else if (fieldName === 'email' && fieldValue !== '') {
        const regex = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g);
        const test = regex.test(fieldValue);
        if (!test)
          message = `${name} is invalid`;
        else message = '';
      } else {
        message = '';
      }
    }
    setValidator({
      ...validator,
      [fieldName]: message
    })
  }
  const validateForm = () => {
    let flag = true;
    for (const key in contactData) {
      if (!['phone'].includes(key)
        && contactData[key] === '') {
        flag = flag && false;
      }
    }
    setFormValid(flag);
  }

  useEffect(() => {
    validateForm();
  }, [contactData]);
  

  return (
    <main className="email-form form-contact">
      <div className="row">
        <div className="col form-group">
          <Input
            floating={true}
            invalid={validator.guestname !== '' ? true : false}
            type='text'
            name='guestname'
            id='guestname'
            value={contactData.guestname}
            label='Your Name*'
            changed={onChange}
          />
          {
            validator.guestname !== '' && 
            <div className="error">{validator.guestname}</div>
          }
        </div>
        <div className="col form-group">
          <Input
            floating={true}
            invalid={validator.email !== '' ? true : false}
            type='email'
            name='email'
            id='email'
            value={contactData.email}
            label='Your Email*'
            changed={onChange}
          />
          {
            validator.email !== '' && 
            <div className="error">{validator.email}</div>
          }
        </div>
      </div>
      
      <div className="form-group">
        <Input
          floating={true}
          invalid={validator.title !== '' ? true : false}
          type='text'
          name='title'
          id='title'
          value={contactData.title}
          label='Subject*'
          changed={onChange}
        />
        {
          validator.title !== '' && 
          <div className="error">{validator.title}</div>
        }
      </div>
      
      <div className="form-group">
        <Input
          floating={true}
          type='number'
          name='phone'
          id='phone'
          value={contactData.phone}
          label='Phone Number'
          changed={onChange}
        />
      </div>
      
      <div className="form-group">
        <Textarea
          floating={true}
          invalid={validator.message !== '' ? true : false}
          name='message'
          id='message'
          rows={5}
          value={contactData.message}
          label='Message*'
          changed={onChange}
        ></Textarea>
        {
          validator.message !== '' && 
          <div className="error">{validator.message}</div>
        }
      </div>
      
      <div className="my-3">
        <div className="loading">Loading</div>
      </div>
      
      <div className="text-center">
        <Button
          className='btn-primary'
          type='button'
          clicked={contactHandler}
          disabled={!formValid}
        >Send Message</Button>
      </div>
      
      <Snackbar isShow={isShow} message={confirmMsg} status={status}></Snackbar>
    </main>
  );
};