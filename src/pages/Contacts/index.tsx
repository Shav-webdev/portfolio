import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import './style.scss';
import Title from 'components/Title';
import Button from 'components/Button';
import emailjs from '@emailjs/browser';
import { useForm, ValidationError } from '@formspree/react';
import { socialObj } from 'helpers/constants';
import { LoaderIcon } from '../../assets/icons';

const Contacts = () => {
  let formRef: React.MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [state, handleSubmit] = useForm('xknanapj');

  useEffect(() => {
    if (!state.result && !state.succeeded) return;

    if (state.result && formRef?.current?.reset) {
      setTimeout(() => {
        formRef.current?.reset();
      }, 1000);
    }
  }, [state.succeeded, state.result]);

  return (
    <div className={'contacts'}>
      <Title>Contacts</Title>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="inputs-wrapper">
          <span className="form-item-wrapper">
            <input
              id="fromName"
              type="text"
              name="fromName"
              className="form-item"
            />
            <label htmlFor="fullName">Name</label>
            <ValidationError
              prefix="Name"
              field="fromName"
              errors={state.errors}
            />
          </span>
          <span className="form-item-wrapper">
            <input
              id="email"
              type="email"
              name="from_email"
              className="form-item"
            />
            <label htmlFor="email">Email</label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </span>
        </div>
        <div className="form-item-wrapper">
          <textarea name="message" className="form-item" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button
          disabled={state.submitting}
          type={'submit'}
          className={'primary'}
        >
          {state.submitting ? <LoaderIcon /> : 'Send'}
        </Button>
      </form>
      <div className="social-sites">
        {socialObj.map((obj) => {
          return (
            <a
              key={obj.id}
              className="social-item"
              href={obj.url}
              target="_blank"
            >
              {obj.icon()}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
