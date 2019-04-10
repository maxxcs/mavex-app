"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idents_1 = require("./idents");
var storage_1 = require("./storage");
var Op_1 = require("./Op");
/**
 * A CmRDT sequence that supports concurrent simultaneous editing
 * while preserving the intention of each edit.
 */
var KSeq = /** @class */ (function () {
    /**
     * Creates an instance of KSeq<T>.
     * @param name           The unique name for this replica.
     * @param atoms          The backing storage, if null, creates a new ArrayAtomList<T>.
     * @param identGenerator The id generator, if null, creates a new LSEQIdentGenerator.
     * @returns An instance of KSeq<T>.
     */
    function KSeq(name, atoms, identGenerator) {
        this.name = name;
        this.time = 0;
        this.atoms = atoms || new storage_1.ArrayAtomList();
        this.removed = new idents_1.IdentSet();
        this.identGenerator = identGenerator || new idents_1.LSEQIdentGenerator();
    }
    /**
     * Gets the number of items in the sequence.
     * @returns The number of items in the sequence.
     */
    KSeq.prototype.size = function () {
        return this.atoms.size();
    };
    /**
     * Gets the maximum depth of identifiers in the sequence.
     * @returns The depth of the sequence.
     */
    KSeq.prototype.depth = function () {
        var max = 0;
        this.forEach(function (atom) {
            var depth = atom.id.depth();
            if (max < depth)
                max = depth;
        });
        return max;
    };
    /**
     * Inserts a value into the sequence at the specified position.
     * @param value The value to insert.
     * @param pos   The position at which to insert the value.
     * @returns An InsertOp that can be applied to other KSeqs
     *          to reproduce the insertion.
     */
    KSeq.prototype.insert = function (value, pos) {
        if (pos < 0)
            throw new RangeError("The position " + pos + " must be greater than or equal to zero.");
        var before = this.atoms.get(pos - 1);
        var after = this.atoms.get(pos);
        var id = this.identGenerator.getIdent(this.name, ++this.time, (before && before.id), (after && after.id));
        var op = new Op_1.InsertOp(this.name, this.getWallTime(), id, value);
        this.apply(op);
        return op;
    };
    /**
     * Appends a value to the end of the sequence.
     * @param value The value to append.
     * @returns An InsertOp that can be applied to other KSeqs
     *          to reproduce the insertion.
     */
    KSeq.prototype.append = function (value) {
        return this.insert(value, this.size());
    };
    /**
     * Removes the value at the specified position from the sequence.
     * @param pos The position of the value to remove.
     * @returns An RemoveOp that can be applied to other KSeqs
     *          to reproduce the removal.
     */
    KSeq.prototype.remove = function (pos) {
        if (pos < 0)
            throw new RangeError("The position " + pos + " must be greater than or equal to zero.");
        var atom = this.atoms.get(pos);
        if (atom) {
            var op = new Op_1.RemoveOp(this.name, this.getWallTime(), atom.id);
            this.apply(op);
            return op;
        }
        return null;
    };
    /**
     * Gets the value at the specified position in the sequence.
     * @param pos The desired position.
     * @returns The value at that position,
     *          or undefined if no such value exists.
     */
    KSeq.prototype.get = function (pos) {
        var atom = this.atoms.get(pos);
        return atom ? atom.value : undefined;
    };
    /**
     * Applies a function to each of the values in the sequence.
     * @param func The function to apply.
     */
    KSeq.prototype.forEach = function (func) {
        this.atoms.forEach(function (atom) { return func(atom.value); });
    };
    /**
     * Applies a transformation function to each of the values in the sequence.
     * @param func The transformation function to apply.
     * @returns An array containing the results of the function calls.
     */
    KSeq.prototype.map = function (func) {
        return this.atoms.map(function (atom) { return func(atom.value); });
    };
    /**
     * Converts the sequence to an array.
     * @returns An array representation of the values in the sequence.
     */
    KSeq.prototype.toArray = function () {
        return this.atoms.map(function (atom) { return atom.value; });
    };
    /**
     * Converts the sequence to a compact object suitable for serialization.
     * @returns A serializable object.
     */
    KSeq.prototype.toJSON = function () {
        return {
            n: this.name,
            t: this.time,
            s: this.atoms.map(function (atom) { return [atom.id.toString(), atom.value]; }),
            r: this.removed.toJSON()
        };
    };
    /**
     * Applies the specified Op to the sequence. This can be used to apply
     * operations that have been generated by remote sequences.
     * @param op The Op to apply.
     */
    KSeq.prototype.apply = function (op) {
        switch (op.kind) {
            case Op_1.OpKind.Insert:
                var insertOp = op;
                // If an atom with the specified ident has already been removed,
                // the ops have been received out of order. We should ignore the insert.
                if (!this.removed.has(insertOp.id)) {
                    this.atoms.add(insertOp.id, insertOp.value);
                }
                break;
            case Op_1.OpKind.Remove:
                var removeOp = op;
                // Ignore repeated remove ops.
                if (!this.removed.has(removeOp.id)) {
                    this.atoms.remove(removeOp.id);
                    this.removed.add(removeOp.id);
                }
                break;
            default:
                throw new Error("Unknown op kind " + op.kind);
        }
    };
    /**
     * Gets the current wall time as a UNIX epoch timestamp.
     * @returns An integer representing the wall time.
     */
    KSeq.prototype.getWallTime = function () {
        return Math.floor(new Date().valueOf() / 1000);
    };
    return KSeq;
}());
exports.KSeq = KSeq;
//# sourceMappingURL=KSeq.js.map