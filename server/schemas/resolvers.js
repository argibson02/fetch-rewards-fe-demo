const { State, Occupation, Form } = require('../models');
const { startSession } = require('../models/Tech');
import { getStateAndOccupation, postFormDetails } from '../3rd-party-api-calls/fetch-reward-api';

const resolvers = {
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