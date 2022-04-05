import expect from 'expect';

import request from '../../../request-helper';

const testUser = {
  email: 'test-user@gmail.com',
  firstName: 'test',
  lastName: 'user',
  password: 'test1234',
  roles: ['admin'],
};

describe('interview', () => {
  let token: any = null;
  let techId: any = null;
  let userId: any = null;
  let interviewId: any = null;
  before(async () => {
    await request({
      query: `
            mutation {
              login(email:"${testUser.email}", password:"${testUser.password}") {
                user {
                  id
                }
                token
              }
            }
          `,
    })
      .expect((res) => {
        expect(res.body).toHaveProperty('data.login.user.id');
        expect(res.body).toHaveProperty('data.login.token');

        token = res.body.data.login.token;
        userId = res.body.data.login.user.id;
      })
      .expect(200);

    await request({
      query: `
            mutation {
                createTechnology(name:"DotNet") {
                    id
                    name
                }
            } `,
    })
      .set('Authorization', `Bearer ${token}`)
      .expect((res) => {
        expect(res.body).toHaveProperty('data.createTechnology.id');
        expect(res.body).toHaveProperty('data.createTechnology.name', 'DotNet');
        techId = res.body.data.createTechnology.id;
      })
      .expect(200);
  });

  describe('create-interview', () => {
    it('should create a new interview', () => {
      return request({
        query: `
            mutation {
                createInterview(
                    interviewer:"${userId}"
                    recruiter:"${userId}"
                    candidate: {firstName: "john", lastName: "doe"}
                    date: "03/26/2022"
                    technology: "${techId}"
                ) {
                    id
                    candidate {
                        id
                        firstName
                        lastName
                    }
                    date
                    interviewer {
                        id
                        firstName
                        lastName
                    }
                }
            } `,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('data.createInterview.id');
          expect(res.body).toHaveProperty('data.createInterview.candidate');
          expect(res.body).toHaveProperty('data.createInterview.date');
          expect(res.body).toHaveProperty('data.createInterview.interviewer');
          interviewId = res.body.data.createInterview.id;
        })
        .expect(200);
    });
  });

  describe('interviews', () => {
    it('should get the interviews assigned to a user', () => {
      return request({
        query: `
            query {
                interviews {
                    id
                    candidate {
                        id
                        firstName
                        lastName
                    }
                    date
                    interviewer {
                        id
                        firstName
                        lastName
                    }
                }
            }`,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('data.interviews');
          expect(res.body.data.interviews).toHaveLength(1);
        });
    });
  });

  describe('fill-scorecard', () => {
    it('should fill a scorecard if the interview exists', () => {
      return request({
        query: `
            mutation {
                fillScorecard(
                    interviewId: "${interviewId}"
                    scorecard: {
                        feedback:"rejected"
                        skills: [{
                            feedback: "xxx"
                            name: "Hooks"
                            rating: 2
                        },
                        {
                            feedback: "xxx"
                            name: "Rendering"
                            rating: 3
                        }]
                        status: 1
                    }
                ) {
                    id
                    candidate {
                        id
                        firstName
                        lastName
                    }
                    date
                    interviewer {
                        id
                        firstName
                        lastName
                    }
                    scorecard {
                        feedback
                        skills {
                            feedback
                            name
                            rating
                        }
                        status
                    }
                }
            }`,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('data.fillScorecard');
          expect(res.body).toHaveProperty('data.fillScorecard.candidate.id');
          expect(res.body).toHaveProperty('data.fillScorecard.interviewer.id');
          expect(res.body).toHaveProperty('data.fillScorecard.scorecard.skills');
          expect(res.body.data.fillScorecard.scorecard.skills).toHaveLength(2);
        });
    });
  });
});
