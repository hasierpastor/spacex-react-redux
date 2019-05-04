import axios from '../../node_modules/axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}/launches`;

/**
 * Util function that makes axios request to Space X api to get launches
 */
const launchService = {
  get: () => axios.get(`${serviceUrl}`)
};

export default launchService;
