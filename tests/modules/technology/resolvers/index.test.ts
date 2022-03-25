import expect from 'expect';

import request from '../../../request-helper';

const testUser = {
  email: 'test-user@gmail.com',
  firstName: 'test',
  lastName: 'user',
  password: 'test1234',
  roles: ['admin'],
};

describe('technology', () => {
  let token: any = null;
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
  });
  describe('create-technology', () => {
    it('should not create a technology if the name is missing', () => {
      return request({
        query: `
            mutation {
                createTechnology() {
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

    it('should not create a technology if the name is empty string', () => {
      return request({
        query: `
            mutation {
                createTechnology(name:"") {
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

    it('should create a new technology', () => {
      return request({
        query: `
            mutation {
                createTechnology(name:"React") {
                    id
                    name
                }
            } `,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('data.createTechnology.id');
          expect(res.body).toHaveProperty('data.createTechnology.name', 'React');
        })
        .expect(200);
    });

    it('should not create a new technology if it already exists', () => {
      return request({
        query: `
            mutation {
                createTechnology(name:"React") {
                    id
                    name
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

  describe('technologies', () => {
    it('should list all the technologies', () => {
      return request({
        query: `
            query {
                technologies {
                    id
                    name
                }
            }`,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('data.technologies');
          expect(res.body.data.technologies).toHaveLength(1);
          expect(res.body.data.technologies[0].name).toBe('React');
        });
    });
  });
});
