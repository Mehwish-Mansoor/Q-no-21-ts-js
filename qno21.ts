//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Person {
    name: string;
    age: number;
    city: string;
}

let person1: Person = {
    name: "Mehwish",
    age: 39,
    city: "Pakistan"
};

let person2: Person = {
    name: "Fatima",
    age: 13,
    city: "iraq"
};

let person3: Person = {
    name: "Umm-e- Hani",
    age: 9,
    city: "Paris"
};
1
console.log(person1);
console.log(person2);
console.log(person3);