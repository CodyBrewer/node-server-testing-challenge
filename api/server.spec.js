const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('GET /api/status', () => {
    it('should return 200 OK', async () =>{
      const response = await request(server).get('/api/status');
      expect(response.status).toBe(200);
    });
    it('should return json', async () => {
      const response = await request(server).get('/api/status');

      expect(response.type).toMatch(/json/i);
    });
    it('should return { api: \'up\' }', async () => {
      const response = await request(server).get('/api/status');

      expect(response.body.api).toBe('up');
    });
  });
  describe('GET /api/characters/status', () => {
    it('should return 200 OK', async () => {
      const response = await request(server).get('/api/characters/status');

      expect(response.status).toBe(200);
    });
    it('should return json', async () => {
      const response = await request(server).get('/api/characters/status');

      expect(response.type).toMatch(/json/i);
    });
    it('should return { characterRouter: \'up\' }', async () => {
      const response = await request(server).get('/api/characters/status');

      expect(response.body.characterRouter).toBe('up');
    });
  });
});
