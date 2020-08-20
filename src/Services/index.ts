import ManagerPokeApiClient from './ManagerPokeApi/ManagerPokeApiClient';
import { $Config } from '../config';

let $ManagerPokeApiClient: ManagerPokeApiClient;

const initServices = () => {
    $ManagerPokeApiClient = new ManagerPokeApiClient({
        apiUrl: $Config.POKEAPI,
    });
};

export default initServices;

export { $ManagerPokeApiClient };
