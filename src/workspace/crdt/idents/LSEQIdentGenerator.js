"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ident_1 = require("./Ident");
var Segment_1 = require("./Segment");
/**
 * The identifier allocation strategy to use at a specified depth.
 */
var LSEQStrategy;
(function (LSEQStrategy) {
  /**
   * Generate identifiers by adding a value to the previous digit.
   */
  LSEQStrategy[LSEQStrategy["AddFromLeft"] = 1] = "AddFromLeft";
  /**
   * Generate identifiers by subtracting a value to the next digit.
   */
  LSEQStrategy[LSEQStrategy["SubtractFromRight"] = 2] = "SubtractFromRight";
})(LSEQStrategy || (LSEQStrategy = {}));
/**
 * An IdentGenerator that implements LSEQ to create identifiers.
 */
var LSEQIdentGenerator = /** @class */ (function () {
  /**
   * Creates an instance of LSEQIdentGenerator.
   * @param startingWidth The width (2^x) of the first level of Idents.
   * @param maxDistance   The maximum delta between two Idents.
   * @returns An instance of LSEQIdentGenerator.
   */
  function LSEQIdentGenerator(startingWidth, maxDistance) {
    if (startingWidth === void 0) { startingWidth = 4; }
    if (maxDistance === void 0) { maxDistance = 10; }
    this.startingWidth = startingWidth;
    this.maxDistance = maxDistance;
    this.strategies = [];
  }
  /**
   * @inheritdoc
   */
  LSEQIdentGenerator.prototype.getIdent = function (name, time, before, after) {
    if (!before)
      before = this.getFirst(name);
    if (!after)
      after = this.getLast(name);
    var distance = 0;
    var depth = -1;
    var min = 0;
    var max = 0;
    while (distance < 1) {
      depth++;
      var left = before.get(depth);
      var right = after.get(depth);
      min = left ? left.digit : 0;
      max = right ? right.digit : this.getWidthAtDepth(depth);
      distance = max - min - 1;
    }
    var boundary = Math.min(distance, this.maxDistance);
    var delta = Math.floor(Math.random() * boundary) + 1;
    var strategy = this.getStrategyAtDepth(depth);
    var path = [];
    for (var i = 0; i < depth; i++) {
      path.push(before.get(i) || Segment_1.Segment(0, name));
    }
    if (strategy == LSEQStrategy.AddFromLeft) {
      path.push(Segment_1.Segment(min + delta, name));
    }
    else {
      path.push(Segment_1.Segment(max - delta, name));
    }
    return new Ident_1.Ident(time, path);
  };
  /**
   * Gets the maximum addressable digit at the specified depth. This is
   * generally 2^(depth + startingWidth) - 1, with a maximum of 2^53 - 1
   * (the largest integer that can be stored in a Number.)
   * @param depth The desired depth.
   * @returns The maximum addressable digit at the specified depth.
   */
  LSEQIdentGenerator.prototype.getWidthAtDepth = function (depth) {
    var power = depth + this.startingWidth;
    if (power > 53)
      power = 53;
    return Math.pow(2, power) - 1;
  };
  /**
   * Gets the digit allocation strategy for the specified depth.
   * If none has been selected, one is chosen at random.
   * @param depth The desired depth.
   * @returns The strategy to use at that depth.
   */
  LSEQIdentGenerator.prototype.getStrategyAtDepth = function (depth) {
    var strategy = this.strategies[depth];
    if (!strategy) {
      var random = Math.floor(Math.random() * 2) + 1;
      strategy = this.strategies[depth] = random;
    }
    return strategy;
  };
  /**
   * Gets the first possible ident that can be generated.
   * @param name The replica name.
   * @returns The ident.
   */
  LSEQIdentGenerator.prototype.getFirst = function (name) {
    if (!this.first)
      this.first = new Ident_1.Ident(0, [Segment_1.Segment(0, name)]);
    return this.first;
  };
  /**
   * Gets the first possible ident that can be generated.
   * @param name The replica name.
   * @returns The ident.
   */
  LSEQIdentGenerator.prototype.getLast = function (name) {
    if (!this.last)
      this.last = new Ident_1.Ident(0, [Segment_1.Segment(this.getWidthAtDepth(0), name)]);
    return this.last;
  };
  return LSEQIdentGenerator;
}());
exports.LSEQIdentGenerator = LSEQIdentGenerator;
//# sourceMappingURL=LSEQIdentGenerator.js.map
