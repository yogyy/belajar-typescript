function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Barry', 'Bruce', 'Clark']);

numArray.push(10);
strArray.push('Luthor');
