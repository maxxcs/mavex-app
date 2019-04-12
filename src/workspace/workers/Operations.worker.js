self.onmessage = ({ data }) => {
  const {index, content } = data;
  const char = data.char || '';
  let endLineNumber, endColumn;
  let startLineNumber = 1;
  let startColumn = 1;
  let endline = 0;
  for (let i = 0; i < index; i++) {
    if (content[i] !== '\n') {
      startColumn++;
      endline = 0;
    }
    else {
      startLineNumber++;
      startColumn = 1;
      endline = 1;
    }
  }
  if (char !== '') {
    endLineNumber = startLineNumber;
    endColumn = startColumn;
  } else if (endline) {
    endLineNumber = startLineNumber + 1;
    endColumn = startColumn;
  } else {
    endLineNumber = startLineNumber;
    endColumn = startColumn + 1;
  }
  
  console.log({ char, startLineNumber, startColumn, endLineNumber, endColumn });

  self.postMessage({ char, startLineNumber, startColumn, endLineNumber, endColumn });
};
