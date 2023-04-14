import axios from 'axios'

export const apiClient = axios.create(
    {
        // baseURL: 'http://localhost:8081' //#CHANGE
        // baseURL: 'http://inframart-env.eba-u8jqigpu.ap-south-1.elasticbeanstalk.com'
		
		baseURL:'https://eager-stranger-production.up.railway.app'
    }
);

