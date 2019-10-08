self.onmessage = ({ data }) => {
  const changes = data;
  for (let i = 0; i < changes.length; i += 1) {
    const change = changes[i];
    // console.log(change);
    // console.log({
    //   text: change.text,
    //   startLineNumber: change.range.startLineNumber,
    //   startColumn: change.range.startColumn,
    //   endLineNumber: change.range.endLineNumber,
    //   endColumn: change.range.endColumn,
    // });
    if (change.rangeLength > 0) {
      // console.log('handle deletion or pre-selection');
      // console.log(change);
      const lastOffset = change.rangeOffset + change.rangeLength;
      const linesToRemove = [];
      let lines = change.range.endLineNumber - change.range.startLineNumber;
      // let columnsToRemove = change.range.endColumn - change.range.startColumn;
      // console.log(change.rangeLength, linesToRemove);

      let n = lastOffset;
      while (n > change.rangeOffset) {
        if (lines > 0) {
          lines -= 1;
          linesToRemove.push({ type: -1, char: '', index: change.rangeOffset + lines });
          // self.postMessage({ type: -1, char: '', index: k-1 });
        } else {
          self.postMessage({ type: 0, char: '', index: n - 1 });
        }
        n -= 1;
      }

      // console.log(linesToRemove);
      for (let k = 0; k < linesToRemove.length; k += 1) {
        self.postMessage(linesToRemove[k]);
      }

      const characters = change.text.split('');
      let stepRangeOffset = change.rangeOffset;
      for (let k = 0; k < characters.length; k += 1) {
        self.postMessage({ type: 1, char: characters[k], index: stepRangeOffset });
        stepRangeOffset += 1;
      }
    } else if (change.text !== '') {
      if (change.text.length > 1) {
        // console.log('handle string insertion without pre-selection');
        // console.log(change);
        const characters = change.text.split('');
        let stepRangeOffset = change.rangeOffset;
        for (let k = 0; k < characters.length; k += 1) {
          self.postMessage({ type: 1, char: characters[k], index: stepRangeOffset });
          stepRangeOffset += 1;
        }
      } else {
        // console.log('handle char insertion without pre-selection');
        // console.log(change);
        self.postMessage({ type: 1, char: change.text, index: change.rangeOffset });
      }
    } else {
      // console.log('handle deletion without pre-selection');
      // console.log(change);
      // self.postMessage({ type: 0, char: '', index: change.rangeOffset });
    }
  }
};
