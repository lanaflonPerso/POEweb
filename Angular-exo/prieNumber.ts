class PrimeNumber {

    nombre: number[];

    constructor(nbre: number[]) {
        this.nombre = nbre;
    };

    isPrimeNumber(nbr: number){
        let result: boolean = true;
        let i: number = 0;
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
    }

    getPrimeNumber(): number[] {
        let result: number[] = [];
        for (let item of this.nombre) {
            if (this.isPrimeNumber(item) == true) {
                result.push(item);
            }
        }
        return result
    }
}

let pm: PrimeNumber = new PrimeNumber([1, 2, 3, 4, 5]);

console.log(pm.getPrimeNumber());