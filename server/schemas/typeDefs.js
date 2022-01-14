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
    getStateAndOccupation: JSON
  }

  type Query {
    states: State
    occupations: Occupation
    forms: Form
    getStateAndOccupation: getStateAndOccupation
  }

  type Mutation {
    createForm: Form
    postFormDetails(name: String!, email: String!, password: String!, occupation: String!, state: String!): Form
  }
`;

module.exports = typeDefs;
