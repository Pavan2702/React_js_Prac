const GetProductdata = require("./product.json")

// console.log("Getdata:", GetProductdata)

//1. Fillter Product by gender

function filtergenderItemsByCategory(items, Gender) {
    // Filter items with a gender
    const genderItems = items.filter((item) => {
        return item.gender === Gender
    });

    // Extract the category from each female item
    const genderCategories = genderItems.map((item) => ({
        category: item.category,
        gender: item.gender
    }));
    // return genderCategories

    // Iterate through the items and add them to the map as keys (using a unique key)
    let chk = {}
    let res = []
    for (let i = 0; i < genderCategories.length; i++) {
        if (!chk[genderCategories[i].category]) {
            chk[genderCategories[i].category] = true;
            res.push(genderCategories[i]);
        }
    }
    return res
}

// Example usage:
const genderCategories = filtergenderItemsByCategory(GetProductdata, "female");
// console.log(genderCategories);


function filterFemaleItemsByCategory(items) {
    // Filter items with a "female" gender
    const femaleItems = items.filter((item) => {
        return item.gender === "female"
    });

    // Extract the category from each female item
    const femaleCategories = femaleItems.map((item) => ({
        category: item.category,
        gender: item.gender
    }));
    let Count = femaleCategories.reduce((total) => {
        return ++total
    }, 0)
    return Count
}


// Example usage:
const femaleCategories = filterFemaleItemsByCategory(GetProductdata);
// console.log(femaleCategories);

function filtermaleItemsByCategory(items) {
    // Filter items with a "female" gender
    const maleItems = items.filter((item) => {
        return item.gender === "male"
    });

    // Extract the category from each female item
    const maleCategories = maleItems.map(item => ({
        category: item.category,
        gender: item.gender
    }));
    let Count = maleCategories.reduce((total) => {
        return ++total
    }, 0)
    return Count
}

// Example usage:
const maleCategories = filtermaleItemsByCategory(GetProductdata);
// console.log(maleCategories);



function filterShooesCategory(items) {
    const Mobile = items.filter((item) => {
        return item.category.includes("shoes")
    });

    const maleCategories = Mobile.map(item => ({
        category: item.category,
        description: item.description
    }));
    return maleCategories
}
// Example usage:
const shooesCategories = filterShooesCategory(GetProductdata);
// console.log(shooesCategories);


function totalCostOfSmartphone(items) {
    const MobileCount = items.filter((item) => {
        return item.category.includes("smartphones")
    });
    // return Mobile
    let calculationOfValue = MobileCount.map((item) => {
        return item.price * item.availableStock
    })
    let TotalValue = calculationOfValue.reduce((x, y) => {
        return x + y
    }, 0)
    return TotalValue
}
let TotalValue = totalCostOfSmartphone(GetProductdata)
// console.log(TotalValue);


function totalCostOfShoes(items) {
    const ShoesCount = items.filter((item) => {
        return item.category.includes("shoes")
    });
    // return Mobile
    let calculationOfValue = ShoesCount.map((item) => {
        return item.price * item.availableStock
    })
    let TotalValue = calculationOfValue.reduce((x, y) => {
        return x + y
    }, 0)
    return TotalValue
}
let TotalValueOfShoes = totalCostOfShoes(GetProductdata)
// console.log(TotalValueOfShoes);



function TotalCountBybrands(items,brnd) {
    const Brand = items.filter((item) => {
        return (item.brand === (brnd))
    });

    const BrandCount = Brand.map(item => ({
        category: item.category,
        brand: item.brand
        
    }));
    let TotalValue = BrandCount.reduce((x) => {
        return ++x
    }, 0)
    return TotalValue
}
// Example usage:
const s = TotalCountBybrands(GetProductdata,"Oppo");
console.log(s);

