"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Segment_1 = require("./Segment");
/**
 * An identifier that can uniquely identify an atom in a sequence.
 */
var Ident = /** @class */ (function () {
  /**
   * Creates an instance of Ident.
   * @param time The local logical time of the creating replica.
   * @param path The ordered set of path segments.
   * @returns An instance of Ident.
   */
  function Ident(time, path) {
    this.time = time;
    this.path = path;
  }
  /**
   * Converts a string representation into an Ident.
   * @param str The string to parse.
   * @returns The parsed instance of Ident.
   */
  Ident.parse = function (str) {
    try {
      var _a = str.split('#'), time = _a[0], pathstr = _a[1];
      if (time === undefined || time.length == 0) {
        throw new Error("The ident is missing a timestamp");
      }
      if (pathstr === undefined || pathstr.length == 0) {
        throw new Error("The ident is missing a path");
      }
      var prev_1 = undefined;
      var path = pathstr.split('.').map(function (token) {
        var _a = token.split(':', 2), digit = _a[0], replica = _a[1];
        if (!replica)
          replica = prev_1;
        else
          prev_1 = replica;
        return Segment_1.Segment(Number(digit), replica);
      });
      return new Ident(Number(time), path);
    }
    catch (err) {
      throw new Error("Error parsing Ident: " + err);
    }
  };
  /**
   * Gets the Segment of the identifier at the specified depth.
   * @param depth The desired depth.
   * @returns The Segment at the depth.
   */
  Ident.prototype.get = function (depth) {
    return this.path[depth];
  };
  /**
   * Gets the depth of the path (the number of segments it contains).
   * @returns The depth.
   */
  Ident.prototype.depth = function () {
    return this.path.length;
  };
  /**
   * Compares the value of this identifier to another.
   * @param other The identifier to compare.
   * @returns -1 if this identifier is lesser,
   *          1 if it is greater,
   *          or 0 if they are equal.
   */
  Ident.prototype.compare = function (other) {
    var depth = Math.max(this.path.length, other.path.length);
    for (var i = 0; i < depth; i++) {
      var my = this.get(i);
      var their = other.get(i);
      if (my === undefined && their !== undefined)
        return -1;
      if (my !== undefined && their === undefined)
        return 1;
      if (my.digit < their.digit)
        return -1;
      if (my.digit > their.digit)
        return 1;
      if (my.replica < their.replica)
        return -1;
      if (my.replica > their.replica)
        return 1;
    }
    if (this.time < other.time)
      return -1;
    if (this.time > other.time)
      return 1;
    return 0;
  };
  /**
   * Encodes the identifier as a compact string representation.
   * @returns The string representation.
   */
  Ident.prototype.toString = function () {
    var prev = undefined;
    var path = this.path.map(function (seg) {
      if (seg.replica == prev) {
        return seg.digit;
      }
      else {
        prev = seg.replica;
        return seg.digit + ":" + seg.replica;
      }
    });
    return this.time + "#" + path.join('.');
  };
  return Ident;
}());
exports.Ident = Ident;
//# sourceMappingURL=Ident.js.map
