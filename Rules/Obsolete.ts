import City from '@civ-clone/core-city/City';
import Rule from '@civ-clone/core-rule/Rule';
import Wonder from '../Wonder';

export class Obsolete extends Rule<[Wonder, City], void> {}

export default Obsolete;
