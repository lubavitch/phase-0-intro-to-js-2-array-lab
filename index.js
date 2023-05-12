const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    
cats.push(name)

}
function destructivelyPrependCat(prep) {
    cats.unshift(prep)
}

function destructivelyRemoveLastCat(rem) {
    cats.splice(2,1)
}

function destructivelyRemoveFirstCat(remFir){
    cats.splice(0,1)
}


function appendCat(ANT) {
   const copyOfCats = [...cats]
copyOfCats.push(ANT)    
return (copyOfCats)
}

function prependCat(name){
const copyOfCats = [...cats]
copyOfCats.unshift(name)
return (copyOfCats)}

function removeLastCat(name){
    const copyOfCats = [...cats]
    copyOfCats.splice(2,1)
    return (copyOfCats)}


function removeFirstCat(name){
        const copyOfCats = [...cats]
        copyOfCats.splice(0,1)
        return (copyOfCats)}


