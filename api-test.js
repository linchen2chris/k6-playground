// import necessary module
import http from "k6/http";
import env from './env/env.js';
import exec from 'k6/execution';


// 1. init
export const options = {
  vus: 10,
  duration: '10s',
};

// 2. setup
export function setup() {
  console.log('setup users');
  return {"environment": "develop"}
}

// 3. VU
export default function (data) {
  // define URL and payload
  console.log(14, data, __VU);
  console.log(`Execution context

Instance info
-------------
Vus active: ${exec.instance.vusActive}
Iterations completed: ${exec.instance.iterationsCompleted}
Iterations interrupted:  ${exec.instance.iterationsInterrupted}
Iterations completed:  ${exec.instance.iterationsCompleted}
Iterations active:  ${exec.instance.vusActive}
Initialized vus:  ${exec.instance.vusInitialized}
Time passed from start of run(ms):  ${exec.instance.currentTestRunDuration}

Scenario info
-------------
Name of the running scenario: ${exec.scenario.name}
Executor type: ${exec.scenario.executor}
Scenario start timestamp: ${exec.scenario.startTime}
Percenatage complete: ${exec.scenario.progress}
Iteration in instance: ${exec.scenario.iterationInInstance}
Iteration in test: ${exec.scenario.iterationInTest}

Test info
---------
All test options: ${exec.test.options}

VU info
-------
Iteration id: ${exec.vu.iterationInInstance}
Iteration in scenario: ${exec.vu.iterationInScenario}
VU ID in instance: ${exec.vu.idInInstance}
VU ID in test: ${exec.vu.idInTest}
VU tags: ${exec.vu.tags}`);
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

// 4. teardown
export function teardown(data) {
  console.log(32, data);

}
