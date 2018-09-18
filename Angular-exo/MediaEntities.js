var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MediaEntities;
(function (MediaEntities) {
    var Publisher = /** @class */ (function () {
        function Publisher() {
        }
        return Publisher;
    }());
    MediaEntities.Publisher = Publisher;
    var Media = /** @class */ (function () {
        function Media(id, title, price) {
            this.id = null;
            this.title = "";
            this.publisher = null;
            this.author = null;
            this.id = id;
            this.title = title;
            this.price = price;
        }
        Media.prototype.getNetPrice = function () {
            return this.price * 1.2;
        };
        return Media;
    }());
    MediaEntities.Media = Media;
    var Cd = /** @class */ (function (_super) {
        __extends(Cd, _super);
        function Cd() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Cd;
    }(Media));
    MediaEntities.Cd = Cd;
    var Book = /** @class */ (function (_super) {
        __extends(Book, _super);
        function Book(pgnbr, id, title, price) {
            var _this = _super.call(this, id, title, price) || this;
            _this.pageNbr = pgnbr;
            return _this;
        }
        Book.prototype.getNetPrice = function () {
            return this.price * 1.05;
        };
        return Book;
    }(Media));
    MediaEntities.Book = Book;
    var CartError = /** @class */ (function (_super) {
        __extends(CartError, _super);
        function CartError(m) {
            return _super.call(this, m) || this;
        }
        return CartError;
    }(Error));
    MediaEntities.CartError = CartError;
    var CartRow = /** @class */ (function () {
        function CartRow() {
            this.quantity = 1;
        }
        CartRow.prototype.increment = function () {
            this.quantity++;
        };
        CartRow.prototype.decrement = function () {
            if (this.quantity > 1) {
                this.quantity--;
            }
            else {
                throw new CartError("Quantité panier");
            }
        };
        return CartRow;
    }());
    MediaEntities.CartRow = CartRow;
    var Cart = /** @class */ (function () {
        function Cart() {
            this.cartRowList = new Array();
        }
        Cart.prototype.add = function (cartRow) {
            this.cartRowList.push(cartRow);
        };
        Cart.prototype.remove = function (cartRow) {
            if (this.isMediaInCart(cartRow)) {
                if (cartRow.quantity > 1) {
                    cartRow.decrement();
                }
                else {
                    this.cartRowList = this.cartRowList.filter(function (item) { return item !== cartRow; });
                }
            }
            else {
                throw new CartError("commande remove impossible");
            }
        };
        Cart.prototype.getTotalNetPrice = function () {
            var totalPrice = 0;
            for (var _i = 0, _a = this.cartRowList; _i < _a.length; _i++) {
                var price = _a[_i];
                totalPrice += price.media.getNetPrice();
            }
            return totalPrice;
        };
        Cart.prototype.validate = function () {
            if (this.getTotalNetPrice() <= 0) {
                throw new CartError("Prix total <= 0");
            }
            else {
                return "Panier validé";
            }
        };
        Cart.prototype.isMediaInCart = function (row) {
            var bool = false;
            for (var _i = 0, _a = this.cartRowList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.media == row.media) {
                    bool = true;
                }
            }
            return bool;
        };
        return Cart;
    }());
    MediaEntities.Cart = Cart;
    var publisher1 = {
        id: 1,
        name: "toto"
    };
    var author1 = {
        id: 1,
        firstName: "jean",
        lastName: "valjean"
    };
    var cd1 = {
        id: 2,
        title: "the downward spiral",
        price: 23,
        publisher: publisher1,
        author: author1,
        getNetPrice: function () { return this.price * 1.2; }
    };
    var cartRow1 = new CartRow();
    var cartRow2 = new CartRow();
    var cartRow3 = new CartRow();
    cartRow1.media = new Book(12, 1, "la vie en rose", 25);
    ;
    cartRow1.increment();
    cartRow2.media = new Cd(1, "la vida loca", 25);
    cartRow3.media = new Cd(1, "la vida loca", 25);
    var cart = new Cart();
    cart.add(cartRow1);
    cart.add(cartRow2);
    console.log(cart.cartRowList);
})(MediaEntities || (MediaEntities = {}));
//# sourceMappingURL=MediaEntities.js.map