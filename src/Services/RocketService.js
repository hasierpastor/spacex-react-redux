import axios from '../../node_modules/axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}/rockets`;

const rocketService = {
  get: id => axios.get(`${serviceUrl}/${id}`)
};

export default rocketService;
