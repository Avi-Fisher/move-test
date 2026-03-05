import fs from "fs"


function readJson(){ 
    try {
        
        const data = fs.readFileSync('./data.json', 'utf8');
        const jsonObject = JSON.parse(data);
        return jsonObject
    } catch (error) {
        console.error('error in reading file', error);
    }
}

export default readJson

