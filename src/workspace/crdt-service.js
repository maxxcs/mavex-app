import { KSeq, InsertOp, RemoveOp } from './crdt/index';
import { Ident } from './crdt/idents/Ident';

export default class CrdtService {
  constructor(uniqueId, content, generator) {
    this.crdt = new KSeq(uniqueId, content, generator);  
    window.crdt = this.crdt;
  }
  
  executeChange(change) {
    if (change.type === 1)
      return this.crdt.insert(change.char, change.index);
    else if (change.type === 0)
      return this.crdt.remove(change.index);
    else
      return new Error('Invalid change type.');
  }

  executeOperation(raw) {
    let operation;
    const id = new Ident(raw.id.time, raw.id.path);
    if (raw.kind === 1)
      operation = new InsertOp(raw.replica, raw.timestamp, id, raw.value);
    else 
      operation = new RemoveOp(raw.replica, raw.timestamp, id);
    const index = this.crdt.apply(operation);
    const char  = raw.value || '';
    return { char, index };
  }

  getValue() {
    return this.crdt.toArray().join('');
  }
}


