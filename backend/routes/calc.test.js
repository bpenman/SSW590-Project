const request = require('supertest');
const express = require('express');
const calcRouter = require('./calc');  // Update with the correct path to your calc.cjs

const app = express();
app.use(express.json());
app.use('/', calcRouter);

describe('Calculator Route Tests', () => {
  test('Correctly evaluates an expression with x', async () => {
    const response = await request(app)
      .get('/')
      .query({ equation: 'x+1=2' });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe('1');
  });

  test('Correctly evaluates a simple arithmetic expression', async () => {
    const response = await request(app)
      .get('/')
      .query({ equation: '1+2' });
    expect(response.status).toBe(200);
    expect(response.body.result).toEqual('3'); // Assuming safeEval function parses and evaluates correctly
  });

  test('Handles invalid mathematical expressions', async () => {
    const response = await request(app)
      .get('/')
      .query({ equation: 'x+1=2x/0' });
    expect(response.status).toBe(500);
    expect(response.body.result).toContain('Invalid equation');
  });

  test('Returns error for missing equation parameter', async () => {
    const response = await request(app)
      .get('/');
    expect(response.status).toBe(400);
    expect(response.body.result).toBe('No equation provided.');
  });

  test('Returns error for non-mathematical strings', async () => {
    const response = await request(app)
      .get('/')
      .query({ equation: 'Hello World' });
    expect(response.status).toBe(500);
    expect(response.body.result).toContain('Invalid equation');
  });
});
