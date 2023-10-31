// 1. import data from json
const Getdata = require("./task7JasonData.json")
console.log("🚀 ~ file: task7.js:3 ~ Getdata:", Getdata)

// 2. give all city name of state which one give by user
function cityByState(stateName) {
    let matchData = Getdata.filter((e) => {
        return e.state_name === stateName;
    });
    let data = matchData.map((e) => {
        return e.city;
    });
    return data;
}

let cityOfAP = cityByState("Andhra Pradesh");
console.log("cityOfAP:", cityOfAP);

// 3. give all city name , which have more character than user given input

function cityByLength(userInput) {
    let stringInput = userInput
    let LenghtOfString = stringInput.length
    let matchData = Getdata.filter((e) => {
        return e.city.length > LenghtOfString
    });
    let data = matchData.map((e) => {
        return e.city;
    });
    return data;
}
let cityNameBylength = cityByLength("Mādnāikanhalli")
console.log("cityNameBylength:", cityNameBylength)

// 4. city list which has population more then user give

    function cityBycounts(count) {
        let populationData = Getdata.filter((e) => {
            return e.population > count;
        });
        let data = populationData.map((e) => {
            return e.city;
        });
        return data;
    }
let cityNameByPopulation = cityBycounts(32225999)
console.log("cityNameByPopulation:", cityNameByPopulation)

// 5. acending decending population wise

    let acending = Getdata.sort((a, b) => {
    return a.population - b.population
})

console.log("acendingOfCity:", acending)


    let decending = Getdata.sort((a, b) => {
        return b.population - a.population
    })

console.log("decendingOfCity:", decending)
// 6. top 5 city population wise [only name of city]

function topPopulationCity() {
    let decending = Getdata.sort((a, b) => {
        return b.population - a.population
    })
    let topCities = decending.slice(0,5)
    let data = topCities.map((e) => {
        return e.city;
    });
    console.log("topCities:", data)   
}
topPopulationCity()

// 7. give total populatin of state which give by user

function stateByPopulation(stateName) {
    let matchData = Getdata.filter((e) => {
        return e.state_name === stateName;
    });
    let data = matchData.map((e) => {
        return e.population;
    });
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total = total + parseInt(data[i]);
        }
        return total;
}
let totalPopulation =  stateByPopulation("Andhra Pradesh");
console.log("totalPopulation:", totalPopulation)



// 8. give top 5 state name population wise 

function topStatePopulation(data,number) {
    let arr =[]
    data.map((ele)=>{
        let index = arr.findIndex((e)=>e.stateName === ele.state_name)
        if(index===-1){
            arr.push({stateName:ele?.state_name,population: +ele?.population})
        }else{
            arr[index].population+= +ele.population
        }
    })
    arr.sort((a,b)=>b.population-a.population)
    return arr.slice(0,number)
}
let count = topStatePopulation(Getdata,6)
console.log("topStatePopulation:", count)