import Axios, { AxiosInstance } from 'axios';
import PokemonController from './Controllers/Pokemon/PokemonController';

interface IApiClientConstructorProps {
    apiUrl: string;
}

export default class ManagerPokeApiClient {
    private httpClient: AxiosInstance;
    constructor({ apiUrl }: IApiClientConstructorProps) {
        this.httpClient = Axios.create({
            baseURL: apiUrl,
        });
    }

    public get Pokemon() {
        return new PokemonController(this.httpClient);
    }
}
