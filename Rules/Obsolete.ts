import City from '@civ-clone/core-city/City';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Wonder from '../Wonder';

export type ObsoleteArgs = [Wonder, City];

export class Obsolete extends Rule<ObsoleteArgs, void> {}

export default Obsolete;

export interface IObsoleteRegistry
  extends IRuleRegistry<Obsolete, ObsoleteArgs, void> {}
