// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STATE_AND_OCCUPATION } from '../utils/queries';

import { validateEmail, checkInputs, validatePassword } from '../utils/helpers';

const Home = (e) => {
  e.preventDefault();
  const { loading, data } = useQuery(GET_STATE_AND_OCCUPATION, {
    // fetchPolicy: "no-cache"
  }, []);
  console.log(loading);
  console.log(data);


  //===================================================
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactName, setContactName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [etat, setEtat] = useState(''); // Using "État" as a substitute for "State" to avoid potentially messing with React states.
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'contactName') {
      setContactName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'password') {
      setPassword(inputValue);
    } else if (inputType === 'occupation') {
      setOccupation(inputValue);
    } else if (inputType === 'etat') {
      setEtat(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!checkInputs(contactName)) {
      setErrorMessage(`Name is required.`);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('Password is invalid');
      //consist 8-15 chars, first character must A-Z or a-z, the next 17-14 chars a word char (\w) - (A-Z, a-z, 0-9, _)
      return;
    }

    if (!checkInputs(occupation)) {
      setErrorMessage(`Occupation is required.`);
      return;
    }

    if (!checkInputs(etat)) {
      setErrorMessage(`State is required.`);
      return;
    }

    setContactName('');
    setEmail('');
    setPassword('');
    setOccupation('');
    setEtat('');
  };
  //===================================================



  // const matchupList = data?.matchups || [];
  const occupationAndStateList = data || [];

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

      <section className="h-100 bisection bisection-3 col-lg-6">
        <h1 className="bisection-h1 bisection-3-h1">contact form</h1>
        <form>
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
            <label htmlFor="password">Password</label>
            <input
              value={password}
              name="password"
              onChange={handleInputChange}
              type="password"
              className="form-control"
              id="password"
              placeholder="abcd1234" />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            {/* <select id="inputState" class="form-control"> */}

            {loading ? (
              <div>Loading...</div>
            ) : (
              <select id="inputState" className="form-control">
                {occupationAndStateList.map((occupation) => {
                  return (
                    <option>
                      {occupation}
                    </option>
                  );
                })}
              </select>
            )}

            {/* <option selected>Choose...</option>
              <option>...</option> */}
            {/* </select> */}
          </div>


          {/* <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <select id="inputState" class="form-control">
                {occupationAndStateList.map((state) => {
                  return (
                    <option>
                      {state.name}
                    </option>
                  );
                })}
              </select>
            )}
          </div> */}


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
