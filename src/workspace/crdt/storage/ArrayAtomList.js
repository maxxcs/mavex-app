"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Atom_1 = require("./Atom");
/**
 * An implementation of AtomList<T> that uses a binary insertion sort over
 * an array to track a sorted list of atoms.
 */
var ArrayAtomList = /** @class */ (function () {
  /**
   * Creates an instange of ArrayAtomList<T>.
   */
  function ArrayAtomList() {
    this.atoms = [];
  }
  /**
   * @inheritdoc
   */
  ArrayAtomList.prototype.size = function () {
    return this.atoms.length;
  };
  /**
   * @inheritdoc
   */
  ArrayAtomList.prototype.get = function (pos) {
    return this.atoms[pos];
  };
  /**
   * @inheritdoc
   */
  ArrayAtomList.prototype.add = function (id, value) {
    var pos = this.bisectRight(id);
    var existing = this.get(pos - 1);
    if (existing && id.compare(existing.id) == 0) {
      return -1;
    }
    var atom = Atom_1.Atom(id, value);
    this.atoms.splice(pos, 0, atom);
    return pos;
  };
  /**
   * @inheritdoc
   */
  ArrayAtomList.prototype.remove = function (id) {
    var pos = this.indexOf(id);
    if (pos >= 0) {
      this.atoms.splice(pos, 1);
      return pos;
    }
    return -1;
  };
  /**
   * @inheritdoc
   */
  ArrayAtomList.prototype.indexOf = function (id) {
    var pos = this.bisectLeft(id);
    if (pos !== this.atoms.length && this.atoms[pos].id.compare(id) == 0) {
      return pos;
    }
    else {
      return -1;
    }
  };
  /**
   * @inheritdoc
   */
  ArrayAtomList.prototype.forEach = function (func) {
    this.atoms.forEach(func);
  };
  /**
   * @inheritdoc
   */
  ArrayAtomList.prototype.map = function (func) {
    return this.atoms.map(func);
  };
  /**
   * @inheritdoc
   */
  ArrayAtomList.prototype.toArray = function () {
    return this.atoms.slice(0);
  };
  /**
   * A binary search that finds the leftmost position of the atom with the
   * specified identifier (if it exists), or the position at which the atom
   * would be (if it does not exist).
   * @param id The desired identifier.
   * @returns The correct position.
   */
  ArrayAtomList.prototype.bisectLeft = function (id) {
    var min = 0;
    var max = this.atoms.length;
    while (min < max) {
      var curr = Math.floor((min + max) / 2);
      if (this.atoms[curr].id.compare(id) < 0) {
        min = curr + 1;
      }
      else {
        max = curr;
      }
    }
    return min;
  };
  /**
   * A binary search that finds the position at which an atom with the
   * specified identifier should be inserted.
   * @param id The desired identifier.
   * @returns The correct position.
   */
  ArrayAtomList.prototype.bisectRight = function (id) {
    var min = 0;
    var max = this.atoms.length;
    while (min < max) {
      var curr = Math.floor((min + max) / 2);
      if (id.compare(this.atoms[curr].id) < 0) {
        max = curr;
      }
      else {
        min = curr + 1;
      }
    }
    return min;
  };
  return ArrayAtomList;
}());
exports.ArrayAtomList = ArrayAtomList;
//# sourceMappingURL=ArrayAtomList.js.map
