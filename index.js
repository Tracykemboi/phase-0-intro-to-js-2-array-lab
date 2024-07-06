
const cats =["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const copyOfCats=[...cats,(name)]
    return copyOfCats
}
function prependCat(name) {
    const copyOfCatss=[(name),...cats]
    return copyOfCatss
}
function removeLastCat() {
    const slicedCopyOfLastCats=cats.slice(0,-1)
    return slicedCopyOfLastCats
}
function removeFirstCat() {
    const slicedCopyOfFirstCats=cats.slice(1)
    return slicedCopyOfFirstCats
}
