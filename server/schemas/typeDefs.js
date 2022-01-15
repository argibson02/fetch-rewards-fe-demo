const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar JSON

# GET and POST typedef to Fetch Rewards API
  type getStateAndOccupation {
    stateAndOccupationData: JSON
  }

  type postFormDetails {
    submittedForm: JSON
  }


  # Unused MongoDB server queries.
  type Occupation {
    _id: ID!
    name: String!
  }

  type State {
    _id: ID!
    name: String!
    abbreviation: String!
  }

  type Form {
    _id: ID!
    name: String!
    email: String!
    password: String!
    occupation: String!
    state: String!
  }

  type Query {
    state: State
    occupation: Occupation
    form: Form
  }

  type Mutation {
    createState: State
    createOccupation: Occupation
    createForm: Form
  }
`;

module.exports = typeDefs;
