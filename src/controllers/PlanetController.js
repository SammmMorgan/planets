import { planetService } from "../services/PlanetServices.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
    constructor() {
        super('api/planets')
        this.router.get('', this.getPlanets)

    }
    async getPlanets(request, response, next) {
        try {
            const planets = await planetService.getPlanets()
            response.send(planets)
        } catch (error) {
            next(error)
        }
    }

}