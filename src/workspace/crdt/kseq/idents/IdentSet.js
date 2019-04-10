"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A set of Idents.
 */
var IdentSet = /** @class */ (function () {
    /**
     * Creates a new instance of IdentSet.
     * @params idents An array of (possibly serialized) Idents to add.
     * @returns An instance of IdentSet.
     */
    function IdentSet(idents) {
        var _this = this;
        this.entries = {};
        if (idents) {
            idents.forEach(function (ident) { return _this.add(ident); });
        }
    }
    /**
     * Gets the cardinality of the set.
     * @returns The number of idents in the set.
     */
    IdentSet.prototype.size = function () {
        return Object.keys(this.entries).length;
    };
    /**
     * Adds the specified Ident to the set.
     * @param ident The (possibly serialized) Ident to add.
     */
    IdentSet.prototype.add = function (ident) {
        this.entries[ident.toString()] = true;
    };
    /**
     * Determines whether the specified Ident is in the set.
     * @param ident The (possibly serialized) Ident in question.
     * @returns True if the ident is in the set, otherwise false.
     */
    IdentSet.prototype.has = function (ident) {
        return !!this.entries[ident.toString()];
    };
    /**
     * Removes the specified Ident from the set.
     * @param ident The (possibly serialized) Ident to remove.
     */
    IdentSet.prototype.remove = function (ident) {
        delete this.entries[ident.toString()];
    };
    /**
     * Converts the IdentSet to a lightweight representation suitable
     * for serialization.
     * @returns An array of serialized idents contained in the set.
     */
    IdentSet.prototype.toJSON = function () {
        return Object.keys(this.entries);
    };
    return IdentSet;
}());
exports.IdentSet = IdentSet;
//# sourceMappingURL=IdentSet.js.map