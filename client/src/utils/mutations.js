import { gql } from '@apollo/client';

// export const CREATE_MATCHUP = gql`
//   mutation createMatchup($tech1: String!, $tech2: String!) {
//     createMatchup(tech1: $tech1, tech2: $tech2) {
//       _id
//       tech1
//       tech2
//     }
//   }
// `;

export const CREATE_STATE = gql`
  mutation createState() {
    states {
      name
      abbreviation
    }
  }
`;

export const CREATE_OCCUPATION = gql`
  mutation createOccupation() {
    occupation {
      name
    }
  }
`;

export const CREATE_FORM = gql`
  mutation createForm($name: String!, $email: String!, $password: String!, $occupation: String!, $state: String!) {
    createForm(name: $name, email: $email, password: $password, occupation: $occupation, state: $state) {
      name
      email
      password
      occupation
      state
    }
  }
`;

