let grandp = {
    name: "narayan",
    age: 80,

    child: [
        {
            name: "dhiraj",
            age: 50,
            childrens: [{
                name: "diptesh",
                age: 18
            }, {
                name: "dipali",
                age: 22
            },
            ],
            vehicle: [{
                brand: "suzuki",
                color: "white"
            }]
        },
        {
            name: "nisha",
            age: 45,

            childrens: [{
                name: "darshan",
                age: 23
            }, {
                name: "shlok",
                age: 21
            }],
            vehicle: [{
                brand: "ertiga",
                color: "black"
            }]
        },
        {
            name: "manisha",
            age: 48,

            childrens: [{
                name: "shubham",
                age: 23
            }, {
                name: "shreya",
                age: 21
            }],
            vehicle: [{
                brand: "nissan",
                color: "gray"
            }
            ]
        }
    ],

}

function findFamilyByName(id) {

    let matchData = grandp.child.find((e) => {
        return e.id
    })
    console.log("🚀 ~ file: task2.js:67 ~ Fill ~ Fill:", matchData)
    return matchData
}
// console.log("🚀 ~ file: task2.js:64 ~ matchData ~ matchData:", matchData)
let getdat = findFamilyByName("001")
console.log("🚀 ~ file: task2.js:69 ~ getdat:", getdat)
