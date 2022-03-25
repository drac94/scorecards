import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    interviews(interviewer: ID!): [Interview] @isAuthenticated
  }

  extend type Mutation {
    createInterview(interviewer: ID!, candidate: CandidateInput!, date: Date!, technology: ID!): Interview @isAuthenticated
    fillScorecard(interview: ID!, scorecard: ScorecardInput!): Interview @isAuthenticated
  }

  input CandidateInput {
    firstName: String
    lastName: String
  }

  input ScorecardInput {
    feedback: String;
    skills: [{ feedback: String; name: String; rating: Int }];
  }

  type Candidate {
    id: ID
    firstName: String
    lastName: String
  } 
  
  type Interview {
    id: ID
    candidate: Candidate
    interviewer: User
    date: Date
  }
`;

export default typeDefs;
