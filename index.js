// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

cats.push()
console.log(cats)

function destructivelyAppendCat(name){
    return cats.push(name)
}
destructivelyAppendCat("Kanyau")
console.log(cats)


function destructivelyPrependCat(name){
    return cats.unshift(name)
}
destructivelyPrependCat("Bob")
console.log(cats)


function destructivelyRemoveLastCat(){
    return cats.pop()
}
destructivelyRemoveLastCat()
console.log(cats)


function destructivelyRemoveFirstCat(){
    return cats.shift()
}
destructivelyRemoveFirstCat()
console.log(cats)


function appendCat(name){
    return [...cats.slice(0,3),name]
    
}
console.log(appendCat("Broom"))

function prependCat(name){
    return [name,...cats.slice(0,3)]
}
console.log(prependCat("Arnold"))


function removeLastCat(){
    return cats.slice(0,-1)
}
console.log(removeLastCat())

function removeFirstCat(){
    return cats.slice(1)
}

