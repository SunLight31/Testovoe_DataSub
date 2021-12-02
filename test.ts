abstract class AClass{
    num: number;
    numbers: number[] = [];
    constructor(num: number) {
        this.num = num;
        this.fill();
    }
    // helper function for fill () that returns a natural number from the interval [min, max]
    randomInteger(min:number, max:number) : number {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        return Math.round(rand);
    }
    // fills the Numbers array with random numbers from the interval [min, max]
    private fill() : number[] {
        let result = this.numbers;
        for (let i=0;i<this.num;i++){
            result.push(this.randomInteger(1, 15));
        }
        return result;
    }
    // helper function for factorial() that returns the factorial of a natural number
    numFactorial(n: number) : number {
        return n ? n * this.numFactorial(n - 1) : 1;
    }
    // returns an array of factorials from an array of Numbers
    factorial() {
        return this.numbers.map(x => this.numFactorial(x));
    }
    abstract sort(n: number[]) : number[];
}
class Class1 extends AClass {
    sort(arr: number[]) : number[]{
        arr.sort((a, b) => a-b)
        return this.factorial();
    }
}
class Class2 extends AClass {
    sort(arr: number[]) : number[]{
        let len = arr.length;
        for (let i = len-1; i>=0; i--) {
            for (let j = 1; j <= i; j++) {
                if (arr[j - 1] > arr[j]) {
                    let temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return this.factorial();
    }
}

//let abc = new AClass(3); // Cannot create an instance of an abstract class.
let first_class_instance = new Class1(4);
let second_class_instance = new Class2(2);
console.log(first_class_instance.numbers);
console.log(first_class_instance.factorial())
console.log(first_class_instance.sort(first_class_instance.numbers));
console.log(second_class_instance.numbers);
console.log(second_class_instance.sort(second_class_instance.numbers));