"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.WonderRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const Wonder_1 = require("./Wonder");
class WonderRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(Wonder_1.default);
    }
    getByCity(city) {
        return this.getBy('city', city);
    }
}
exports.WonderRegistry = WonderRegistry;
exports.instance = new WonderRegistry();
exports.default = WonderRegistry;
//# sourceMappingURL=WonderRegistry.js.map