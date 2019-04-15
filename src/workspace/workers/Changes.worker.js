self.onmessage = ({ data }) => {
  const changes = data;
  for (let i = 0; i < changes.length; i++) {
    const change = changes[i];
    //console.log(change);
    console.log({ 
      char: change.text, 
      startLineNumber: change.range.startLineNumber, 
      startColumn: change.range.startColumn, 
      endLineNumber: change.range.endLineNumber, 
      endColumn: change.range.endColumn
    });
    if (change.rangeLength > 0) {
      //console.log('handle deletion or pre-selection'); //change this to range api
      //console.log(change);
      const lengthOffset = (change.rangeOffset + change.rangeLength);
      let linesToRemove = change.range.endLineNumber - change.range.startLineNumber;
      let columnsToRemove = change.range.endColumn - change.range.startColumn;
      for (let k = lengthOffset; k > change.rangeOffset; k--) {
        if (linesToRemove > 0) {
          linesToRemove--;
          self.postMessage({ type: -1, char: '', index: k-1 });
        }  
        else {
          columnsToRemove--;
          self.postMessage({ type: 0, char: '', index: k-1 });
        }
      }
      const characters = change.text.split('');
      let stepRangeOffset = change.rangeOffset;
      for (let k = 0; k < characters.length; k++) {
        self.postMessage({ type: 1, char: characters[k], index: stepRangeOffset++ });
      }
    } else {
      if (change.text !== '') {
        if (change.text.length > 1) {
          //console.log('handle string insertion without pre-selection');
          //console.log(change);
          const characters = change.text.split('');
          let stepRangeOffset = change.rangeOffset;
          for (let k = 0; k < characters.length; k++) {
            self.postMessage({ type: 1, char: characters[k], index: stepRangeOffset++ });
          }
        } else {
          //console.log('handle char insertion without pre-selection');
          //console.log(change);
          self.postMessage({ type: 1, char: change.text, index: change.rangeOffset });
        }
      }/* else {
        console.log('handle deletion without pre-selection');
        //console.log(change);
        self.postMessage({ type: 0, char: '', index: change.rangeOffset });
      }*/
    }
  }
};


