import { KSeq, InsertOp, RemoveOp } from './data/index';
import { Ident } from './data/idents/Ident';

export default class DataModel {
  constructor(uniqueId, content, generator) {
    this.crdt = new KSeq(uniqueId, content, generator);
    window.crdt = this.crdt;
  }

  executeChange(change) {
    if (change.type === 1) {
      const op = this.crdt.insert(change.char, change.index);
      return { op, type: 1 };
    }
    if (change.type === 0) {
      const op = this.crdt.remove(change.index);
      return { op, type: 0 };
    }
    if (change.type === -1) {
      const op = this.crdt.remove(change.index);
      return { op, type: -1 };
    }
    return new Error('Invalid change type.');
  }

  executeOperation(raw) {
    let operation;
    const id = new Ident(raw.id.time, raw.id.path);
    if (raw.kind === 1) operation = new InsertOp(raw.replica, raw.timestamp, id, raw.value);
    else operation = new RemoveOp(raw.replica, raw.timestamp, id);
    const index = this.crdt.apply(operation);
    const char = raw.value || '';
    return { char, index };
  }

  getValue() {
    return this.crdt.toArray().join('');
  }

  getAtom(pos) {
    return this.crdt.atoms.get(pos);
  }

  getAtoms() {
    return this.crdt.atoms;
  }

  static transformIdent(time, path) {
    return new Ident(time, path);
  }
}
