// contoh 1
// let person = { name: 'Yogi', age: 20 };
// console.log(person?.name); // "Yogi"

// let data: any;
// console.log(data?.name); // undefined

// contoh 2
// let person = { name: "John", age: 30 };
// let name: string = person?.name; // OK
// let age: number = person?.age; // OK
// let address: string = person?.address; // Error, person.address is undefined

type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
// let log: any = null;
// log?.('1');
