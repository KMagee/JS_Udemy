//create a class for streets and a class for parks

class Park {
    constructor(name, age, area, numTrees){
        this.name = name,
        this.age = age,
        this.area = area, 
        this.numTrees = numTrees;
    }

    //functions
}


class Street {
    constructor(name, length, size='normal'){
        this.name = name, 
        this.length = length,
        this.size = size
    }
}


//Only 3 parks and 4 streets. 
const oakPark = new Park('Oak Park', 10, 2500, 150)
const ardsPark = new Park('Ards Park', 20, 5000, 250)
const townPark = new Park('Town Park', 30, 10000, 1000)

console.log(oakPark)
console.log(ardsPark)
console.log(townPark)


///4 streets
const mainStreet = new Street();

