import BaseController from '../BaseController';

export default class PokedexController extends BaseController {
    private basePath = '/pokemon';

    public GetPokemonByName(nameOrId: number | string) {
        const endpoint = `${this.basePath}/${nameOrId}`;

        return this.MakeRequest({
            method: 'GET',
            url: endpoint,
        });
    }

    public getPokemonList() {
        const endpoint = `${this.basePath}?limit=100&offset=200`;
        return this.MakeRequest({
            method: 'GET',
            url: endpoint,
        });
    }

    public getFirstGeneration() {
        const endpoint = `${this.basePath}?limit=151`;
        return this.MakeRequest({
            method: 'GET',
            url: endpoint,
        });
    }
}
