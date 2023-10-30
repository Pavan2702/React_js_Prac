let grandp = {
    id: "01",
    name: "Narayan",
    age: 85,

    child: [
        {
            id: "001",
            name: "Sanjay",
            age: 55,

                    childrens: [{
                        id: "0011",
                        name: "Priyanka",
                        age: 25
                    }, {
                        id: "0012",
                        name: "Harshada",
                        age: 22
                    }, {
                        id: "0013",
                        name: "Sachin",
                        age: 18
                    }
                    ],
                        vehicle: [{
                            brand: "Honda",
                            color: "Black"
                        }]
        },
        {
            id: "002",
            name: "Rajendra",
            age: 49,

                    childrens: [{
                        id: "0021",
                        name: "Pavan",
                        age: 23
                    }, {
                        id: "0022",
                        name: "Rohan",
                        age: 20
                    }],
                        vehicle: [{
                            brand: "Toyota",
                            color: "White"
                        }]
        },
        {
            id: "003",
            name: "Kiran",
            age: 45,

                    childrens: [{
                        id: "0031",
                        name: "Amol",
                        age: 18
                    }, {
                        id: "0032",
                        name: "Arnav",
                        age: 15
                    }],
                        vehicle: [{
                            brand: "Nissan",
                            color: "Red"
                        }]
        }
    ],
}

function findFamilyById(name) {

    let matchData = grandp.find((e) => {
        return e.name
    })
    console.log("🚀 ~ file: task2.js:67 ~ Fill ~ Fill:", e.name)
    return matchData
// console.log("🚀 ~ file: task2.js:64 ~ matchData ~ matchData:", matchData)

}
findFamilyById()