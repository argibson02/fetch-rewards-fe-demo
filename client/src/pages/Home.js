import React, { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_STATE_AND_OCCUPATION, POST_FORM } from '../utils/queries';
import { validateEmail, checkInputs, validatePassword } from '../utils/helpers';


const Home = () => {
  //====== STATE/OCCUPATION QUERY - Start =======//
  const { loading, data } = useQuery(GET_STATE_AND_OCCUPATION, {
    // fetchPolicy: "no-cache"\
  }, []);

  const occupationAndStateList = data || [];
  let occupationList = [];
  let etatList = [];
  let etatLoaded = false;

  if (data) {
    // Grabs occupation array.
    occupationList = occupationAndStateList.getStateAndOccupation.stateAndOccupationData.occupations;

    // Iterates through state object and creates an array that can be mapped in the form dropdown.
    (() => {
      let etatObject = occupationAndStateList.getStateAndOccupation.stateAndOccupationData.states;
      etatObject.forEach(element => etatList.push(element.name));
      etatLoaded = true;
    })();
  }
  //^^^^^^^ STATE/OCCUPATION QUERY - End ^^^^^^^//




  let submissionBody = {};
  const [postForm, { loading: form_loading, data: form_data }] = useLazyQuery(POST_FORM, {
    variables: { formData: submissionBody }
  });


  //====== FORM VALIDATION - Start =======//
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [etat, setEtat] = useState(''); // Using "État" as a substitute for "State" to avoid potentially messing with React states...
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'fullName') {
      setFullName(inputValue);
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


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!checkInputs(fullName)) {
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

    // POST of form data.
    try {
      // Convert submitted values into an object
      submissionBody = {
        name: fullName,
        email: email,
        password: password,
        occupation: occupation,
        state: etat
      };
      
      // Convert to JSON string
      submissionBody = JSON.stringify(submissionBody);

      // Send string in query to POST 
      postForm({ variables: { formData: submissionBody } });

      // Clears submission
      submissionBody = {};
    } catch (err) {
      console.error(err);
    }

    // Clears all state values
    setErrorMessage();
    setFullName('');
    setEmail('');
    setPassword('');
    setOccupation('');
    setEtat('');
  };
  //^^^^^^^ FORM VALIDATION - End ^^^^^^^//



  //====== REACT HTML - Start =======//
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Automotive Extended Warranty Sign-up!</h1>
      </div>
      <div className="card-body m-5">
        <p>We've been trying to reach you about your car's extended warranty. Please fill out the info below and we will be in contact with you shortly regarding your exclusive offer.</p>
      </div>

      <section className="h-100 bisection bisection-3 col-lg-6">
        <h1 className="bisection-h1 bisection-3-h1">Sign-up Form</h1>
        <form>

          {/* Name field */}
          <div className="form-group mb-2">
            <label htmlFor="full-name">Name</label>
            <input
              value={fullName}
              name="fullName"
              onChange={handleInputChange}
              type="fullName"
              className="form-control"
              id="full-name"
              placeholder="Sammy Sample" />
          </div>

          {/* Email field */}
          <div className="form-group mb-2">
            <label htmlFor="email">Email address</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="email"
              // aria-describedby="emailHelp"
              placeholder="not@scam.com" />
          </div>

          {/* Password field */}
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

          {/* Occupation field */}
          <div className="form-group col-8">
            <label htmlFor="inputOccupation">Occupation</label>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <select
                value={occupation}
                name="occupation"
                onChange={handleInputChange}
                type="occupation"
                className="form-control"
                id="occupation"
              >
                <option hidden value="">Select occupation...</option>
                {occupationList.map((occupation, index) => {
                  return (
                    <option key={index}>
                      {occupation}
                    </option>
                  );
                })}
              </select>
            )}
          </div>

          {/* State field */}
          <div className="form-group col-8">
            <label htmlFor="inputEtat">State</label>
            {!etatLoaded ? (
              <div>Loading...</div>
            ) : (
              <select
                value={etat}
                name="etat"
                onChange={handleInputChange}
                type="etat"
                className="form-control"
                id="etat"
              >
                <option hidden value="">Select state...</option>
                {etatList.map((etat, index) => {
                  return (
                    <option key={index}>
                      {etat}
                    </option>
                  );
                })}
              </select>
            )}
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
//^^^^^^^ REACT HTML - End ^^^^^^^//

export default Home;
