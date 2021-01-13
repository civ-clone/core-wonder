import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Wonder from './Wonder';
export interface IWonderRegistry extends IEntityRegistry<Wonder> {}
export declare class WonderRegistry
  extends EntityRegistry<Wonder>
  implements IWonderRegistry {
  constructor();
}
export default WonderRegistry;
