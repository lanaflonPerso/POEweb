"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rx = require("rxjs");
var op = require('rxjs/operators'); //In ts-node
//import * as rx from "rxjs";
//import * as op from 'rxjs/operators'; //In ng
var myObservable = rx.of("e");
myObservable.subscribe(function (value) { console.log(value); });
myObservable.pipe(op.tap(function (value) { return console.log('Avant : ' + value); }), op.map(function (value) { return value + 1; }), op.tap(function (value) { return console.log('Après : ' + value); })).subscribe(function (value) {
    console.log(value); // 43
});
var tab = [1, 2, 3];
var tab3 = [5, 6, 7, 8];
var otab = rx.from(tab);
otab.pipe(op.map(function (x) { return x * 10; })).subscribe(function (x) {
    console.log(x);
});
var tab2 = [1, 2, 3, 4];
var tab4 = [1, 2, 3, 4];
var tab5 = [1, 2, 3, 4];
var otab2 = rx.from(tab2.concat(tab3).concat(tab4));
otab2.pipe(op.filter(function (x) { return x % 2 === 1; })).subscribe(function (x) {
    console.log(x);
});
//# sourceMappingURL=file1.js.map