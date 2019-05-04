import axios from '../../node_modules/axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}/launches`;

const launchService = {
  get: () => axios.get(`${serviceUrl}`)
};

export default launchService;
