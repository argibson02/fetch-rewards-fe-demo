const { AuthenticationError } = require('apollo-server-express');
const { State, Occupation, Form } = require('../models');
const { getStateAndOccupation, postFormDetails } = require('../3rd-party-api-calls/fetch-reward-api');
const GraphQLJSON = require('graphql-type-json');

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    state: async () => {
      return State.find({});
    },
    occupation: async () => {
      return Occupation.find({});
    },
    form: async () => {
      return Form.find({});
    },
    getStateAndOccupation: async (parent, args) => {
      let result = await getStateAndOccupation();
      console.log(result);
      return { getStateAndOccupation: result }
    }
  },
  Mutation: {
    createState: async (parent, args) => {
      let result = await getStateAndOccupation();
      console.log(result);
      let statesList = result.states;
      const state = await State.insertMany({ statesList });
      console.log(state);
      return state;
    },
    createOccupation: async (parent, args) => {
      let result = await getStateAndOccupation();
      console.log(result);
      let occupationsList = result.occupations;
      const occupation = await Occupation.insertMany({ occupationsList });
      console.log(occupation);
      return occupation;
    },
    createForm: async (parent, { name, email, password, occupation, state }) => {
      const form = await Form.create({ name, email, password, occupation, state });
      return form;
    },
    postFormDetails: async (parent, { name, email, password, occupation, state }) => {
      try {
        const postedForm = await postFormDetails({ name, email, password, occupation, state });

        console.log('Form submitted');
        console.log(postedForm);

        return postedForm;

      } catch (e) {
        console.error(e);
      }
    }
  }
};

module.exports = resolvers;