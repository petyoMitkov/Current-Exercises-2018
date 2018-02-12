let input = [
    "Sofia -> Laptops HP -> 200 : 2000",
    "Sofia -> Raspberry -> 200000 : 1500",
    "Montana -> Oranges -> 200000 : 1",
    "Montana -> Cherries -> 10 : 1",
    "Sofia -> Audi Q7 -> 200 : 100000",
    "Montana -> Cherries -> 1 : 5"
];

function cityMarket(strArr) {
    let result = new Map();

    for (let row of strArr) {
        let [town, product, sales] = row.split(" -> ");
        sales = sales.split(" : ").reduce((a, b) => a * b);

        if (!result.has(town)) {
            result.set(town, new Map());
        }
        if (!result.get(town).has(product)) {
            result.get(town).set(product, 0);
        }

        let oldSales = result.get(town).get(product);
        result.get(town).set(product, oldSales + sales);
    }

    for (let [town, products, sales] of result) {
        console.log(`Town - ${town}`);
        for (let [product, sales] of products ) {
            console.log(`$$$${product} : ${sales}`);
        }
    }

    //console.log(result);
}

cityMarket(input);