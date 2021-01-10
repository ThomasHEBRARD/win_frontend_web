import axios from 'axios';

import ApiClient, { getHeaders } from './api';

class Bottles extends ApiClient {
    public constructor() {
        super();
        this.paths = {
            getBottles: '/bottles/get_bottles/',
        };
    }
    public getBottles = async (props: { name: string }): Promise<any> => {
        const { name } = props
        const params = {
            name: name
        };
        const response = await axios.post(this.url('getBottles'),
            params, {
            headers: getHeaders(),
        });
        return response.data;
    };
}

const bottles = new Bottles();

export default bottles;
