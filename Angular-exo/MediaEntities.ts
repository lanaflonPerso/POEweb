namespace MediaEntities {
    export class Publisher {
        id: number;
        name: string;
    }

    export interface Author {
        id: number;
        firstName: string;
        lastName: string;
    }

    export interface IMedia {
        id: number;
        title: string;
        price: number;
        publisher: Publisher;
        author: Author;
        getNetPrice(): number;
    }

    export abstract class Media implements IMedia {
        id: number = null;
        title: string = "";
        price: number;
        publisher: Publisher = null;
        author: Author = null;

        constructor(id: number, title: string, price: number) {
            this.id = id;
            this.title = title;
            this.price = price;
        }
        getNetPrice(): number {
            return this.price * 1.2;
        }
    }

    export class Cd extends Media {
        trackNbr: number;
    }

    export class Book extends Media {
        pageNbr: number;
        getNetPrice(): number {
            return this.price * 1.05
        }
        constructor(pgnbr: number, id: number, title: string, price: number) {
            super(id, title, price);
            this.pageNbr = pgnbr;
        }
    }

    export class CartError extends Error {
        constructor(m: string) {
            super(m);
        }
    }

    export class CartRow {
        media: Media;
        quantity: number = 1;

        increment() {
            this.quantity++;
        }

        decrement() {
            if (this.quantity > 1) {
                this.quantity--;
            }
            else {
                throw new CartError("Quantité panier");
            }
        }
    }

    export class Cart {
        cartRowList: Array<CartRow> = new Array<CartRow>();

        add(cartRow: CartRow): void {
            this.cartRowList.push(cartRow);
        }

        remove(cartRow: CartRow) {
            if (this.isMediaInCart(cartRow)) {
                if (cartRow.quantity > 1) {
                    cartRow.decrement();
                }
                else {
                    this.cartRowList = this.cartRowList.filter(item => item !== cartRow);
                }
            }
            else {
                throw new CartError("commande remove impossible")
            }
        }

        getTotalNetPrice(): number {
            let totalPrice: number = 0;
            for (let price of this.cartRowList) {
                totalPrice += price.media.getNetPrice();
            }
            return totalPrice;
        }

        validate() {
            if (this.getTotalNetPrice() <= 0) {
                throw new CartError("Prix total <= 0");
            }
            else {
                return "Panier validé";
            }
        }

        isMediaInCart(row: CartRow) {
            let bool: boolean = false;
            for (var item of this.cartRowList) {
                if (item.media == row.media) {
                    bool = true;
                }
            }
            return bool;
        }
    }


    let publisher1: Publisher = {
        id: 1,
        name: "toto"
    }

    let author1: Author = {
        id: 1,
        firstName: "jean",
        lastName: "valjean"
    }

    let cd1 : Media = {
        id: 2,
        title: "the downward spiral",
        price: 23,
        publisher: publisher1,
        author: author1,
        getNetPrice() {return this.price*1.2}
    }

    let cartRow1: CartRow = new CartRow();
    let cartRow2: CartRow = new CartRow();
    let cartRow3: CartRow = new CartRow();
    cartRow1.media = new Book(12, 1, "la vie en rose", 25);;
    cartRow1.increment();
    cartRow2.media = new Cd(1, "la vida loca", 25);
    cartRow3.media = new Cd(1, "la vida loca", 25);
    let cart: Cart = new Cart();
    cart.add(cartRow1);
    cart.add(cartRow2);
    console.log(cart.cartRowList);
}