"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let people = [
    {
        fname: "john",
        lname: "snow",
        //isMarried: true,
        children: [],
        getFullName: function () {
            return `${this.fname} ${this.lname}`;
        },
        getAge: function (num, name) {
            return num * 10;
        }
    }
];
console.log(people[0].getFullName());
console.log(people[0].getAge(64, "hi"));
