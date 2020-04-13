const allData = require('./index.json');
const fs=require('fs');
function stringToHash(s) {
    const len = s.length;
    let hash = 0;
    for (let idx = 0; idx < len; idx += 1) {
        hash = ((hash << 5) - hash + s.charCodeAt(idx)) | 0;
    }
    return Math.abs(hash);
}


function makeKeyFromShareable(shareable) {
    const { coordinates, name } = shareable;
    return stringToHash(`${coordinates[1]}${coordinates[0]}${name}`);
}
debugger
const {shareables} = allData;
const newShareables = shareables.map(s=>{
    return {...s, id: makeKeyFromShareable(s)};
})

const withShareableId = {...allData, shareables: newShareables}

fs.writeFileSync('./data.json', JSON.stringify(withShareableId, null, 2) , 'utf-8');
