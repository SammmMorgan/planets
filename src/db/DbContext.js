import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PlanetSchema } from '../models/Planet.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Planet = mongoose.model('Planet', PlanetSchema)
}

export const dbContext = new DbContext()
