import { type } from "os";

var rx = require("rxjs");
var op = require('rxjs/operators'); //In ts-node
//import * as rx from "rxjs";
//import * as op from 'rxjs/operators'; //In ng

const myObservable = rx.of("e");
myObservable.subscribe((value) => { console.log(value); });


myObservable.pipe(
    op.tap((value) => console.log('Avant : ' + value)),
    op.map((value: number) => value + 1),
    op.tap((value) => console.log('Après : ' + value)),
).subscribe((value: number) => {
    console.log(value);  // 43
});

var tab = [1, 2, 3];
var tab3 = [5, 6, 7, 8];
const otab = rx.from(tab);
otab.pipe(op.map((x:number) => x * 10)).subscribe((x : number) => {
    console.log(x);
})

var tab2 = [1, 2, 3, 4];
var tab4 = [1, 2, 3, 4];
var tab5 = [1, 2, 3, 4];




const otab2 = rx.from(tab2.concat(tab3).concat(tab4));
otab2.pipe(
    op.filter((x: number) => x % 2 === 1)
    ).subscribe((x : number) => {
        console.log(x);
})
