import expect from 'expect';

import request from '../../../request-helper';

type User = {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  roles?: [string];
};

const testUser: User = {
  email: 'test-user@gmail.com',
  firstName: 'test',
  lastName: 'user',
  password: 'test1234',
  roles: ['admin'],
};

const signup = (
  { email, password, firstName, lastName, roles }: User,
  returnValues = `{
    id
    email
  }`
) => {
  return request({
    query: `
        mutation {
          signup(
            ${email ? `email: "${email}"` : ''},
            ${password ? `password: "${password}"` : ''},
            ${firstName ? `firstName: "${firstName}"` : ''},
            ${lastName ? `lastName: "${lastName}"` : ''},
            ${roles ? `roles: "${roles}"` : ''}
          ) ${returnValues}
        }
      `,
  });
};

describe('auth', () => {
  describe('sign up', () => {
    it('should not create a new user when some data is missing', () => {
      return signup({
        ...testUser,
        lastName: undefined,
      }).expect((res) => {
        expect(res.body).toHaveProperty('errors');
        expect(Array.isArray(res.body.errors)).toBe(true);
      });
    });

    it('should create a new user', () => {
      return signup(testUser)
        .expect((res) => {
          expect(res.body).toHaveProperty('data.signup.id');
          expect(res.body).toHaveProperty('data.signup.email', testUser.email);
        })
        .expect(200);
    });

    it('should not create a new user with the same email', () => {
      return signup(testUser).expect((res) => {
        expect(res.body).toHaveProperty('errors');
        expect(Array.isArray(res.body.errors)).toBe(true);
      });
    });
  });

  describe('login', () => {
    it('should successfully login and return a token', () => {
      return request({
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
        .expect((res: Response) => {
          expect(res.body).toHaveProperty('data.login.user.id');
          expect(res.body).toHaveProperty('data.login.token');
        })
        .expect(200);
    });
  });

  describe('me', () => {
    let loginResponse: any = null;

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
        .expect((res: Response) => {
          expect(res.body).toHaveProperty('data.login.user.id');
          expect(res.body).toHaveProperty('data.login.token');

          loginResponse = res.body;
        })
        .expect(200);
    });

    it('should not return a profile when not logged in', () => {
      return request({
        query: `
            query me {
              me {
                id
                email
                firstName
                lastName
              }
            }
          `,
      }).expect((res) => {
        expect(res.body).toHaveProperty('errors');
        expect(res.body.data.me).toEqual(null);
        expect(Array.isArray(res.body.errors)).toBe(true);
      });
    });

    it('should successfully return the profile from me', () => {
      const { token } = loginResponse.data.login;

      return request({
        query: `
            query me {
              me {
                id
                email
                firstName
                lastName
              }
            }
          `,
      })
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body).toHaveProperty('data.me.id');
          expect(res.body).toHaveProperty('data.me.email', testUser.email);
          expect(res.body).toHaveProperty('data.me.firstName', testUser.firstName);
          expect(res.body).toHaveProperty('data.me.lastName', testUser.lastName);
        })
        .expect(200);
    });
  });
});
