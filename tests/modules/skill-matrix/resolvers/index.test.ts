import expect from 'expect';

import request from '../../../request-helper';

const testUser = {
  email: 'test-user@gmail.com',
  firstName: 'test',
  lastName: 'user',
  password: 'test1234',
  roles: ['admin'],
};

describe('skill matrix', () => {
  let token: any = null;
  let techId: any = null;
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
      })
      .expect(200);

    await request({
      query: `
            mutation {
                createTechnology(name:"Node") {
                    id
                    name
                }
            } `,
    })
      .set('Authorization', `Bearer ${token}`)
      .expect((res) => {
        expect(res.body).toHaveProperty('data.createTechnology.id');
        expect(res.body).toHaveProperty('data.createTechnology.name', 'Node');
        techId = res.body.data.createTechnology.id;
      })
      .expect(200);
  });
  describe('create-skill-matrix', () => {
    it('should not create a skill matrix if the technology parameter is missing', () => {
      return request({
        query: `
            mutation {
                createSkillMatrix(skills: ["a", "b"]) {
                    id
                }
            }`,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('errors');
          expect(Array.isArray(res.body.errors)).toBe(true);
        });
    });

    it('should not create a skill matrix if the skills parameter is missing', () => {
      return request({
        query: `
              mutation {
                  createSkillMatrix(technology: "${techId}") {
                      id
                  }
              }`,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('errors');
          expect(Array.isArray(res.body.errors)).toBe(true);
        });
    });

    it('should not create a skill matrix if the skills are empty', () => {
      return request({
        query: `
              mutation {
                  createSkillMatrix(technology: "${techId}", skills: []) {
                      id
                  }
              }`,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('errors');
          expect(Array.isArray(res.body.errors)).toBe(true);
        });
    });

    it('should create a new skill matrix', () => {
      return request({
        query: `
            mutation CreateSkillMatrix {
                createSkillMatrix(technology:"${techId}", skills: ["a", "b"]) {
                    id
                    technology
                    skills
                }
            } `,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('data.createSkillMatrix.id');
          expect(res.body).toHaveProperty('data.createSkillMatrix.skills');
          expect(res.body.data.createSkillMatrix.skills).toHaveLength(2);
        })
        .expect(200);
    });

    it('should not create a new skill matrix if it already exists', () => {
      return request({
        query: `
            mutation {
                createSkillMatrix(technology:"${techId}") {
                    id
                }
            }`,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('errors');
          expect(Array.isArray(res.body.errors)).toBe(true);
        });
    });
  });

  describe('skill-matrix', () => {
    it('should get the skill matrix by technology id', () => {
      return request({
        query: `
            query {
                skillMatrix(technology: "${techId}") {
                    id
                    technology
                    skills
                }
            }`,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('data.skillMatrix');
          expect(res.body.data.skillMatrix.skills).toHaveLength(2);
        });
    });
  });
});
