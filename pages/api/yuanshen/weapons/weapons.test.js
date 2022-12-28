// __tests__/animal.test.js
// 🚨 Remember to keep your `*.test.js` files out of your `/pages` directory!
import { createMocks } from 'node-mocks-http';
import allHandler from './index';

// test fetching all weapons
describe('/api/yuanshen/weapons', () => {
  test('fetch list of weapons', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await allHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        success: true,
      }),
    );
  });
});
