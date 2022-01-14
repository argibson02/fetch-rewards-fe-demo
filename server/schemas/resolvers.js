const { Tech, Matchup, State, Occupation, Form } = require('../models');
const { startSession } = require('../models/Tech');
import { getFormDetails, postFormDetails } from '../3rd-party-api-calls/fetch-reward-get';

const resolvers = {
  Query: {
    // tech: async () => {
    //   return Tech.find({});
    // },
    state: async () => {
      return State.find({});
    },
    occupation: async () => {
      return Occupation.find({});
    },
    form: async () => {
      return Form.find({});
    }
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
  },
  Mutation: {
    // createMatchup: async (parent, args) => {
    //   const matchup = await Matchup.create(args);
    //   return matchup;
    // },
    submitForm: async (parent, args) => {
      const form = await Form.create(args);
      return form;
    },
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },
  },
};

module.exports = resolvers;
