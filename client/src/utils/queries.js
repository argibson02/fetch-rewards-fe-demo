import { gql } from '@apollo/client';

// export const QUERY_MATCHUPS = gql`
//   query matchups($_id: String) {
//     matchups(_id: $_id) {
//       _id
//       tech1
//       tech2
//       tech1_votes
//       tech2_votes
//     }
//   }
// `;


export const QUERY_STATE = gql`
  query states {
    states {
      name
      abbreviation
    }
  }
`;

export const QUERY_OCCUPATION = gql`
  query occupation {
    occupation {
      name
    }
  }
`;

export const QUERY_FORM = gql`
  query form {
    form {
      name
      email
      password
      occupation
      state
    }
  }
`;

export const GET_STATE_AND_OCCUPATION = gql`
  query getStateAndOccupation {
    getStateAndOccupation {
        stateAndOccupationData
      }
  }
`;

export const POST_FORM = gql`
  query postFormDetails($formData: JSON) {
    postFormDetails(formData: $formData) {
      formData
    }
  }
`;

// export const POST_FORM = gql`
//   query postFormDetails($name: String!, $email: String!, $password: String!, $occupation: String!, $state: String!) {
//     postFormDetails(name: $name, email: $email, password: $password, occupation: $occupation, state: $state) {
//       name
//       email
//       password
//       occupation
//       state
//     }
//   }
// `;


// use front end javascript to jsonify the input. Send the thign over as JSON obkect????