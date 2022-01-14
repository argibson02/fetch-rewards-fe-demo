const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar JSON

  type Occupation {
    _id: ID!
    name: String!
  }

  type State {
    _id: ID!
    name: String!
  }

  type Form {
    _id: ID!
    name: String!
    email: String!
    password: String!
    occupation: String!
    state: String!
  }

  type getStateAndOccupation {
    stateAndOccupationData: JSON
  }

  type Query {
    state: State
    occupation: Occupation
    form: Form
    getStateAndOccupation: getStateAndOccupation
  }

  type Mutation {
    createForm: Form
    postFormDetails(name: String!, email: String!, password: String!, occupation: String!, state: String!): Form
    ## not 100% on that last one here. "): Form" part....
  }
`;

module.exports = typeDefs;
