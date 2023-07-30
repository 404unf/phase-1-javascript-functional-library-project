
function myEach(collection,callback) {
    let copyOfCollection = collection
    if(typeof collection === 'object'){
        copyOfCollection = Object.values(collection)
    }

    copyOfCollection.forEach(element => {
        callback(element)
    });

    return collection
}

function myMap(collection,callback) {
    let copyOfCollection = collection
    if (typeof collection === 'object') {
        copyOfCollection = Object.values(collection)
    }
    
    let newArray = copyOfCollection.map(callback)

    return newArray
}

function myReduce(collection,callback,acc) {
    let copyOfCollection = collection
    if (typeof collection === 'object') {
        copyOfCollection = Object.values(collection)
    }

    let totality = 0
    if (!acc){
        totality = copyOfCollection.reduce(callback)
    }
    else {totality = copyOfCollection.reduce(callback,acc)}

    return totality
}


function myFind(collection,predicate) {
    for(const element of collection){
        if(predicate(element) === true){
            return element
        }
    }

    return undefined
}

function myFilter(collection,predicate) {
    let copyOfCollection = collection
    if (typeof collection === 'object') {
        copyOfCollection = Object.values(collection)
    }

    const trueArray = []
    for(const element of copyOfCollection){
        if (predicate(element)===true){
            trueArray.push(element)
        }
    }

    return trueArray
}

function mySize(collection) {
    let copyOfCollection = collection
    if (typeof collection === 'object') {
        copyOfCollection = Object.values(collection)
    }
    return copyOfCollection.length
}

function myFirst(array,n) {
    const copyOfArray = [...array]
    if(!n){
        return copyOfArray[0]
    }
    return copyOfArray.slice(0,n)
}

function myLast(array,n) {
    const copyOfArray = [...array]

    if(!n){
        return copyOfArray.pop()
    }
    return copyOfArray.slice(-n)
}

function myKeys(object) {
    return Object.keys(object)
    
}

function myValues(obj) {
    return Object.values(obj)
}


// BONUS

function mySortBy(array,callback) {
    const copyOfArray = [...array]
    const callbackArray = []
    copyOfArray.forEach(element=> callbackArray.push(callback(element)))

    let sortedArray = copyOfArray.sort(compareElements) 
    return sortedArray

    function compareElements(a, b) {
        const callA = callback(a)
        const callB = callback(b)
        if (typeof a === 'string') {
            if (callA < callB) { return -1 }
            if (callA > callB) { return 1 }
            if (callA === callB) { return 0 }
        }

        // Compare Numbers
        return callA - callB
    }
}

// BONUS THE SECOND

function myFlatten(array,boolean,newArr=[]) {
    if (boolean === true) {
        return array.flat()
    }

    array.forEach(element=>{if(typeof element === 'object'){
        myFlatten(element).forEach(element=>newArr.push(element))
    }else{newArr.push(element)}})

    return newArr
}

