import InterviewModel from '../../../models/interview';

type Args = {
  candidate: string;
  date: Date;
  interviewer: string;
  technology: string;
};

const createInterview = async (_parent: any, args: Args) => {
  const { candidate, date, interviewer, technology } = args;

  const interview = await InterviewModel.create({
    candidate,
    date,
    interviewer,
    technology,
  });

  return interview;
};

export default createInterview;
