import { Range } from 'monaco-editor';

export function handleChanges(changes) {
    const handledChanges = [];
    for (let i = 0; i < changes.length; i++) {
        const change = changes[i];
        //console.log(change);
        if (change.rangeLength > 1) {
            console.log('handle pre-selection');
            console.log(change);
        } else {
            if (change.text !== '') { 
                if (change.text.length > 1) {
                    console.log('handle string insertion without pre-selection');
                    //console.log(change.range);
                    const characters = change.text.split('');
                    let stepRangeOffset = change.rangeOffset;
                    for (let k = 0; k < characters.length; k++) {
                        handledChanges.push({ type: 1, char: characters[k], index: stepRangeOffset++ });
                    }
                } else {
                    console.log('handle char insertion without pre-selection');
                    //console.log(change.range);
                    handledChanges.push({ type: 1, char: change.text, index: change.rangeOffset });
                }
            } else { 
                console.log('handle deletion without pre-selection');
                //console.log(change.range);
                handledChanges.push({ type: 0, char: '', index: change.rangeOffset });
            }
        }
    }
    return handledChanges;
}

/*

[...changes] -> { text: 'string', rangeOffset: 13, range } -> { char, index }

*/

export function trasformIndexToRange() {
    return new Range();
}
