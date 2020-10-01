! function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(i, a, function (t) {
                return e[t]
            }.bind(null, a));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function (e, t, n) {}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var i = function () {
            function e() {
                this.store = [], this.renderpage = 0, this.showAll = !0
            }
            return e.prototype.saveToStore = function (e) {
                this.store.push(e)
            }, e.prototype.sortByHighestPrice = function () {
                this.store.sort((function (e, t) {
                    return e.price - t.price
                }))
            }, e.prototype.sortByLowestPrice = function () {
                this.store.sort((function (e, t) {
                    return t.price - e.price
                }))
            }, e.prototype.renderNewPage = function (e) {
                return this.renderpage = e
            }, e
        }(),
        a = function (e, t, n, i, a, r, s, c) {
            this.id = e, this.company = t, this.brand = n, this.price = i, this.description = a, this.characters = r, this.quantity = s, this.inStore = s, this.inCart = 0, this.img = c, this.show = !1, this.addToCart = !1, this.changeQuantity = !1
        },
        r = {
            smallcartStatus: !1,
            maincartStatus: !1,
            totalSum: 0
        },
        s = function () {
            return Number(new Array(4).fill(null).map((function (e) {
                return Math.floor(10 * Math.random())
            })).join(""))
        },
        c = [new a(s(), "Blueprint", "Bokkisa", 25.3, "This super fun coffee reminds us of watermelon candy, with a funky-sweet lemonade acidity that really makes it pop.", ["light", "more than $22", "south america", "brazil"], 6, "./assets/images/blueprint_coffee.jpeg"), new a(s(), "Panther", "Gorilla Summit", 21.2, "This natural process coffee produced by Gerald Mbabazi in Southwestern Uganda is a treat, with funky notes of grilled pineapple and berries, plus a creamy body that reminds us of pistachio ice cream.", ["light", "$18-$22", "Africa"], 5, "./assets/images/panther_coffee.jpeg"), new a(s(), "Revelator", "Petunias", 17.35, "With notes of cherry and chocolate, this coffee is harmony in a cup. We have yet to find anyone who questions its sweet, velvety deliciousness", ["light-medium", "$15-$18", "columbia", "south america"], 3, "./assets/images/revelator_coffee.jpeg"), new a(s(), "Bird Rock", "Bird Rock Blend", 18.85, "Full bodied, chocolaty, and roasty-toasty; this bold, dark coffee boasts interesting peppery notes that spice up a very comforting cup.", ["medium", "$18-$22", "columbia", "south america"], 2, "./assets/images/bird-rock.jpeg"), new a(s(), "Pt's", "Flatlander Signature Blend", 17.35, "Easy does it. And this coffee proves just that. A bittersweet aroma is balanced by a nutty, sweet finish. Here’s to one less complication.", ["dark", "costa rica", "south america", "$15-$18"], 1, "./assets/images/pts.jpeg"), new a(s(), "Irving Farm", "Gotham Blend", 17.35, "Extra dark, rich, and full of chocolatey indulgence. It may not be the coffee we deserve, but it's definitely the coffee we need right now.", ["dark", "$15-$18", "asia"], 5, "./assets/images/irving-farm.jpeg"), new a(s(), "Klatch", "Old World Vienna", 17.35, "Rich, robust, and nostalgic: this full-bodied cup's hints of spice and dark chocolate invoke an old-world romance.", ["medium-dark", "$15-$18", "central america"], 4, "./assets/images/klatch.jpeg"), new a(s(), "Stay Golden", "Benti Nenka", 29.45, "Delicate notes of peach, a gentle key lime acidity. and a cotton candy sweetness all add up to a coffee that can best be described as: ridiculously pretty.", ["medium-dark", "more than $22", "north america"], 2, "./assets/images/stay_golden.jpeg"), new a(s(), "Oren's", "Two Bridges", 17.35, "Sweet balance found in soft citrus acidity and toffee sweetness. So smooth and poetic, we had to write a haiku.", ["light", "$15-$18", "south america", "Ecuador"], 1, "./assets/images/orens.jpeg"), new a(s(), "Sparrows", "All Seasons Blend", 17.35, "Living up to its name, this clean, sweet cup is perfect all year round - featuring notes of sweet cherry and smooth chocolate.", ["dark", "$15-$18", "south america"], 10, "./assets/images/sparrow-coffee.jpeg"), new a(s(), "Metric", "Peru Dionisio Pintado", 20, "Soft and smooth, with notes of sweet vanilla and caramel plus the tiniest pinch of grapefruit zest.", ["dark", "$18-$22", "asia"], 4, "./assets/images/metric.jpeg"), new a(s(), "Broadsheet", "Laayyoo", 25.9, "Traditional notes of blueberry mingle with a watermelon sweetness and green apple acidity. So fresh and so clean, this one puts a big ol' smile on our faces.", ["light", "south america", "columbia", "more than $22"], 2, "./assets/images/broadsheet.jpeg"), new a(s(), "Greater Goods", "Rise and Shine", 17.35, "Dark and bold and super sweet, with noticeable notes of dark chocolate. This is the kind of cup that starts off a very good day.", ["medium-dark", "$15-$18", "central america"], 10, "./assets/images/coffee-co.jpeg"), new a(s(), "Equator", "Peru Cajamarca Fair Trade Organic", 20, "This big-bodied Peruvian cup boasts a buttery mouthfeel, notes of dried cherry, and a milk chocolaty sweetness.", ["$18-$22", "central america", "medium"], 12, "./assets/images/equator-coffees.jpeg"), new a(s(), "Red Rooster", "Farmhouse Breakfast Blend", 14, "Caramel sweetness stars in this tremendously drinkable blend, brightened by a meyer lemon acidity and a nutty-sweet finish.", ["less than $15", "africa", "dark"], 10, "./assets/images/Floyd-Farmhouse.jpeg"), new a(s(), "Red Rooster", "Waxwing", 13, "Earthy depth meets a juicy berry sweetness in a rich, chocolaty body - this blend is ready to be the wind beneath your wings.", ["ecuador", "less than $15", "south america", "medium"], 5, "./assets/images/red-rooster.jpeg"), new a(s(), "Red Rooster", "Funky Chicken", 12, "Don't be surprised if you flap your arms and your feet start kickin' - this balanced blend brings together an earthy sweetness with a bright plum acidity.", ["less than $15", "asia", "dark"], 4, "./assets/images/red-rooster-funky-chicken.jpeg")],
        o = new i;
    c.forEach((function (e) {
        o.saveToStore(e)
    }));
    var l = function () {
            0 === o.renderpage && o.renderNewPage(1);
            var e, t, n = o.store.filter((function (e) {
                if (e.show) return e
            }));
            0 == n.length ? (t = o.store, e = new Array(Math.ceil(o.store.length / 6)).fill(null).map((function (e, t) {
                return t + 1
            }))) : (t = n, e = new Array(Math.ceil(n.length / 6)).fill(null).map((function (e, t) {
                return t + 1
            })));
            var i = e.map((function (e) {
                return "<div class='page p-" + e + "'>" + e + "</div>"
            })).join("");
            (function (e) {
                return document.querySelector(e)
            }(".section-assortment__pages-counter")).innerHTML = i;
            var a = 6 * o.renderpage - 1,
                r = a - 5;
            return a > o.store.length && (r = o.store.length - (a - o.store.length) + 1, a = o.store.length - 1), r < 0 && (r = 0), t.map((function (e, t) {
                if (t >= r && t <= a && (e.show || o.showAll)) return "\n        <div class='section-assortment__goods-card card-" + t + "'>\n        <div class='card-img'>\n        <img src='" + e.img + "' alt='" + e.company + " " + e.brand + "'>\n        </div>\n        <div class='card-companyname'>\n        <p>" + e.company + "</p>\n        </div>\n        <div class='card-productbrand'>\n        <p>" + e.brand + "</p>\n        </div>\n        <div class='card-description'>" + e.description + "</div>\n        <div class='card-price'>The Price is: $" + e.price + "</div>\n        <div class='card-quantityInStore'>Available in store: " + e.inStore + "</div>\n        <input type='button' value=\"" + (0 != e.inStore ? "ADD TO CART" : "SOLD OUT!") + "\" class='card-button " + e.id + "' " + (0 != e.inStore ? "" : "disabled") + ">\n        </div>\n        "
            })).join("")
        },
        d = function () {
            function e(e, t, n, i) {
                this.filterName = e, this.filterClassName = t, this.filterStatus = n, this.innerFilter = []
            }
            return e.prototype.createInnerFilter = function (e) {
                this.innerFilter.push(e)
            }, e
        }(),
        u = function (e, t, n) {
            this.innerFilterName = e, this.innerFilterId = t, this.innerFilterStatus = n
        },
        f = new d("Roast Level", "roast-level", !1, !1),
        h = new d("Price", "price-level", !1, !1),
        m = new d("Region", "region-level", !1, !1),
        v = new d("Country", "country-level", !1, !1),
        g = [new u("Light", "light", !1), new u("Light-Medium", "light-medium", !1), new u("Medium", "medium", !1), new u("Medium-Dark", "medium-dark", !1), new u("Dark", "dark", !1)],
        p = [new u("Less than $15", "less-than-$15", !1), new u("$15-$18", "$15-$18", !1), new u("$18-$22", "$18-$22", !1), new u("More than $22", "more-than-$22", !1)],
        w = [new u("Africa", "africa", !1), new u("Asia", "asia", !1), new u("Central America", "central-america", !1), new u("North America", "north-america", !1), new u("South America", "south-america", !1)],
        b = [new u("Brazil", "brazil", !1), new u("Columbia", "columbia", !1), new u("Costa Rica", "costa-rica", !1), new u("Ecuador", "ecuador", !1)];
    g.map((function (e) {
        f.createInnerFilter(e)
    })), p.map((function (e) {
        h.createInnerFilter(e)
    })), w.map((function (e) {
        m.createInnerFilter(e)
    })), b.map((function (e) {
        v.createInnerFilter(e)
    }));
    var y = [f, h, v, m],
        _ = function () {
            return "\n<ul>\n<li class='filter__roast-level roast-level " + (f.filterStatus ? "clicked" : "") + "'>\n    <div class='filter-header '>\n        <div class='roast-level " + (f.filterStatus ? "clicked" : "") + "'>Roast Level</div>\n        <div class='roast-level filter-close " + (f.filterStatus ? "clicked" : "") + "'></div>\n    </div>\n    <ul>\n    " + f.innerFilter.map((function (e) {
                return '<li><input type="checkbox" name="' + e.innerFilterId + '" id="' + e.innerFilterId + "\" value='" + e.innerFilterName + "' class='custom-checkbox " + (e.innerFilterStatus ? "checked" : "") + "'>\n        <label for=\"" + e.innerFilterId + '">' + e.innerFilterName + "</label></li>"
            })).join("") + "\n    </ul>\n</li>\n<li class='filter__price-level price-level " + (h.filterStatus ? "clicked" : "") + "'>\n    <div class='filter-header'>\n        <div class='price-level " + (h.filterStatus ? "clicked" : "") + "'>Price</div>\n        <div class='price-level filter-close " + (h.filterStatus ? "clicked" : "") + "'></div>\n    </div>\n    <ul>\n    " + h.innerFilter.map((function (e) {
                return '<li><input type="checkbox" name="' + e.innerFilterId + '" id="' + e.innerFilterId + "\" value='" + e.innerFilterName + "' class='custom-checkbox " + (e.innerFilterStatus ? "checked" : "") + "'>\n          <label for=\"" + e.innerFilterId + '">' + e.innerFilterName + "</label></li>"
            })).join("") + "\n    </ul>\n</li>\n<li class='filter__region-level region-level " + (m.filterStatus ? "clicked" : "") + "'>\n    <div class='filter-header'>\n        <div class='region-level " + (m.filterStatus ? "clicked" : "") + "'>Region</div>\n        <div class='region-level filter-close " + (m.filterStatus ? "clicked" : "") + "'></div>\n    </div>\n    <ul>\n    " + m.innerFilter.map((function (e) {
                return '<li><input type="checkbox" name="' + e.innerFilterId + '" id="' + e.innerFilterId + "\" value='" + e.innerFilterName + "' class='custom-checkbox " + (e.innerFilterStatus ? "checked" : "") + "'>\n          <label for=\"" + e.innerFilterId + '">' + e.innerFilterName + "</label></li>"
            })).join("") + "\n    </ul>\n</li>\n<li class='filter__country-level country-level " + (v.filterStatus ? "clicked" : "") + "'>\n    <div class='filter-header '>\n        <div class='country-level " + (v.filterStatus ? "clicked" : "") + "'>Country</div>\n        <div class='country-level filter-close " + (v.filterStatus ? "clicked" : "") + "'></div>\n    </div>\n    <ul>\n    " + v.innerFilter.map((function (e) {
                return '<li><input type="checkbox" name="' + e.innerFilterId + '" id="' + e.innerFilterId + "\" value='" + e.innerFilterName + "' class='custom-checkbox " + (e.innerFilterStatus ? "checked" : "") + "'>\n          <label for=\"" + e.innerFilterId + '">' + e.innerFilterName + "</label></li>"
            })).join("") + "\n    </ul>\n</li>\n</ul>"
        },
        S = function () {
            var e = Math.floor(Math.random() * o.store.length - 1); - 1 == e && (e = 0);
            var t = o.store.find((function (t, n) {
                if (n == e) return t
            }));
            return "\n    <div class='section-card__bestsell-img'>\n                    <img src=" + t.img + ' alt="' + t.company + " " + t.brand + "\">\n                </div>\n                <div class='section-card__bestsell-info'>\n                    <div class='bestsell-info__heading'>\n                        <h3>" + t.company + "</h3>\n                        <p>" + t.brand + "</p>\n                    </div>\n                    <div class='bestsell-info___piece'>\n                        <div class='bestsell-info___piece-priceinfo'>\n                            <div>$" + t.price.toFixed(2) + '</div>\n                            <div>\n                                <p><a href="">Shipping</a> calculated at checkout.</p>\n                            </div>\n                        </div>\n                        <div class=\'bestsell-info___piece-rating\'>\n                            <div class=\'piece-rating__elem-1\'>\n                                <svg id="Capa_1" enable-background="new 0 0 512.07 512.07" height="512"\n                                    viewBox="0 0 512.07 512.07" width="512" xmlns="http://www.w3.org/2000/svg"\n                                    class=\'piece-rating__elem\'>\n                                    <g>\n                                        <path\n                                            d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298zm-33.935 26.07-120.959 88.332 45.825 142.946c3.085 9.621-3.435 15.247-5.506 16.742s-9.465 5.91-17.625-.05l-120.901-88.289-122.206 88.333c-8.201 5.927-15.576 1.461-17.642-.05-2.065-1.511-8.558-7.187-5.392-16.8l47.033-142.833-122.145-88.287c-8.206-5.932-6.272-14.34-5.484-16.775s4.146-10.382 14.271-10.382h150.87l45.79-142.835c3.087-9.629 11.668-10.41 14.225-10.421h.052c2.62 0 11.113.769 14.255 10.309l47.07 142.947h149.624c10.1 0 13.469 7.92 14.261 10.348s2.74 10.81-5.416 16.765z" />\n                                    </g>\n                                </svg>\n                                <svg id="Capa_1" enable-background="new 0 0 512.07 512.07" height="512"\n                                    viewBox="0 0 512.07 512.07" width="512" xmlns="http://www.w3.org/2000/svg"\n                                    class=\'piece-rating__elem\'>\n                                    <g>\n                                        <path\n                                            d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298z" />\n                                    </g>\n                                </svg>\n                            </div>\n                            <div class=\'piece-rating__elem-2\'>\n                                <svg id="Capa_1" enable-background="new 0 0 512.07 512.07" height="512"\n                                    viewBox="0 0 512.07 512.07" width="512" xmlns="http://www.w3.org/2000/svg"\n                                    class=\'piece-rating__elem\'>\n                                    <g>\n                                        <path\n                                            d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298zm-33.935 26.07-120.959 88.332 45.825 142.946c3.085 9.621-3.435 15.247-5.506 16.742s-9.465 5.91-17.625-.05l-120.901-88.289-122.206 88.333c-8.201 5.927-15.576 1.461-17.642-.05-2.065-1.511-8.558-7.187-5.392-16.8l47.033-142.833-122.145-88.287c-8.206-5.932-6.272-14.34-5.484-16.775s4.146-10.382 14.271-10.382h150.87l45.79-142.835c3.087-9.629 11.668-10.41 14.225-10.421h.052c2.62 0 11.113.769 14.255 10.309l47.07 142.947h149.624c10.1 0 13.469 7.92 14.261 10.348s2.74 10.81-5.416 16.765z" />\n                                    </g>\n                                </svg>\n                                <svg id="Capa_1" enable-background="new 0 0 512.07 512.07" height="512"\n                                    viewBox="0 0 512.07 512.07" width="512" xmlns="http://www.w3.org/2000/svg"\n                                    class=\'piece-rating__elem\'>\n                                    <g>\n                                        <path\n                                            d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298z" />\n                                    </g>\n                                </svg>\n                            </div>\n                            <div class=\'piece-rating__elem-3\'>\n                                <svg id="Capa_1" enable-background="new 0 0 512.07 512.07" height="512"\n                                    viewBox="0 0 512.07 512.07" width="512" xmlns="http://www.w3.org/2000/svg"\n                                    class=\'piece-rating__elem\'>\n                                    <g>\n                                        <path\n                                            d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298zm-33.935 26.07-120.959 88.332 45.825 142.946c3.085 9.621-3.435 15.247-5.506 16.742s-9.465 5.91-17.625-.05l-120.901-88.289-122.206 88.333c-8.201 5.927-15.576 1.461-17.642-.05-2.065-1.511-8.558-7.187-5.392-16.8l47.033-142.833-122.145-88.287c-8.206-5.932-6.272-14.34-5.484-16.775s4.146-10.382 14.271-10.382h150.87l45.79-142.835c3.087-9.629 11.668-10.41 14.225-10.421h.052c2.62 0 11.113.769 14.255 10.309l47.07 142.947h149.624c10.1 0 13.469 7.92 14.261 10.348s2.74 10.81-5.416 16.765z" />\n                                    </g>\n                                </svg>\n                                <svg id="Capa_1" enable-background="new 0 0 512.07 512.07" height="512"\n                                    viewBox="0 0 512.07 512.07" width="512" xmlns="http://www.w3.org/2000/svg"\n                                    class=\'piece-rating__elem\'>\n                                    <g>\n                                        <path\n                                            d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298z" />\n                                    </g>\n                                </svg>\n                            </div>\n                            <div class=\'piece-rating__elem-4\'>\n                                <svg id="Capa_1" enable-background="new 0 0 512.07 512.07" height="512"\n                                    viewBox="0 0 512.07 512.07" width="512" xmlns="http://www.w3.org/2000/svg"\n                                    class=\'piece-rating__elem\'>\n                                    <g>\n                                        <path\n                                            d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298zm-33.935 26.07-120.959 88.332 45.825 142.946c3.085 9.621-3.435 15.247-5.506 16.742s-9.465 5.91-17.625-.05l-120.901-88.289-122.206 88.333c-8.201 5.927-15.576 1.461-17.642-.05-2.065-1.511-8.558-7.187-5.392-16.8l47.033-142.833-122.145-88.287c-8.206-5.932-6.272-14.34-5.484-16.775s4.146-10.382 14.271-10.382h150.87l45.79-142.835c3.087-9.629 11.668-10.41 14.225-10.421h.052c2.62 0 11.113.769 14.255 10.309l47.07 142.947h149.624c10.1 0 13.469 7.92 14.261 10.348s2.74 10.81-5.416 16.765z" />\n                                    </g>\n                                </svg>\n                                <svg id="Capa_1" enable-background="new 0 0 512.07 512.07" height="512"\n                                    viewBox="0 0 512.07 512.07" width="512" xmlns="http://www.w3.org/2000/svg"\n                                    class=\'piece-rating__elem\'>\n                                    <g>\n                                        <path\n                                            d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298z" />\n                                    </g>\n                                </svg>\n                            </div>\n\n                        </div>\n                        <div class=\'bestsell-info___piece-description\'>\n                            ' + t.description + '\n                        </div>\n                        <div class=\'bestsell-info___piece-choose\'>\n                        <div id="pieceType">\n                        <input type="radio" name="bean or ground"id="whole">    \n                        <label for="whole">Whole Bean</label>\n                         <input type=\'radio\' name="bean or ground" id="ground">\n                         <label for="ground">Ground</label> \n                        </div>\n                        </div>\n                        <div class=\'bestsell-info___piece-btn\'>\n                            <input type="button" value="ADD TO CART" class=\'card-button ' + t.id + "' >\n                        </div>\n                    </div>\n                </div>\n    "
        },
        k = function () {
            var e = function (e) {
                    return document.querySelector(e)
                },
                t = o.store.filter((function (e) {
                    if (e.addToCart) return e
                })),
                n = t.find((function (e, n) {
                    if (n == t.length - 1) return e
                }));
            return 0 != t.length ? (e(".cart-icon-total-quantity").innerHTML = t.length, e(".cart-icon-total-quantity").classList.add("show")) : (e(".cart-icon-total-quantity").classList.remove("show"), e(".cart-icon-total-quantity").innerHTML = ""), "\n        <div class='cart-small " + (r.smallcartStatus ? "active" : "") + "'>\n        <div class='cart-small__header'>\n            <div>Just added to your cart</div>\n            <div class=\"cart-small__header-close\">X</div>\n        </div>\n        <div class='cart-small__product'>\n        <div class='cart-small__product-info'>\n        " + (0 == t.length ? "<div class='empty-cart'>Your cart is currently empty</div>" : "<div class='product-image'><img src='" + n.img + "'></div>\n        <div class='product-quantity'>Qty:" + (n.inStore + 1 - n.inStore) + "</div>\n        <div class='product-price'>" + n.price + "</div>       \n        </div>") + '\n        </div>\n        <div class=\'cart-small__button-view-cart\'>\n            <input type="button" value="View Cart' + (0 != t.length ? "(" + t.length + ")" : "") + "\" class='view-cart'>\n        </div>\n        <div class='cart-small__button-continue-shopping'>\n            <div class='continue-shopping'>Continue shoping</div>\n        </div>\n        </div>\n        </div>\n        <div class='cart-wrapper " + (r.maincartStatus ? "active" : "") + "'>\n        <div class='cart-main " + (r.maincartStatus ? "active" : "") + "'>\n        <div class='cart-main__info'>\n        <div><div>Your cart</div>\n        <div>Continue shoping</div> \n        </div>\n        <div class='cart-main__close'><div class='cart-main__close-btn'>X</div></div>\n        </div>\n        <div class=\"cart-main__products\">\n        " + (0 == t.length ? "<div class='empty-cart'>Your cart is currently empty</div>" : "<table>\n        <tr>\n            <th>Product</th>\n            <th>Brand</th>\n            <th>Price</th>\n            <th>Quantity</th>\n            <th>Total</th>\n            </tr>\n        " + t.map((function (e) {
                return "\n            <tr>\n            <td class='cart-main__products-img'><img src='" + e.img + "'></td>\n            <td>\n            <div>" + e.brand + "</div>\n            <div class='remove-product " + e.id + "'>Remove</div>\n            </td>\n            <td><div>" + e.price + "</div></td>\n            <td><input class='change-product-quantity " + e.id + "' type='number' step=\"1\" min='0' max='" + e.quantity + "'value='" + (e.changeQuantity ? "" + e.inCart : "" + (e.quantity - e.inStore)) + "'></td>\n            <td>$" + (e.changeQuantity ? "" + (e.price * e.inCart).toFixed(2) : "" + (e.price * (e.quantity - e.inStore)).toFixed(2)) + "</td>\n            </tr>\n            "
            })).join("") + "\n        </table>\n        ") + "\n        </div>\n        <div class='cart-main__subtotal'><div class=\"total-sum\">Subtotal $" + r.totalSum.toFixed(2) + "</div></div>\n        </div>\n        </div>\n        </div>\n        "
        };
    k();
    var L = k,
        F = function () {
            var e = function (e) {
                return document.querySelector(e)
            };
            e(".section-card__bestsell").innerHTML = "" + S(), e(".section-assortment__filter").innerHTML = "\n    " + _() + "\n    ", e(".section-assortment__goods").innerHTML = "\n    " + l() + "\n    ", e(".cart").innerHTML = "\n    " + L()
        };
    F();
    var C = F;
    ! function () {
        var e = function (e) {
                return document.querySelector(e)
            },
            t = function (e) {
                return document.querySelectorAll(e)
            };

        function n(e) {
            o.renderpage = Number(e.target.innerText), C()
        }

        function i(e) {
            var n = Object.values(t(".page")).length;
            e.target.classList.contains("back") && (o.renderpage -= 1, o.renderpage < 0 && (o.renderpage = 1)), e.target.classList.contains("forward") && (o.renderpage += 1, o.renderpage > n && (o.renderpage = 3)), C()
        }

        function a(t) {
            if ("LABEL" == t.target.nodeName) return !1;
            if (t.target.classList.contains("custom-checkbox")) {
                var n = y.find((function (e) {
                    return e.innerFilter.find((function (e) {
                        if (t.target.value.toLowerCase() == e.innerFilterName.toLowerCase()) return e
                    }))
                })).innerFilter.find((function (e) {
                    if (t.target.value.toLowerCase() == e.innerFilterName.toLowerCase()) return e
                }));
                if (n.innerFilterStatus) {
                    n.innerFilterStatus = !1;
                    var i = y.map((function (e) {
                        return e.innerFilter.filter((function (e) {
                            if (e.innerFilterStatus) return e
                        }))
                    })).filter((function (e) {
                        if (0 != e.length) return e
                    }));
                    if (0 == i.length) o.showAll = !0, o.store.map((function (e) {
                        e.show = !1
                    }));
                    else o.store.map((function (e) {
                        e.show = !1
                    })), o.store.map((function (e) {
                        return i.map((function (t) {
                            return t.map((function (t) {
                                if (e.characters.includes(t.innerFilterName.toLowerCase())) return e
                            })).find((function (e) {
                                if ("undefined" != e) return e
                            }))
                        })).filter((function (e) {
                            if ("undefined" != e) return e
                        }))
                    })).filter((function (e) {
                        if (e.length == i.length) return e
                    })).map((function (e) {
                        e.map((function (e) {
                            e.show = !0
                        }))
                    }));
                    0 == o.store.filter((function (e) {
                        if (e.show) return e
                    })).length && 0 == i.length && (o.showAll = !0)
                } else {
                    n.innerFilterStatus = !0, o.showAll = !1;
                    var a = y.map((function (e) {
                        return e.innerFilter.filter((function (e) {
                            if (e.innerFilterStatus) return e
                        }))
                    })).filter((function (e) {
                        if (0 != e.length) return e
                    }));
                    if (1 == a.length) o.store.map((function (e) {
                        e.characters.map((function (t) {
                            if (t.toLowerCase() == n.innerFilterName.toLowerCase()) return e.show = !0
                        }))
                    }));
                    else o.store.map((function (e) {
                        e.show = !1
                    })), o.store.map((function (e) {
                        return a.map((function (t) {
                            return t.map((function (t) {
                                if (e.characters.includes(t.innerFilterName.toLowerCase())) return e
                            })).find((function (e) {
                                if ("undefined" != e) return e
                            }))
                        })).filter((function (e) {
                            if ("undefined" != e) return e
                        }))
                    })).filter((function (e) {
                        if (e.length > 1 && e.length == a.length) return e
                    })).map((function (e) {
                        e.map((function (e) {
                            e.show = !0
                        }))
                    }))
                }
                var r = o.store.filter((function (e) {
                    if (e.show) return e
                }));
                e(".selected-quantity").innerHTML = "" + r.length, o.showAll && (e(".selected-quantity").innerHTML = "" + o.store.length)
            } else {
                var s = y.find((function (e) {
                    return Object.values(t.target.classList).find((function (t) {
                        if (t == e.filterClassName) return e
                    }))
                }));
                s.filterStatus ? s.filterStatus = !1 : s.filterStatus = !0
            }
            C()
        }
        e(".selected-quantity").innerHTML = "" + o.store.length, e(".selected-quantity").innerHTML = "" + o.store.length, e(".section-assortment__navigation-section-1-clear").addEventListener("click", (function () {
            o.showAll = !0, o.store.map((function (e) {
                e.show = !1
            })), y.map((function (e) {
                e.filterStatus = !1, e.innerFilter.map((function (e) {
                    e.innerFilterStatus = !1
                }))
            })), e(".selected-quantity").innerHTML = "" + o.store.length, C()
        })), e("#sort-assortment").addEventListener("change", (function (t) {
            "highest price" === t.target.value.toLowerCase() ? o.sortByLowestPrice() : "lowest price" === t.target.value.toLowerCase() && o.sortByHighestPrice();
            e(".selected-quantity").innerHTML = "" + o.store.length, C()
        })), Object.values(t(".section-assortment__pages-counter")).forEach((function (e) {
            e.addEventListener("click", n)
        })), Object.values(t(".arrow")).forEach((function (e) {
            e.addEventListener("click", i)
        })), Object.values(t(".section-assortment__filter")).forEach((function (e) {
            e.addEventListener("click", a)
        }))
    }();
    ! function () {
        var e = function (e) {
            return document.querySelectorAll(e)
        };

        function t(e) {
            if (e.target.classList.contains("card-button")) {
                var t = Object.values(e.target.classList).find((function (e) {
                        return Number(e)
                    })),
                    n = o.store.find((function (e) {
                        if (e.id == t) return e
                    }));
                n.addToCart = !0, r.maincartStatus || (r.smallcartStatus = !0), 0 != n.inStore && (n.inStore -= 1, n.inCart += 1);
                var i = o.store.filter((function (e) {
                    if (e.addToCart) return e
                })).map((function (e) {
                    return e.price * e.inCart
                })).reduce((function (e, t) {
                    return e + t
                }));
                r.totalSum = i, C()
            }
        }
        Object.values(e(".section-assortment__goods")).forEach((function (e) {
            e.addEventListener("click", t)
        })), Object.values(e(".section-card__bestsell")).forEach((function (e) {
            e.addEventListener("click", t)
        }))
    }();
    var j = function () {
        var e = function (e) {
            return document.querySelector(e)
        };

        function t(e) {
            if (e.target.classList.contains("cart-wrapper")) return e.preventDefault(), !1;
            var t = Object.values(e.target.classList).find((function (e) {
                if (Number(e)) return e
            }));
            if ("cart-small__header-close" == e.target.className && r.smallcartStatus && (r.smallcartStatus = !1), (e.target.classList.contains("show-main-cart") || "path" == e.target.tagName) && (r.smallcartStatus && (r.smallcartStatus = !1), r.maincartStatus ? r.maincartStatus = !1 : r.maincartStatus = !0), "view-cart" == e.target.className && (r.smallcartStatus ? r.smallcartStatus = !1 : r.maincartStatus = !0, r.maincartStatus || (r.maincartStatus = !0)), "cart-main__close-btn" == e.target.className && (r.maincartStatus = !1), e.target.classList.contains("remove-product")) {
                console.log("remove product");
                var n = o.store.find((function (e) {
                    if (e.id == t) return e
                }));
                n.addToCart = !1, n.inCart = 0, n.inStore = n.quantity, 0 == o.store.filter((function (e) {
                    if (e.addToCart) return e
                })).length && (r.totalSum = 0)
            }
            if (e.target.classList.contains("change-product-quantity")) {
                var i = o.store.find((function (e) {
                    if (e.id == t) return e
                }));
                i.changeQuantity = !0, i.inCart = Number(e.target.value), i.inStore = i.quantity - i.inCart;
                var a = o.store.filter((function (e) {
                    if (e.addToCart) return e
                })).map((function (e) {
                    return e.price * e.inCart
                })).reduce((function (e, t) {
                    return e + t
                }));
                r.totalSum = a, C()
            } else C()
        }
        e(".cart").addEventListener("click", t), e(".header-navigation__icons-cart").addEventListener("click", t)
    };
    j();
    var $ = function () {
        var e = function (e) {
            return document.querySelector(e)
        };
        e(".header-navigation__menu").addEventListener("click", (function (t) {
            "Coffee" == t.target.textContent && e(".section-assortment__info").scrollIntoView({
                block: "start",
                behavior: "smooth"
            })
        })), e(".header-navigation__menu-button").addEventListener("click", (function (t) {
            e(".header-navigation__menu-button").classList.contains("active") ? e(".header-navigation__menu-button").classList.remove("active") : e(".header-navigation__menu-button").classList.add("active")
        })), e(".header-button-close").addEventListener("click", (function () {
            e(".header-navigation__menu-button").classList.contains("active") && e(".header-navigation__menu-button").classList.remove("active")
        })), window.addEventListener("scroll", (function (t) {
            pageYOffset > 100 ? e(".header-navigation").classList.add("active") : (e(".header-navigation").classList.remove("active"), e(".header-navigation__menu-button").classList.remove("active"))
        }))
    };
    $()
}]);