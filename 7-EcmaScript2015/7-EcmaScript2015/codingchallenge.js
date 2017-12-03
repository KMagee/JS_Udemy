//create super class for Town Constructs


class TownConstruct {
    constructor(name , buildYear)

    {
        this.name = name,
        this.buildYear = buildYear
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.buildYear;
        return age;
    }

}


//create a sub-class for streets and a class for parks

class Park extends TownConstruct {
    constructor(name, buildYear, area, numTrees){
        super(name, buildYear)
        this.area = area, 
        this.numTrees = numTrees;
    }
    //functions
    calculateDensity() {
        var density = this.numTrees / this.area ;
        return density;
    }
}


class Street extends TownConstruct {
    constructor(name, buildYear, stLength, size='normal'){
        super(name, buildYear) 
        this.stLength = stLength,
        this.size = size
    }
}


//Only 3 parks and 4 streets. 
const oakPark = new Park('Oak Park', 1970, 2500, 150)
const ardsPark = new Park('Ards Park', 1980, 5000, 250)
const townPark = new Park('Town Park', 1990, 10000, 1000)

///4 streets
const mainStreet = new Street('Main', 1975, 20, 'huge');
const leftStreet = new Street('Left', 1985, 40, 'small');
const rightStreet = new Street('Right', 1995, 60, 'big');
const backStreet = new Street('Back', 2005, 10);







/*
Report containing the following:
1. Tree density of each park in the town
(no. of trees / park area)
2. Avg age of each town park(
sum of all ages / no. of parks)
3.The name of the park that has more than 1000 trees, make up one */


//average park ages
let avgAge = (arr) => {
    //loop through the parks and get the average age
    //sum of all ages / no. of parks

    let sumAges = 0;
    let num = arr.length;

    arr.forEach(element => {
        sumAges += element.calculateAge();
    });

    let avgAge = sumAges / num;
    return avgAge;
    

}







let totalLength = (arr) => {

    let total = 0;
    arr.forEach(element =>{
        total += element.stLength
    });
    return total;

};


let avgLength = (arr) => {
    //loop through the parks and get the average age
    //sum of all ages / no. of parks

    let sumLength = totalLength(arr);
    let num = arr.length;

    arr.forEach(element => {
        sumLength += element.stLength;
    });

    let avgLength = sumLength / num;
    return avgLength;
    

}



let parksReport =  function(){

    let parkArr = [oakPark,ardsPark,townPark];    
    console.log(`----------Parks Report----------`)
    let avgParkAge =avgAge(parkArr)
    console.log(`Our ${parkArr.length} parks have an average age of ${avgParkAge} years`)

    parkArr.forEach(element => {
        console.log(`${element.name} has a tree density of ${element.calculateDensity()} trees per square km` )
        if(element.numTrees >= 1000){
            console.log(`${element.name} has more than 1000 trees`)
        }
    })
}
parksReport();



let streetsReport = function(){
    
    let streetArr = [mainStreet,leftStreet,rightStreet,backStreet];
    console.log(`----------Streets Report----------`)
    
    let totalStLength = totalLength(streetArr);
    let avgerageLength = avgLength(streetArr);
    console.log(`Our ${streetArr.length} streets have total length of ${totalStLength} km, with an average of ${avgerageLength} km`)

    streetArr.forEach(element =>{
        console.log(`${element.name}, built in ${element.buildYear} is a ${element.size} street`)
    })

}

streetsReport();

/*
4. Total and average length of the towns streets
5. Size classification of all the streets
tiny/small/normal/big/huge. If unknown the default is normal
*/


