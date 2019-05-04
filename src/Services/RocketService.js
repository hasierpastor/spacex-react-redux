import axios from '../../node_modules/axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}/rockets`;

/**
 * Util function that makes axios request to Space X api to get rocket data
 */
const rocketService = {
  get: id => axios.get(`${serviceUrl}/${id}`)
};

export default rocketService;
