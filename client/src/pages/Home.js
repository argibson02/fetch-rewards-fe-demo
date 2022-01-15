import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';
import { GET_STATE_AND_OCCUPATION } from '../utils/queries';

import { validateEmail, checkInputs } from '../utils/helpers';

const Home = () => {
  const { loading, data } = useQuery(GET_STATE_AND_OCCUPATION, {
    fetchPolicy: "no-cache"
  }, []);


  //===================================================
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactName, setContactName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'contactName') {
      setContactName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    if (!checkInputs(message) || !checkInputs(contactName)) {
      setErrorMessage(`All fields are required.`);
      return;
    }

    setContactName('');
    setMessage('');
    setEmail('');
  };
  //===================================================




  // const matchupList = data?.matchups || [];
  const occupationAndStateList = data || [];
  console.log(occupationAndStateList);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of matchups you can vote on:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {occupationAndStateList.map((state) => {
              return (
                <li>
                  {state.name}
                  <br />
                  {state.abbreviation}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div>

      <section className="h-100 bisection bisection-3 col-lg-6">
        <h1 className="bisection-h1 bisection-3-h1">contact form</h1>
        <form>
          <div className="form-group mb-2">
            <label htmlFor="email">Email address</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email" />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="contact-name">Name</label>
            <input
              value={contactName}
              name="contactName"
              onChange={handleInputChange}
              type="contactName"
              className="form-control"
              id="contact-name"
              placeholder="Sammy Sample" />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              className="form-control"
              id="message"
              rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </section>

    </div>
  );
};

export default Home;
