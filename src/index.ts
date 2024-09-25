let namaSaya: string = "Salman Rizky";
let userName: number = 123;
let isDead: boolean = false;

// Array biasa
let buah: string[] = ['semangka', 'pisang'];

// Array user dengan tipe yang jelas
let user: string[] = ['salman', 'risky'];

// Tuple array
let binatang: [string, number, boolean] = ["kijang", 25, true];

console.log(namaSaya);
console.log({ isDead });
console.log({ userName });
console.log({ buah });
console.log({ binatang });
console.log(user[0]);

function factorial(n:number):number{
    if(n==0)return 1;
    return n*factorial(n-1);
}

console.log(factorial(4));


function factorial(r:number):number{
    if(r==0) return 1;
    return r*factorial(r-1);
}
console.log(factorial(0));


function condition(){
    if(true){
        console.log('oke ini benar');
    }else if(true){
        console.log("mungkin");
    }
}

condition();

let nama: string = "salman";

nama = nama.toUpperCase();

console.log(nama)