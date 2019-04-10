"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var idents_1 = require("./idents");
/**
 * The kind of operation.
 */
var OpKind;
(function (OpKind) {
    /**
     * The insertion of a value.
     */
    OpKind[OpKind["Insert"] = 1] = "Insert";
    /**
     * The removal of a value.
     */
    OpKind[OpKind["Remove"] = 2] = "Remove";
})(OpKind = exports.OpKind || (exports.OpKind = {}));
/**
 * An operation that can be applied to a KSeq.
 */
var Op = /** @class */ (function () {
    /**
     * Creates an instance of Op.
     * @param kind      The kind of operation.
     * @param replica   The name of the replica on which the operation was performed.
     * @param timestamp A UNIX epoch timestamp for the wall time when the operation was performed.
     * @returns An instance of Op.
     */
    function Op(kind, replica, timestamp) {
        this.kind = kind;
        this.replica = replica;
        this.timestamp = timestamp;
    }
    /**
     * Converts an encoded string to an Op of the correct type.
     * @param str The encoded string.
     * @returns An instance of the encoded Op.
     */
    Op.parse = function (str) {
        var kind = str[0];
        switch (kind) {
            case '+': return InsertOp.parse(str);
            case '-': return RemoveOp.parse(str);
        }
    };
    return Op;
}());
exports.Op = Op;
/**
 * An operation that inserts an atom into the sequence with the specified
 * identifier and value.
 */
var InsertOp = /** @class */ (function (_super) {
    __extends(InsertOp, _super);
    /**
     * Creates an instance of InsertOp.
     * @param replica   The name of the replica on which the operation was performed.
     * @param timestamp A UNIX epoch timestamp for the wall time when the operation was performed.
     * @param id        The identifier for the value.
     * @param value     The value to insert.
     * @returns An instance of InsertOp.
     */
    function InsertOp(replica, timestamp, id, value) {
        var _this = _super.call(this, OpKind.Insert, replica, timestamp) || this;
        _this.id = id;
        _this.value = value;
        return _this;
    }
    /**
     * Converts an encoded string to an InsertOp.
     * @param str The encoded string.
     * @returns An instance of the encoded InsertOp.
     */
    InsertOp.parse = function (str) {
        var _a = str.substr(1).split('/', 4), timestamp = _a[0], replica = _a[1], id = _a[2], value = _a[3];
        return new InsertOp(replica, Number(timestamp), idents_1.Ident.parse(str), JSON.parse(value));
    };
    /**
     * @inheritdoc
     */
    InsertOp.prototype.toString = function () {
        return "+" + this.timestamp + "/" + this.replica + "/" + this.id.toString() + "/" + JSON.stringify(this.value);
    };
    return InsertOp;
}(Op));
exports.InsertOp = InsertOp;
/**
 * An operation that removes an atom with the specified identifer.
 */
var RemoveOp = /** @class */ (function (_super) {
    __extends(RemoveOp, _super);
    /**
     * Creates an instance of RemoveOp.
     * @param replica   The name of the replica on which the operation was performed.
     * @param timestamp A UNIX epoch timestamp for the wall time when the operation was performed.
     * @param id        The identifier of the atom to remove.
     * @returns An instance of RemoveOp.
     */
    function RemoveOp(replica, timestamp, id) {
        var _this = _super.call(this, OpKind.Remove, replica, timestamp) || this;
        _this.id = id;
        return _this;
    }
    /**
     * Converts an encoded string to an RemoveOp.
     * @param str The encoded string.
     * @returns An instance of the encoded RemoveOp.
     */
    RemoveOp.parse = function (str) {
        var _a = str.substr(1).split('/', 3), timestamp = _a[0], replica = _a[1], id = _a[2];
        return new RemoveOp(replica, Number(timestamp), idents_1.Ident.parse(str));
    };
    /**
     * @inheritdoc
     */
    RemoveOp.prototype.toString = function () {
        return "-" + this.timestamp + "/" + this.replica + "/" + this.id.toString();
    };
    return RemoveOp;
}(Op));
exports.RemoveOp = RemoveOp;
//# sourceMappingURL=Op.js.map