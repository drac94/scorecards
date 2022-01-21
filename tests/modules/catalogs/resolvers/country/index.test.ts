import expect from 'expect';

import request from '../../../../request-helper';

describe('catalogs', () => {
  describe('getCountries', () => {
    it('should  return all countries', () => {
      return request({
        query: `
            query getCountries {
              getCountries {
                id
                name
              }
            }
          `,
      }).expect((res) => {
        expect(res.body).toHaveProperty('data.getCountries');
      });
    });
  });
});
