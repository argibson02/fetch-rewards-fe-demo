const { State, Occupation, Form } = require('../models');
const { getStateAndOccupation, postFormDetails } = require('../3rd-party-api-calls/fetch-reward-api');
const GraphQLJSON = require('graphql-type-json');

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    // GET API call to grab states and occupations.
    getStateAndOccupation: async (parent, args) => {
      try {
        let result = await getStateAndOccupation();
        // console.log(result);
        return { stateAndOccupationData: result };
      } catch (e) {
        console.error(e);
      }
    },

    // POST API call to submit form data.
    postFormDetails: async (parent, args) => {
    // postFormDetails: async (parent, { name, email, password, occupation, state }) => {
      console.log("hi");
      console.log(args);
      try {
        console.log("hi2");
        let result = await postFormDetails(args);

        console.log('Form submitted');
        console.log(result);

        return result;

      } catch (e) {
        // console.error(e.response.status);
        console.error(e);
      }
    },


    // Basic finds for models. Not currently used, but could be expanded to on MongoDB server.
    state: async () => {
      return State.find({});
    },
    occupation: async () => {
      return Occupation.find({});
    },
    form: async () => {
      return Form.find({});
    }

  },
  Mutation: {


    // Basic creates for models. Not currently used, but ready to be stored on MongoDB server.
    createState: async (parent, args) => {
      let result = await getStateAndOccupation();
      // console.log(result);
      let statesList = result.states;
      const state = await State.insertMany({ statesList });
      // console.log(state);
      return state;
    },
    createOccupation: async (parent, args) => {
      let result = await getStateAndOccupation();
      // console.log(result);
      let occupationsList = result.occupations;
      const occupation = await Occupation.insertMany({ occupationsList });
      // console.log(occupation);
      return occupation;
    },
    createForm: async (parent, { name, email, password, occupation, state }) => {
      const form = await Form.create({ name, email, password, occupation, state });
      // console.log(form);
      return form;
    }
  }
};

module.exports = resolvers;