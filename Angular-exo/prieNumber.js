var PrimeNumber = /** @class */ (function () {
    function PrimeNumber(nbre) {
        this.nombre = nbre;
    }
    ;
    PrimeNumber.prototype.isPrimeNumber = function (nbr) {
        var result = true;
        var i = 0;
        if (nbr < 2) {
            result = false;
        }
        else {
            for (i = 2; i < nbr; i++) {
                if (nbr % i == 0) {
                    result = false;
                    break;
                }
            }
        }
        return result;
    };
    PrimeNumber.prototype.getPrimeNumber = function () {
        var result = [];
        for (var _i = 0, _a = this.nombre; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.isPrimeNumber(item) == true) {
                result.push(item);
            }
        }
        return result;
    };
    return PrimeNumber;
}());
var pm = new PrimeNumber([1, 2, 3, 4, 5]);
console.log(pm.getPrimeNumber());
//# sourceMappingURL=prieNumber.js.map