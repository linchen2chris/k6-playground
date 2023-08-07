// import necessary module
import http from "k6/http";
import env from './env/env.js';

export default function () {
  // define URL and payload
  console.log(12, "env", __ENV.PROFILE);
  console.log(13, 'host', env.host);
  const url = "https://test-api.k6.io/auth/basic/login/";
  const payload = JSON.stringify({
    username: "test_case",
    password: "1234",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // send a post request and save response as a variable
  const res = http.post(url, payload, params);
}
