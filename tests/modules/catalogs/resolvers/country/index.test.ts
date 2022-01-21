import expect from 'expect';

import request from '../../../../request-helper';

describe('catalogs', () => {
  describe('countries', () => {
    it('should  return all countries', () => {
      return request({
        query: `
            query countries {
              countries {
                id
                name
              }
            }
          `,
      }).expect((res) => {
        expect(res.body).toHaveProperty('data.countries');
      });
    });
  });
});
