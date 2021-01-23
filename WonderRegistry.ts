import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Wonder from './Wonder';

export interface IWonderRegistry extends IEntityRegistry<Wonder> {}

export class WonderRegistry
  extends EntityRegistry<Wonder>
  implements IWonderRegistry {
  constructor() {
    super(Wonder);
  }
}

export const instance: WonderRegistry = new WonderRegistry();

export default WonderRegistry;
