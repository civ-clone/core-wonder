import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import City from '@civ-clone/core-city/City';
import Wonder from './Wonder';
export interface IWonderRegistry extends IEntityRegistry<Wonder> {
  getByCity(city: City): Wonder[];
}
export declare class WonderRegistry
  extends EntityRegistry<Wonder>
  implements IWonderRegistry
{
  constructor();
  getByCity(city: City): Wonder[];
}
export declare const instance: WonderRegistry;
export default WonderRegistry;
