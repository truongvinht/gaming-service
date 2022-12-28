// __tests__/animal.test.js
// 🚨 Remember to keep your `*.test.js` files out of your `/pages` directory!
import { createMocks } from 'node-mocks-http';
import handleCharacters from './index';
import handleCharacter from './[id]';

// test fetching all characters
describe('/api/yuanshen/characters', () => {
  test('fetch list of characters', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handleCharacters(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        success: true,
      }),
    );
  });
});

// test id based search for characters
describe('/api/yuanshen/characters/61b85fdd7bc78ba6a2c41965', () => {
  test('fetch single character by id', async () => {
    const { req, res } = createMocks({
      method: 'GET',
			query: {
				id: '61b85fdd7bc78ba6a2c41965'
			},
    });

    await handleCharacter(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        success: true,
      }),
    );
  });
});