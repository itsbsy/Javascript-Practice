let data = [{
    name: "Brijesh",
    age: 25,
    balance: 8000
},{
    name: "Arvind",
    age: 34,
    balance: 653
},{
    name: "Shivang",
    age: 76,
    balance: 56473
},{
    name: "Aman",
    age: 38,
    balance: 764
},{
    name: "Palo",
    age: 43,
    balance: 1284
},{
    name: "Harsh",
    age: 53,
    balance: 0
}]

// Find the names having balance > 1000

const users = data.filter((x) => x.balance >= 1000).map((x)=> x.name);
const addBalance = data.filter((x) => x.age >= 40).map((x) => x.balance + 1000)

const addBalances = data.map((item) => {
    let addBalance = {
        ...item,
        balance: item.balance + 2000
    }
    return addBalance
})
console.log(addBalances);

