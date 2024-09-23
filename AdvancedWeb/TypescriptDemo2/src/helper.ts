type Person = {
    fname: string;
    lname: string;
    isMarried?: boolean;
    children: string[];
    getFullName: () => string;
    getAge: (num: number, fname: string) => number;
}

export {Person};