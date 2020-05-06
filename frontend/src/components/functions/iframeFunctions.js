export default function validateNameInArray(pureName, dirtyArray){
    let defaultName = pureName + "_1";
    const pureArray = purifyArray(dirtyArray);
    if (pureArray.includes(pureName)) {
        const nameIndex = countHowManyInArray(pureArray, pureName);
        let indexCorrection = 0;
        let suggestedName;
        do {
            indexCorrection++;
            let index = nameIndex + indexCorrection;
            suggestedName = pureName + "_" + index;
        } while (dirtyArray.includes(suggestedName));
        return suggestedName;
    }
    return defaultName;
}

function purifyArray(dirtyArray) {
    let pureArray = [];
    for (let i = 0; i < dirtyArray.length; i++) {
        let dirtyObject = dirtyArray[i];
        let cleanObject = null;
        let underscoreIndex = 0;
        for (let j = 0; j < dirtyObject.length; j++) {
            if(dirtyObject.substring(j, j+1) === "_") {
                underscoreIndex === 1 ? cleanObject = dirtyObject.substring(0, j) :  underscoreIndex++;
            }
        }
        pureArray.push(cleanObject);
    }
    return pureArray;
}

function countHowManyInArray(array, object) {
    let frequency = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === object) {
            frequency++;
        }
    }
    return frequency;
}