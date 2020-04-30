const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('GET /status', () => {
    it('should return 200 OK', async () =>{
      const response = await request(server).get('/api/status');
      expect(response.status).toBe(200);
    });
    it('should return json', async () => {
      const response = await request(server).get('/api/status');

      expect(response.type).toMatch(/json/i);
    });
    it('should return { api: \'up\'}', async () => {
      const response = await request(server).get('/api/status');

      expect(response.body.api).toBe('up');
    });
  });
});
