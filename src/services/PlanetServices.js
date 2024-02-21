import { dbContext } from "../db/DbContext.js"

class PlanetService {
    async getPlanets() {
        const planets = await dbContext.Planet.find().populate('creator', 'name')
        return planets
    }

}

export const planetService = new PlanetService()