import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import City from '@civ-clone/core-city/City';
import Wonder from './Wonder';

export interface IWonderRegistry extends IEntityRegistry<Wonder> {
  getByCity(city: City): Wonder[];
}

export class WonderRegistry
  extends EntityRegistry<Wonder>
  implements IWonderRegistry
{
  constructor() {
    super(Wonder);
  }

  getByCity(city: City): Wonder[] {
    return this.getBy('city', city);
  }
}

export const instance: WonderRegistry = new WonderRegistry();

export default WonderRegistry;
