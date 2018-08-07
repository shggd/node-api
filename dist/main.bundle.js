webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"nav.visible\"></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(nav) {
        this.nav = nav;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__["a" /* NavbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__["a" /* NavbarService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_tracking_module__ = __webpack_require__("../../../../../src/app/tracking/tracking.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_module__ = __webpack_require__("../../../../../src/app/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart_module__ = __webpack_require__("../../../../../src/app/cart/cart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_module__ = __webpack_require__("../../../../../src/app/product/product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_body_component__ = __webpack_require__("../../../../../src/app/navbar/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_notfound_component__ = __webpack_require__("../../../../../src/app/navbar/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { ReviewPageComponent } from './checkout/review-page.component';
// import { ReviewListComponent } from './checkout/review-list.component';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { ProductPreviewComponent } from './product/product-preview.component';
// import { ProductPageComponent } from './product-page/product-page.component';
// import { CartComponent } from './cart/cart.component';
// import { AddToCartComponent } from './cart/add-to-cart.component';
// import { RemoveItemComponent } from './cart/remove-item.component';
// import { CartListComponent } from './cart/cart-list.component';
// import { SearchComponent } from './search/search.component';
// import { SearchPageComponent } from './search/search-page.component';
// import { SearchResultComponent } from './search/search-result.component';
// import { ProductComponent } from './product/product.component';
var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_13__navbar_body_component__["a" /* BodyComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_14__navbar_notfound_component__["a" /* NotfoundComponent */] },
    { path: '**', redirectTo: '404' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__navbar_body_component__["a" /* BodyComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
            // FormsModule,
            // HttpModule,
            __WEBPACK_IMPORTED_MODULE_5__product_product_module__["a" /* ProductModule */],
            __WEBPACK_IMPORTED_MODULE_4__cart_cart_module__["a" /* CartModule */],
            __WEBPACK_IMPORTED_MODULE_3__search_search_module__["a" /* SearchModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_0__tracking_tracking_module__["a" /* TrackingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */].forRoot(routes),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_7__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_6__services_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__["a" /* NavbarService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cart/add-to-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_materialize_css__ = __webpack_require__("../../../../materialize-css/dist/js/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_materialize_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// declare var Materialize:any;

var AddToCartComponent = (function () {
    function AddToCartComponent(cartService) {
        this.cartService = cartService;
    }
    AddToCartComponent.prototype.ngOnInit = function () {
    };
    AddToCartComponent.prototype.add = function () {
        if (this.cartService.add(this.product, 1)) {
            __WEBPACK_IMPORTED_MODULE_3_materialize_css__["toast"]({ html: 'Added to Cart!!!', displayLength: 3000 });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_materialize_css__["toast"]({ html: 'Out of Stock', displayLength: 3000 });
        }
    };
    return AddToCartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__models_product_model__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__models_product_model__["a" /* Product */]) === "function" && _a || Object)
], AddToCartComponent.prototype, "product", void 0);
AddToCartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-add-to-cart',
        template: '<button class="btn" (click)="add()">Add To Cart</button>',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _b || Object])
], AddToCartComponent);

var _a, _b;
//# sourceMappingURL=add-to-cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.cart-item{ \r\n     padding: 20px 0;\r\n }\r\n\r\n .image-wrapper{\r\n    margin-right: 20px;\r\n }\r\n\r\n select{\r\n    display: inline;\r\n}\r\n.product-image{\r\n    width: 180px;\r\n    height: 130px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cart-item\">\n  <div class=\"row\">\n    <div class=\"image-wrapper col s2 m3 hide-on-small-only\">\n      <img src=\"{{cartItem.product.images}}\" class=\"responsive-img product-image\">\n    </div>\n    <div class=\"col s4\">\n      <a [routerLink]=\"['/product',cartItem.product['_id']]\">{{cartItem.product.name}}</a><br>\n      <span class=\"price\">${{cartItem.product.price}}</span><br>\n      <app-remove-item [product] = cartItem.product></app-remove-item>\n    </div>\n\n    <div class= \"col s3\">\n      <select (change)=\"change($event.target.value)\" style=\"margin-bottom:10px\">\n        <option *ngFor=\"let val of numbers\" [selected]=\"val===cartItem.count\" value=\"{{val}}\">{{val}}</option>\n      </select><br>\n      Total: <span class=\"price\">${{subtotal}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cart/cart-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_cart_item_model__ = __webpack_require__("../../../../../src/app/models/cart-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartListComponent = (function () {
    function CartListComponent(cartService) {
        this.cartService = cartService;
    }
    CartListComponent.prototype.ngOnInit = function () {
        this.numbers = Array(this.cartItem.product.quantity).fill(0).map(function (x, i) { return i + 1; });
        this.subtotal = this.cartItem.getSubtotal();
    };
    CartListComponent.prototype.change = function (value) {
        value = parseInt(value);
        this.cartService.update(this.cartItem, value);
        this.subtotal = this.cartItem.getSubtotal();
    };
    return CartListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__models_cart_item_model__["a" /* CartItem */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__models_cart_item_model__["a" /* CartItem */]) === "function" && _a || Object)
], CartListComponent.prototype, "cartItem", void 0);
CartListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-cart-list',
        template: __webpack_require__("../../../../../src/app/cart/cart-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cart/cart-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _b || Object])
], CartListComponent);

var _a, _b;
//# sourceMappingURL=cart-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n/* .listwrapper{\r\n    padding-bottom:10px;\r\n    margin-right:5px;\r\n} */\r\n.orderSummary{\r\n    padding: 20px 10px 20px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <h1>Shopping Cart</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col s12 m7 l8  z-depth-1 listwrapper\">\r\n      <app-cart-list *ngFor=\"let item of cart?.shoppingCart\" [cartItem] = item></app-cart-list>\r\n      <h1 *ngIf=\"cart.shoppingCart.length===0\">Your cart is currently empty. </h1>\r\n    </div>\r\n    <div class=\"col s12 m4 l3 z-depth-1\">\r\n      <div class=\"orderSummary\">\r\n        <span>Order Summary:</span>\r\n        <p>Total Item: {{totalItem}}</p>\r\n        <p>Subtotal: <span class=\"price\">${{totalPrice}}</span></p>\r\n        <button [disabled]=\"isEmptyCart()\" class=\"waves-effect waves-light btn\"(click)=\"checkout()\">Checkout</button>\r\n      </div>  \r\n    </div>\r\n  </div>  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = (function () {
    function CartComponent(cartService, requestService, r) {
        this.cartService = cartService;
        this.requestService = requestService;
        this.r = r;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.get().subscribe(function (data) { _this.cart = data; _this.totalPrice = data.getTotalPrice(); _this.totalItem = data.getTotalItem(); });
    };
    CartComponent.prototype.checkout = function () {
        // this.requestService.submitCart(this.cart).subscribe(
        // success=>{this.cartService.destroyCart();Materialize.toast('Order Submitted!!', 5000); console.log(success)},
        // error=>console.log(error)
        // );
        this.r.navigateByUrl('/checkout');
    };
    CartComponent.prototype.isEmptyCart = function () {
        return this.totalItem < 1;
    };
    CartComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CartComponent);

var _a, _b, _c;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkout_comfirmation_component__ = __webpack_require__("../../../../../src/app/checkout/comfirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_checkout_guard__ = __webpack_require__("../../../../../src/app/guards/checkout.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_review_page_component__ = __webpack_require__("../../../../../src/app/checkout/review-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__remove_item_component__ = __webpack_require__("../../../../../src/app/cart/remove-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_list_component__ = __webpack_require__("../../../../../src/app/cart/cart-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var cartRouting = [
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_8__cart_component__["a" /* CartComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_3__checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_checkout_guard__["a" /* CheckoutGuard */]] },
    { path: 'review-order', component: __WEBPACK_IMPORTED_MODULE_2__checkout_review_page_component__["a" /* ReviewPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_checkout_guard__["a" /* CheckoutGuard */]] },
    { path: 'comfirmation/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__checkout_comfirmation_component__["a" /* ComfirmationComponent */] }
];
var CartModule = (function () {
    function CartModule() {
    }
    return CartModule;
}());
CartModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_7__cart_list_component__["a" /* CartListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__remove_item_component__["a" /* RemoveItemComponent */],
            __WEBPACK_IMPORTED_MODULE_3__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_2__checkout_review_page_component__["a" /* ReviewPageComponent */],
            __WEBPACK_IMPORTED_MODULE_0__checkout_comfirmation_component__["a" /* ComfirmationComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forChild(cartRouting)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__guards_checkout_guard__["a" /* CheckoutGuard */]]
    })
], CartModule);

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ "../../../../../src/app/cart/remove-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemoveItemComponent = (function () {
    function RemoveItemComponent(cartService) {
        this.cartService = cartService;
    }
    RemoveItemComponent.prototype.remove = function () {
        this.cartService.remove(this.product);
    };
    return RemoveItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_product_model__["a" /* Product */]) === "function" && _a || Object)
], RemoveItemComponent.prototype, "product", void 0);
RemoveItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-remove-item',
        template: '<a href="javascript:;" (click)="remove()">Remove</a>',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */]) === "function" && _b || Object])
], RemoveItemComponent);

var _a, _b;
//# sourceMappingURL=remove-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-container{\r\n    margin-bottom: 150px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"blue\">\n    <div class=\"nav-wrapper container\">\n      <a href=\"#\" [routerLink]=\"['/product']\" class=\"brand-logo center white-text\"><i class=\"material-icons\">shopping_cart</i></a> \n      <ul class=\"left\">\n            <li><a [routerLink]=\"['/cart']\"><i class=\"material-icons left\">arrow_back</i>Back to Cart</a></li>          \n      </ul>\n      <ul class=\"right\">\n            <li><i class=\"material-icons right\">phone</i>646-132-2222</li>    \n      </ul>\n    </div>\n</nav> -->\n        \n<div id=\"main-container\" class=\"container\">\n    <h2 class=\"center\">CheckOut</h2>\n    <div class=\"row\">\n        <div class=\"col l2\"></div>\n        <div class=\"col l4 s12\">\n            <h2>Guest CheckOut</h2>\n            <p>You can check out without creating an account. You'll have a chance to create an account later</p>\n            <a [routerLink]=\"['/review-order']\"><button class=\"btn\">Checkout</button></a>\n            <h2>User Signup</h2>\n            <p>Quickly set up an account</p>\n            <a><button class=\"btn\">Create account</button></a>\n        </div>\n        <div class=\"col l4 s12\">\n            <h2>User CheckOut</h2>\n            <p>Welcome back. Please enter your information below.</p>\n            <div class=\"input-field\">\n                    <input id=\"Username\" type=\"email\">\n                    <label for=\"Username\">Username</label>\n                  </div>\n            <div class=\"input-field\">\n                <input id=\"password\" type=\"password\" class=\"validate\">\n                <label for=\"password\">Password</label>\n                </div>\n            <button class=\"btn\">Sign in</button>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutComponent = (function () {
    function CheckoutComponent() {
        window.scrollTo(0, 100);
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.css")],
    }),
    __metadata("design:paramtypes", [])
], CheckoutComponent);

//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/comfirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n#text{\r\n    margin-bottom:30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/comfirmation.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\" id=\"maincontainer\">\n  <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"card grey lighten-5\">\n          <div class=\"card-content black-text\">\n            <span class=\"card-title\" style=\"font-weight:400\">Hello,</span>\n            <p id=\"text\">Thank you for shopping</p>\n            <p id=\"text\">We are happy to inform you that your order has been sucessfully processed</p>\n            <p id=\"text\">Your order Number: <a href=\"javascript:void(0)\" (click)=\"getStatus()\">{{ordernum}}</a></p>\n          </div>\n          <div class=\"card-action\">\n            <a href=\"javascript:void(0)\">Contact Us</a>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/checkout/comfirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComfirmationComponent = (function () {
    function ComfirmationComponent(requestService, activatedRoute, router) {
        this.requestService = requestService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ComfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.render(params['id']);
        });
    };
    ComfirmationComponent.prototype.render = function (id) {
        var _this = this;
        this.ordernum = id;
        this.requestService.getOrder(id).subscribe(function (data) { }, function (error) { _this.router.navigate(['/404']); });
    };
    ComfirmationComponent.prototype.getStatus = function () {
        this.router.navigate(['/orderstatus'], { queryParams: { ordernum: this.ordernum } });
    };
    return ComfirmationComponent;
}());
ComfirmationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-comfirmation',
        template: __webpack_require__("../../../../../src/app/checkout/comfirmation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/comfirmation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ComfirmationComponent);

var _a, _b, _c;
//# sourceMappingURL=comfirmation.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/review-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  @media only screen and (min-width: 601px) {\r\n    .container {\r\n      width: 85%;\r\n    }\r\n  }\r\n  @media only screen and (min-width: 993px) {\r\n    .container {\r\n      width: 70%;\r\n    }\r\n  }\r\n\r\n  .product-image{\r\n    width: 180px;\r\n    height: 130px;\r\n}\r\n\r\n#mainbody{\r\n  margin: 0 auto;\r\n  max-width: 980px;\r\n  width: 90%;\r\n  margin-bottom:150px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/review-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"blue\">\n    <div class=\"nav-wrapper container\">\n      <a href=\"#\" [routerLink]=\"['/product']\" class=\"brand-logo center white-text\"><i class=\"material-icons\">shopping_cart</i></a> \n      <ul class=\"left\">\n            <li><a [routerLink]=\"['/checkout']\"><i class=\"material-icons left\">arrow_back</i>Back to Checkout</a></li>          \n      </ul>\n      <ul class=\"right\">\n            <li><i class=\"material-icons right\">phone</i>646-132-2222</li>    \n      </ul>\n    </div>\n</nav> -->\n\n\n<div class=\"container\" id=\"mainbody\">\n    <h2 class=\"center\">Review Order</h2>\n    <div class=\"row\">\n      <div class=\"col s12 z-depth-1 listwrapper\">\n        <app-cart-list *ngFor=\"let item of cart?.shoppingCart\" [cartItem] = item></app-cart-list>\n      </div>\n    </div>\n    <div class=\"center\">\n      <h4>ITEM({{cart.getTotalItem()}})</h4>\n      <h4>TOTAL ${{cart.getTotalPrice()}}</h4>\n      <button class=\"btn\" (click)=\"Placeorder()\">Place Order</button>\n    </div>    \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/review-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewPageComponent = (function () {
    function ReviewPageComponent(cartService, requestService, r, nav) {
        this.cartService = cartService;
        this.requestService = requestService;
        this.r = r;
        this.nav = nav;
        window.scrollTo(0, 100);
    }
    ReviewPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.get().subscribe(function (data) { _this.cart = data; });
    };
    ReviewPageComponent.prototype.Placeorder = function () {
        var _this = this;
        this.requestService.submitCart(this.cart).subscribe(function (data) {
            if (data.success == true) {
                _this.cartService.destroyCart();
                _this.r.navigate(['comfirmation/' + data.order.orderNumber]);
            }
        }, function (error) { return console.log(error); });
    };
    ReviewPageComponent.prototype.ngOnDestroy = function () {
    };
    return ReviewPageComponent;
}());
ReviewPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["o" /* Component */])({
        selector: 'app-review-page',
        template: __webpack_require__("../../../../../src/app/checkout/review-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/review-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__["a" /* NavbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__["a" /* NavbarService */]) === "function" && _d || Object])
], ReviewPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=review-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/checkout.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutGuard = (function () {
    function CheckoutGuard(cartService, r) {
        this.cartService = cartService;
        this.r = r;
    }
    CheckoutGuard.prototype.canActivate = function (next, state) {
        if (!this.cartService.isEmpty()) {
            return true;
        }
        else {
            this.r.navigate(['/cart']);
            return false;
        }
    };
    return CheckoutGuard;
}());
CheckoutGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CheckoutGuard);

var _a, _b;
//# sourceMappingURL=checkout.guard.js.map

/***/ }),

/***/ "../../../../../src/app/models/cart-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = (function () {
    function CartItem(product, count) {
        this.product = product;
        this.count = count;
    }
    CartItem.prototype.getSubtotal = function () {
        return this.product.price * this.count;
    };
    CartItem.prototype.checkStock = function () {
        return this.count < this.product.quantity;
    };
    return CartItem;
}());

//# sourceMappingURL=cart-item.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/cart.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_item_model__ = __webpack_require__("../../../../../src/app/models/cart-item.model.ts");

var Cart = (function () {
    function Cart() {
        this.shoppingCart = [];
    }
    Cart.prototype.remove = function (item) {
        var data = this.shoppingCart.findIndex(function (pro) { return pro.product.name === item.name; });
        if (data > -1) {
            this.shoppingCart.splice(data, 1);
        }
    };
    Cart.prototype.add = function (item, count) {
        var data = this.shoppingCart.find(function (pro) { return pro.product.name === item.name; });
        if (data === undefined) {
            var newItem = new __WEBPACK_IMPORTED_MODULE_0__cart_item_model__["a" /* CartItem */](item, count);
            this.shoppingCart.push(newItem);
            return true;
        }
        else {
            if (data.checkStock()) {
                data.count = data.count + count;
                return true;
            }
            return false;
        }
    };
    Cart.prototype.update = function (item, newCount) {
        var data = this.shoppingCart.find(function (pro) { return pro.product.name === item.product.name; });
        if (data) {
            data.count = newCount;
        }
    };
    Cart.prototype.setCart = function (cart) {
        this.shoppingCart = cart;
    };
    Cart.prototype.getTotalPrice = function () {
        var _this = this;
        this.totalPrice = 0;
        this.shoppingCart.forEach(function (price) {
            _this.totalPrice += price.getSubtotal();
        });
        return this.totalPrice;
    };
    Cart.prototype.getTotalItem = function () {
        var _this = this;
        this.totalItem = 0;
        this.shoppingCart.forEach(function (product) { return _this.totalItem += product.count; });
        return this.totalItem;
    };
    return Cart;
}());

//# sourceMappingURL=cart.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .carousel { \r\n    min-height: 600px;\r\n    } */\r\n\r\n\r\n#maincontainer{\r\n    margin: 0 auto;\r\n    max-width: 780px;\r\n    width: 90%;\r\n    margin-bottom:150px;\r\n    margin-top:50px;\r\n}\r\n\r\na>img{\r\n    height:290px;\r\n    padding: 8px 8px 0px 8px;\r\n}\r\na>img:hover{\r\n    opacity: 0.9;\r\n}\r\n.card-content>a{\r\n    font-weight: 600;\r\n}\r\n\r\n.maincard{\r\n    margin-top:50px;\r\n    background-image:url(" + __webpack_require__("../../../../../src/app/navbar/cardimage.png") + ");\r\n    height:550px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/body.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col s12\">\n            <div class=\"card maincard\">\n                <div class=\"card-content black-text center-align\">\n                        <h1>Home</h1>\n                        <h4>Welcome to my Shop</h4>\n                        <a [routerLink]=\"['/product']\" class=\"btn-large waves-effect waves-light center\">Get Started</a>\n                      </div>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"divider\"></div>\n\n    <h3 class=\"center-align\">Popular Items</h3>\n    <div class=\"row\">        \n        <div *ngFor=\"let product of products\" class=\"col s6 l3\">\n            <div class=\"card\">\n                <div class=\"card-image\">\n                    <a [routerLink]=\"['/product',product._id]\"><img src=\"{{product.images}}\" class=\"responsive\"></a>\n                    \n                    \n                </div>\n            <div class=\"card-content center-align\">\n                    <a [routerLink]=\"['/product',product._id]\" class=\"black-text\">{{product.name|uppercase}}</a>\n            </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/navbar/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyComponent = (function () {
    function BodyComponent(productService) {
        this.productService = productService;
        window.scroll(0, 0);
    }
    BodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getRandom().subscribe(function (data) {
            _this.products = data;
        }, function (error) { console.log(error); });
    };
    return BodyComponent;
}());
BodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-body',
        template: __webpack_require__("../../../../../src/app/navbar/body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/body.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__product_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__product_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], BodyComponent);

var _a;
//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/cardimage.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cardimage.e50c6addb7fecb9ec1c0.png";

/***/ }),

/***/ "../../../../../src/app/navbar/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer{\r\n  margin-top: 150px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer grey darken-3\"  id=\"footer\"> \n    <div class=\"container\">\n      <div class=\"row\">\n        \n        <div class=\"col l3 m3 offset-l2 offset-m2 s12\">\n          <h5 class=\"white-text\">About Us</h5>\n          <p class=\"grey-text text-lighten-4\">Thank You for Shopping</p>\n\n\n        </div>\n        <div class=\"col l3 m3 s12\">\n          <h5 class=\"white-text\">Quick Links</h5>\n          <ul>\n            <li><a class=\"white-text\" [routerLink]=\"['/']\">Home</a></li>\n            <li><a class=\"white-text\" [routerLink]=\"['/product']\">Products</a></li>\n            <li><a class=\"white-text\" [routerLink]=\"['/search']\">Search</a></li>\n            <li><a class=\"white-text\" [routerLink]=\"['/orderstatus']\">Order Status</a></li>\n          </ul>\n        </div>\n        <div class=\"col l3 m3  s12\">\n          <h5 class=\"white-text\">Connect</h5>\n          <ul>\n            <li><a class=\"white-text\" href=\"javascript:void(0)\">Twitter <i class=\"fab fa-twitter\"></i></a></li>\n            <li><a class=\"white-text\" href=\"javascript:void(0)\">FaceBook <i class=\"fab fa-facebook\"></i></a></li>\n            <li><a class=\"white-text\" href=\"javascript:void(0)\">Linkedin <i class=\"fab fa-linkedin\"></i></a></li>\n            <li><a class=\"white-text\" href=\"javascript:void(0)\">Info <i class=\"fas fa-rss\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright center grey darken-2\">\n      <div class=\"container\">\n          Shopv2 ©Copyright 2018\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/navbar/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(cartservice) {
        this.cartservice = cartservice;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.ngOnDestroy = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/navbar/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n\r\n#mainnav{\r\n    height: 85px;\r\n    padding: 15px 15px 15px 15px;\r\n}\r\n\r\n#mainlogo{\r\n    font-size: 4rem;\r\n}\r\n\r\n\r\n.badge{\r\n    color:white;\r\n    position: relative;\r\n    width: 23px;\r\n    height: 23px;\r\n    padding: 0;\r\n    background-color: red;\r\n    top:-10px;\r\n    left:-10px;\r\n    line-height: 0;\r\n\r\n}\r\n\r\n.material-icons{\r\n    margin-right: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"orange\">\n    <div class=\"container center-align white-text\">\n            <strong>Free Item</strong>\n    </div>\n</div>\n\n<ul id='dropdown1' class='dropdown-content'>\n        <li><a (click)=\"changeRoute('/product')\" class=\"black-text\">Products</a></li>\n</ul>\n<ul id='dropdown2' class='dropdown-content'>\n        <li><a (click)=\"changeRoute('/orderstatus')\"  class=\"black-text\">Order Status</a></li>\n</ul>\n\n<nav id=\"mainnav\" class=\"black\">\n    <div class=\"nav-wrapper container\">\n        <a href=\"#\" data-target=\"slide-out\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n        <a [routerLink]=\"['/']\" class=\"brand-logo white-text hide-on-large-only\" ><i id=\"mainlogo\" class=\"material-icons\">shopping_basket</i></a>\n        <ul class=\"left hide-on-med-and-down\" >\n            <li><a [routerLink]=\"['/']\"><i id=\"mainlogo\" class=\"material-icons left\">shopping_basket</i>SHOPV2</a></li>\n            <li><a class=\"dropdown-trigger\" data-target=\"dropdown1\">Shop<i class=\"material-icons right\">arrow_drop_down</i></a></li>\n            <li><a class=\"dropdown-trigger\" data-target=\"dropdown2\">Order<i class=\"material-icons right\">arrow_drop_down</i></a></li>\n        </ul>\n        <ul class=\"right\">\n            <li routerLinkActive=\"active\"><a [routerLink]=\"['/cart']\"><i class=\"material-icons left\">shopping_cart</i><button class=\"btn-floating badge\">{{item}}</button></a></li>\n        </ul>\n        <ul class=\"right hide-on-med-and-down \">\n            <li><a data-target=\"modal1\" class=\"modal-trigger\"><i class=\"material-icons left\">search</i></a></li>\n        </ul>\n        <app-search [trigger]=\"false\"></app-search>\n\n        <ul id=\"slide-out\" class=\"sidenav\">\n            <li class=\"center\"><i class=\"material-icons black-text\">shopping_basket</i></li>\n            <li><a (click)=\"changeRoute('/')\"><i class=\"material-icons left\">home</i>Home</a></li>\n            <li><a (click)=\"changeRoute('/product')\"><i class=\"material-icons left\">pets</i>Product</a></li>\n            <li><a (click)=\"changeRoute('/search')\"><i class=\"material-icons left\">search</i>Search</a></li>\n            <li><a (click)=\"changeRoute('/orderstatus')\"><i class=\"material-icons left\">confirmation_number</i>Order Status</a></li>\n            <li><a (click)=\"changeRoute('/cart')\"><i class=\"material-icons left\">shopping_cart</i>Cart</a></li>  \n        </ul>\n    </div>\n</nav>\n      "

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_materialize_css__ = __webpack_require__("../../../../materialize-css/dist/js/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_materialize_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// declare var $:any;

var NavbarComponent = (function () {
    function NavbarComponent(cartService, r) {
        this.cartService = cartService;
        this.r = r;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.materalizeInit();
        this.cartService.get().subscribe(function (data) { return _this.item = data.getTotalItem(); });
    };
    NavbarComponent.prototype.changeRoute = function (name) {
        var instance = __WEBPACK_IMPORTED_MODULE_3_materialize_css__["Sidenav"].getInstance(this.elem);
        instance.close();
        this.r.navigateByUrl(name);
    };
    NavbarComponent.prototype.materalizeInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_materialize_css__["AutoInit"]();
        this.elem = document.querySelector('.sidenav');
        var instance = __WEBPACK_IMPORTED_MODULE_3_materialize_css__["Sidenav"].init(this.elem, {});
        document.addEventListener('DOMContentLoaded', function () {
            _this.dropdown = document.querySelectorAll('.dropdown-trigger');
            var instances = __WEBPACK_IMPORTED_MODULE_3_materialize_css__["Dropdown"].init(_this.dropdown, { coverTrigger: false, constrainWidth: false });
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("destoryed");
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\r\n.error-template {padding: 40px 15px;text-align: center;}\r\n.error-actions {margin-top:15px;margin-bottom:15px;}\r\n.error-actions .btn { margin-right:10px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\"> \n        <div class=\"col m12\">\n            <div class=\"error-template\">\n                <h1>\n                    Oops!</h1>\n                <h2>\n                    404 Not Found</h2>\n                <div class=\"error-details\">\n                    Sorry, an error has occured, Requested page not found!\n                </div>\n                <div class=\"error-actions\">\n                    <a [routerLink]=\"['/']\" class=\"btn btn-primary btn-lg\">\n                        Take Me Home </a><a [routerLink]=\"['/']\" class=\"btn btn-default btn-lg\">Contact Support </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    return NotfoundComponent;
}());
NotfoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notfound',
        template: __webpack_require__("../../../../../src/app/navbar/notfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/notfound.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotfoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-page/product-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainbody{\r\n    margin-top:30px;\r\n}\r\n\r\n.breadcrumb:before {\r\n    color: black;\r\n}\r\n.breadcrumb, .breadcrumb:last-child {\r\n   color:rgb(0, 0, 0);\r\n }\r\n\r\n .breadcrumbnav{\r\n     margin-bottom: 40px;\r\n }\r\n\r\n.nav-wrapper{\r\n    padding-left: 20px;\r\n}\r\n\r\n#mainpicture{\r\n    height:400px;\r\n    width: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-page/product-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container mainbody z-depth-5\">\n    <nav class=\"white hide-on-small-only breadcrumbnav\">\n        <div class=\"nav-wrapper\">\n            <div class=\"col s12\">\n                <a [routerLink]=\"['/']\" class=\"breadcrumb\">Home</a>\n                <a [routerLink]=\"['/product']\" class=\"breadcrumb\">Products</a>\n                <a  class=\"breadcrumb grey-text\">{{product?.name}}</a>\n            </div>\n        </div>\n    </nav>\n    \n    <div class=\"row\">\n        <div class=\"col s12 m5\">\n            <img src=\"{{product?.images}}\" class=\"responsive-img materialboxed\" id=\"mainpicture\">\n        </div>\n        <div class=\"col s12 m6\"  style=\"margin-bottom:200px\">\n            <h4>{{product?.name}}</h4>\n            <p class=\"price\">${{product?.price}}</p>\n            <p>{{product?.description}}</p>\n            <app-add-to-cart [product]= product></app-add-to-cart>            \n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/product-page/product-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductPageComponent = (function () {
    function ProductPageComponent(productService, activatedRoute, router) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.activatedRoute.params.subscribe(function (params) {
            _this.render(params['id']);
        });
    };
    ProductPageComponent.prototype.render = function (id) {
        var _this = this;
        $('.materialboxed').materialbox();
        this.pageId = id;
        this.productService.get(this.pageId).subscribe(function (data) { _this.product = data; }, function (error) { return _this.router.navigateByUrl('404'); });
    };
    return ProductPageComponent;
}());
ProductPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-product-page',
        template: __webpack_require__("../../../../../src/app/product-page/product-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-page/product-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__product_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__product_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProductPageComponent);

var _a, _b, _c;
//# sourceMappingURL=product-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    color:black\r\n}\r\n\r\n.product-image{\r\n    height: 180px;\r\n}\r\n\r\n.product-single{\r\n    height:315px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-preview.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/product',product._id]\">\n  <div class=\"col s6 m4 l2 hoverable product-single\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img src=\"{{product.images}}\" class=\"responsive-img product-image\">\n      </div>\n      <div class=\"card-content center-align\">\n        <p class=\"product-title\">{{product.name}}</p>\n        <p>${{product.price}}</p>\n      </div>\n      \n    </div>\n</div>\n</a>"

/***/ }),

/***/ "../../../../../src/app/product/product-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductPreviewComponent = (function () {
    function ProductPreviewComponent() {
    }
    ProductPreviewComponent.prototype.ngOnInit = function () {
    };
    return ProductPreviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__models_product_model__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__models_product_model__["a" /* Product */]) === "function" && _a || Object)
], ProductPreviewComponent.prototype, "product", void 0);
ProductPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-product-preview',
        template: __webpack_require__("../../../../../src/app/product/product-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product-preview.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductPreviewComponent);

var _a;
//# sourceMappingURL=product-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disabled {\r\n    pointer-events: none;\r\n}\r\nselect{\r\n    display: inline;\r\n}\r\n\r\n.options{\r\n    margin:20px 0px 10px 0px;\r\n    width:100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col s12 m4 l3 push-m8 push-l9 options right-align\">\n            <span>Sort by</span>\n            <select (change)=\"change($event.target.value)\">\n                <option value=\"name_asc\" >Name: Ascending</option>\n                <option value=\"name_desc\" >Name: Descending</option>\n                <option value=\"price_asc\">Price: Low to High </option>\n                <option value=\"price_desc\">Price: High to Low</option>\n            </select>\n        </div>\n    </div>\n\n    <div [hidden]=\"!rendering\" class=\"center-align\"> \n        <div class=\"preloader-wrapper big active\">\n            <div class=\"spinner-layer spinner-blue-only\">\n                <div class=\"circle-clipper left\">\n                <div class=\"circle\"></div>\n                </div><div class=\"gap-patch\">\n                <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                <div class=\"circle\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <app-product-preview *ngFor=\"let product of productarray\" [product]=product></app-product-preview>  \n    </div>\n    <ul class=\"pagination center-align\">\n        <li class=\"waves-effect\" [ngClass]=\"{'disabled': currentPage===1}\" (click)=gotoPage(currentPage-1)><a><i class=\"material-icons\">chevron_left</i></a></li>\n        <li class=\"waves-effect\" (click)=\"gotoPage(page)\" [ngClass]=\"{'active': page===currentPage}\" *ngFor=\"let page of totalPage\"><a>{{page}}</a></li>\n        <li class=\"waves-effect\" [ngClass]=\"{'disabled': currentPage===maxPage}\"><a (click)=gotoPage(currentPage+1)><i class=\"material-icons\">chevron_right</i></a></li>\n        \n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = (function () {
    function ProductComponent(router, activeRoute, productservice) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.productservice = productservice;
        this.rendering = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            var page = params['page'] ? params['page'] : 1;
            var sort = params['sort_by'] ? params['sort_by'] : '';
            _this.renderPage(page, sort);
        });
    };
    ProductComponent.prototype.gotoPage = function (page) {
        this.router.navigate(['/product'], { queryParams: { page: page }, queryParamsHandling: "merge" });
    };
    ProductComponent.prototype.change = function (value) {
        this.router.navigate(['/product'], { queryParams: { 'sort_by': value }, queryParamsHandling: "merge" });
    };
    ProductComponent.prototype.renderPage = function (page, sort) {
        var _this = this;
        this.rendering = true;
        window.scrollTo(0, 100);
        this.productservice.getProduct(page, sort)
            .subscribe(function (data) {
            _this.productarray = data.products;
            _this.totalPage = Array(data.totalPage).fill(1).map(function (x, i) { return i + 1; });
            _this.maxPage = _this.totalPage.length;
            _this.currentPage = data.currentPage;
            _this.rendering = false;
        }, function (error) { return console.log("ITS ERROR"); });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__product_service__["a" /* ProductService */]) === "function" && _c || Object])
], ProductComponent);

var _a, _b, _c;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_add_to_cart_component__ = __webpack_require__("../../../../../src/app/cart/add-to-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_preview_component__ = __webpack_require__("../../../../../src/app/product/product-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_page_product_page_component__ = __webpack_require__("../../../../../src/app/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var productRouting = [
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_3__product_component__["a" /* ProductComponent */] },
    { path: 'product/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__product_page_product_page_component__["a" /* ProductPageComponent */] },
];
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_4__product_page_product_page_component__["a" /* ProductPageComponent */],
            __WEBPACK_IMPORTED_MODULE_2__product_preview_component__["a" /* ProductPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_1__cart_add_to_cart_component__["a" /* AddToCartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forChild(productRouting)
        ],
        providers: []
    })
], ProductModule);

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProduct = function (page, sort) {
        return this.http.get("http://localhost:3000/product?page=" + page + "&&sort_by=" + sort)
            .map(function (res) { return res.json(); })
            .catch(this.error);
    };
    ProductService.prototype.search = function (keyword) {
        return this.http.get("http://localhost:3000/product/search?keyword=" + keyword)
            .map(function (res) { return res.json(); })
            .catch(this.error);
    };
    ProductService.prototype.get = function (id) {
        return this.http.get("http://localhost:3000/product/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.error);
    };
    ProductService.prototype.getRandom = function () {
        return this.http.get("http://localhost:3000/product/get/random")
            .map(function (res) { return res.json(); })
            .catch(this.error);
    };
    ProductService.prototype.error = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json());
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/search/search-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-search [trigger]=\"true\"></app-search>\n  <h4 [hidden]=\"keyword\">Search for products on our site</h4>\n  <div *ngIf=\"keyword\">\n    <h4 *ngIf=\"products.length==0\">Your search for \"{{keyword}}\" did not yield any results.</h4>\n    <h4 *ngIf=\"products.length>0\">{{products.length}} result for \"{{keyword}}\"</h4>\n\n    <app-search-result *ngFor=\"let product of products\" [product]=product></app-search-result>\n\n  </div>  \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search/search-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPageComponent = (function () {
    function SearchPageComponent(router, activeRoute, productservice) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.productservice = productservice;
        this.products = [];
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.keyword = params['keyword'] ? params['keyword'] : null;
            _this.search(_this.keyword);
        });
    };
    SearchPageComponent.prototype.search = function (keyword) {
        var _this = this;
        this.productservice.search(keyword).subscribe(function (data) { _this.products = data; }, function (error) { console.log(error); });
    };
    return SearchPageComponent;
}());
SearchPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-search-page',
        template: __webpack_require__("../../../../../src/app/search/search-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__product_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__product_product_service__["a" /* ProductService */]) === "function" && _c || Object])
], SearchPageComponent);

var _a, _b, _c;
//# sourceMappingURL=search-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row hoverable\">\n  <a [routerLink]=\"['/product', product['_id']]\">\n  <div class=\"image-wrapper col s2 m3\">\n    <a [routerLink]=\"['/product', product['_id']]\"><img src=\"{{product.images}}\" class=\"responsive-img\"></a>\n  </div>\n  <div class=\"col s7\">\n    <a [routerLink]=\"['/product', product['_id']]\"><span  class=\"product-title\" >{{product.name}}</span></a><br>\n    <span class=\"price\">${{product.price}}</span>\n    <p>{{product.description}}</p>\n  </div>\n</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_product_model__ = __webpack_require__("../../../../../src/app/models/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    return SearchResultComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__models_product_model__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__models_product_model__["a" /* Product */]) === "function" && _a || Object)
], SearchResultComponent.prototype, "product", void 0);
SearchResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-search-result',
        template: __webpack_require__("../../../../../src/app/search/search-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search-result.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchResultComponent);

var _a;
//# sourceMappingURL=search-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon{\r\n    position: absolute;\r\n    cursor:pointer;\r\n}\r\n\r\n  /* label color */\r\n  .input-field label {\r\n    color: #000;\r\n  }\r\n.input-field input[type=text]:focus + label {\r\n    color:black;\r\n  }\r\n\r\n.input-field input[type=text]:focus {\r\nborder-bottom: 1px solid #000;\r\nbox-shadow: 0 1px 0 0 #000;\r\n}\r\n\r\n.input-field input[type=text].valid {\r\nborder-bottom: 1px solid #000;\r\nbox-shadow: 0 1px 0 0 #000;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"input-field  white-text\">\n    <i class=\"black-text material-icons prefix\" (click)=\"check()\">search</i>\n    <input type=\"text\" placeholder=\"Search\" id=\"autocomplete-input\" class=\"autocomplete black-text\" >\n    <input type=\"submit\" style=\"display: none\" />    \n</div> -->\n<!-- \n<form #searchForm = \"ngForm\" (ngSubmit)=\"check(searchForm)\">\n  <div class=\"input-field  white-text\">\n      <i class=\"black-text material-icons prefix icon\" (click)=\"check(searchForm)\">search</i>\n      <input type=\"text\" placeholder=\"Search\" name=\"search\" class=\"autocomplete black-text\" ngModel>\n      \n  </div>\n</form> -->\n\n\n<form #searchForm = \"ngForm\"  class=\"col s12\" *ngIf=\"trigger\" (ngSubmit)=\"check(searchForm)\">\n  <div class=\"row\" style=\"margin-top:50px\">\n    <div class=\"input-field col s7\">\n      <i class=\"material-icons prefix responsive-img\">search</i>\n      <input id=\"icon_prefix1\" type=\"text\" name=\"search\" autocomplete=\"off\" class=\"validate black-text\"  ngModel>\n      <label for=\"icon_prefix1\">Item Name</label>\n    </div>  \n      \n      <div class=\"input-field col s5\">\n        <button class=\"btn\" type=\"submit\" >Submit\n            <i class=\"material-icons right\">send</i>\n        </button>\n    </div>  \n  </div>\n</form>\n\n<form #modalForm = \"ngForm\" (ngSubmit)=\"check(modalForm)\">\n<div id=\"modal1\" class=\"modal\">\n    <div class=\"modal-content\">\n      <h1 class=\"black-text\">Search for products</h1>\n      <nav class=\"white\">\n          <div class=\"nav-wrapper\">\n              <div class=\"input-field\">\n                <input id=\"search\" type=\"search\" name=\"search\" autocomplete=\"off\" required ngModel> \n                <label class=\"label-icon\" for=\"search\"><i class=\"material-icons black-text\">search</i></label>\n                <i class=\"material-icons\">close</i>\n              </div>   \n          </div>\n        </nav>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"modal-close waves-effect waves-green btn-flat\">Search</button>\n        <a class=\"modal-close waves-effect waves-green btn-flat\">Cancel</a>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(router) {
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.check = function (form) {
        this.router.navigate(['/search'], { queryParams: { keyword: form.value.search } });
        form.reset();
    };
    return SearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], SearchComponent.prototype, "trigger", void 0);
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_result_component__ = __webpack_require__("../../../../../src/app/search/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_page_component__ = __webpack_require__("../../../../../src/app/search/search-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var searchRouting = [
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__search_page_component__["a" /* SearchPageComponent */] },
];
var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        declarations: [
            // SearchComponent,
            __WEBPACK_IMPORTED_MODULE_3__search_page_component__["a" /* SearchPageComponent */],
            __WEBPACK_IMPORTED_MODULE_2__search_result_component__["a" /* SearchResultComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(searchRouting)
        ],
        providers: []
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cart_model__ = __webpack_require__("../../../../../src/app/models/cart.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CartService = (function () {
    function CartService(http, req) {
        this.http = http;
        this.req = req;
        this.cart = new __WEBPACK_IMPORTED_MODULE_1__models_cart_model__["a" /* Cart */]();
        this.currentCart = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.cart);
    }
    CartService.prototype.get = function () {
        if (this.req.getCart()) {
            this.cart = this.req.getCart();
            this.currentCart.next(this.cart);
        }
        // this.cart = Object.assign(this.cart,this.req.getCart());
        return this.currentCart.asObservable();
    };
    CartService.prototype.destroyCart = function () {
        this.cart = new __WEBPACK_IMPORTED_MODULE_1__models_cart_model__["a" /* Cart */]();
        this.req.saveCart(this.cart);
        this.currentCart.next(this.cart);
    };
    CartService.prototype.add = function (item, count) {
        var success = this.cart.add(item, count);
        this.req.saveCart(this.cart);
        this.currentCart.next(this.cart);
        return success;
    };
    CartService.prototype.remove = function (item) {
        this.cart.remove(item);
        this.req.saveCart(this.cart);
        this.currentCart.next(this.cart);
    };
    CartService.prototype.update = function (item, count) {
        this.cart.update(item, count);
        this.req.saveCart(this.cart);
        this.currentCart.next(this.cart);
    };
    CartService.prototype.isEmpty = function () {
        return this.cart.getTotalItem() == 0;
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__request_service__["a" /* RequestService */]) === "function" && _b || Object])
], CartService);

var _a, _b;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarService = (function () {
    function NavbarService() {
        this.visible = true;
    }
    NavbarService.prototype.hide = function () { this.visible = false; };
    NavbarService.prototype.show = function () { this.visible = true; };
    return NavbarService;
}());
NavbarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NavbarService);

//# sourceMappingURL=navbar.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_cart_item_model__ = __webpack_require__("../../../../../src/app/models/cart-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cart_model__ = __webpack_require__("../../../../../src/app/models/cart.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.setHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return headers;
    };
    //retrieve old Cart
    RequestService.prototype.getCart = function () {
        if (localStorage.getItem("cart") === null) {
            return null;
        }
        else {
            var oldItem_1 = [];
            var item = JSON.parse(localStorage.getItem('cart'));
            item.shoppingCart.forEach(function (element) {
                var cartitem = new __WEBPACK_IMPORTED_MODULE_0__models_cart_item_model__["a" /* CartItem */](element.product, element.count);
                oldItem_1.push(cartitem);
            });
            var cart = new __WEBPACK_IMPORTED_MODULE_1__models_cart_model__["a" /* Cart */]();
            cart.setCart(oldItem_1);
            return cart;
        }
    };
    RequestService.prototype.saveCart = function (cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    };
    RequestService.prototype.submitCart = function (cart) {
        return this.http.post("http://localhost:3000/cart/order", { cart: cart }, { headers: this.setHeader() })
            .map(function (res) { return res.json(); })
            .catch(this.error);
    };
    RequestService.prototype.getOrder = function (orderNumber) {
        return this.http.get("http://localhost:3000/cart/order?ordernumber=" + orderNumber)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(err); });
    };
    RequestService.prototype.error = function (error) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(new Error(error));
    };
    return RequestService;
}());
RequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RequestService);

var _a;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_footer_component__ = __webpack_require__("../../../../../src/app/navbar/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_notfound_component__ = __webpack_require__("../../../../../src/app/navbar/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_0__navbar_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navbar_notfound_component__["a" /* NotfoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_0__navbar_footer_component__["a" /* FooterComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/tracking/tracking-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tracking/tracking-result.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<tr>\n    <td>{{item.name}}</td>\n    <td>{{item.count}}</td>\n</tr>\n"

/***/ }),

/***/ "../../../../../src/app/tracking/tracking-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_cart_item_model__ = __webpack_require__("../../../../../src/app/models/cart-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackingResultComponent = (function () {
    function TrackingResultComponent() {
    }
    TrackingResultComponent.prototype.ngOnInit = function () {
    };
    return TrackingResultComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__models_cart_item_model__["a" /* CartItem */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__models_cart_item_model__["a" /* CartItem */]) === "function" && _a || Object)
], TrackingResultComponent.prototype, "item", void 0);
TrackingResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-tracking-result',
        template: __webpack_require__("../../../../../src/app/tracking/tracking-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tracking/tracking-result.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TrackingResultComponent);

var _a;
//# sourceMappingURL=tracking-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/tracking/tracking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tracking/tracking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"maincontainer\">\n  <div class=\"row\">\n    <h3>Enter your order number</h3>\n      <form #trackForm =\"ngForm\" (ngSubmit)=\"open(trackForm.value.orderNum)\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <i class=\"material-icons prefix\">confirmation_number</i>\n            <input id=\"icon_prefix\" type=\"number\" name=\"orderNum\" class=\"validate\" autocomplete=\"off\"  ngModel>\n            <label for=\"icon_prefix\">Order Number</label>\n            <button class=\"btn waves-effect right\" type=\"submit\">Submit\n                <i class=\"material-icons right\">send</i>\n              </button>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div *ngIf=\"result\">\n      <table class=\"striped highlight\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Quantity</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of cart.shoppingCart\">\n            <td><a [routerLink]=\"['/product',item._id]\">{{item.name}}</a></td>\n            <td>{{item.count}}</td>  \n          </tr>\n          </tbody>\n      </table>\n\n      <div class=\"row\">\n        <table class=\"col s6 m4 l4 right\">\n            <tbody>\n              <td class=\"flow-text\">Total Item:</td>\n              <td class=\"flow-text\">{{cart.totalItem}}</td>\n            </tbody>\n            <tbody>\n              <td class=\"flow-text\">Total Price:</td>\n              <td class=\"flow-text\">${{cart.totalPrice}}</td>\n            </tbody>\n          </table>\n      </div>\n    </div>\n    <div *ngIf=\"notfound\">\n        <h1>Status Not Available</h1>\n        <p>Order Number:{{ordernum}}</p>\n        <p>The order number may be incorrect or the status update is not yet available. Please verify your order number and try again later.</p>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/tracking/tracking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackingComponent = (function () {
    function TrackingComponent(reqestService, activeRoute, router) {
        this.reqestService = reqestService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.notfound = false;
        this.result = false;
    }
    TrackingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (param) {
            _this.ordernum = param["ordernum"] ? param["ordernum"] : null;
            if (_this.ordernum) {
                _this.open(_this.ordernum);
            }
        });
    };
    TrackingComponent.prototype.open = function (num) {
        var _this = this;
        this.router.navigate(['/orderstatus'], { queryParams: { ordernum: num } });
        this.reqestService.getOrder(num).subscribe(function (res) { _this.result = true, _this.notfound = false, _this.cart = res.data; }, function (error) { _this.notfound = true, _this.result = false; });
    };
    return TrackingComponent;
}());
TrackingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-tracking',
        template: __webpack_require__("../../../../../src/app/tracking/tracking.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tracking/tracking.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TrackingComponent);

var _a, _b, _c;
//# sourceMappingURL=tracking.component.js.map

/***/ }),

/***/ "../../../../../src/app/tracking/tracking.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tracking_component__ = __webpack_require__("../../../../../src/app/tracking/tracking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tracking_result_component__ = __webpack_require__("../../../../../src/app/tracking/tracking-result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var trackingRouting = [
    { path: 'orderstatus', component: __WEBPACK_IMPORTED_MODULE_1__tracking_component__["a" /* TrackingComponent */] }
];
var TrackingModule = (function () {
    function TrackingModule() {
    }
    return TrackingModule;
}());
TrackingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__tracking_component__["a" /* TrackingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__tracking_result_component__["a" /* TrackingResultComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(trackingRouting)
        ],
        providers: []
    })
], TrackingModule);

//# sourceMappingURL=tracking.module.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



// if (environment.production) {
//   enableProdMode();
// }
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map