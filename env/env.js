const envFile = `./.env-${__ENV.PROFILE}.json`;
export default JSON.parse(open(envFile));
