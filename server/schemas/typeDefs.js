const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar JSON

  # type Tech {
  #   _id: ID!
  #   name: String!
  # }

  # type Matchup {
  #   _id: ID!
  #   tech1: String!
  #   tech2: String!
  #   tech1_votes: Int
  #   tech2_votes: Int
  # }

  # type Query {
  #   tech: [Tech]
  #   matchups(_id: String): [Matchup]
  # }

  type State {
    _id: ID!
    name: String!
  }

  type Occupation {
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

  type Query {
    states: State
    occupations: Occupation
  }

  type Mutation {
    submitForm: Form
  }


  # type Mutation {
  #   createMatchup(tech1: String!, tech2: String!): Matchup
  #   createVote(_id: String!, techNum: Int!): Matchup
  # }
`;

module.exports = typeDefs;
