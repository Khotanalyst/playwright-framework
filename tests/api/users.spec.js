import { test, expect } from '@playwright/test';

test('Token based Authentication', async ({ request }) => {

  const loginResponse = await request.post('https://reqres.in/api/login', {
    headers: {
      'x-api-key': 'free_user_3DF6ygyI4Oiq1Cw7Pn2s6B598V7'
    },
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  expect(loginResponse.status()).toBe(200);
  const { token } = await loginResponse.json();
  expect(token).toBeTruthy();

  const userResponse = await request.get('https://reqres.in/api/users', {
    headers: {
      'x-api-key': 'free_user_3DF6ygyI4Oiq1Cw7Pn2s6B598V7',
      'Authorization': `Bearer ${token}`
    }
  });

  expect(userResponse.status()).toBe(200);
  const userData = await userResponse.json();
  expect(userData.data).toBeTruthy();

});