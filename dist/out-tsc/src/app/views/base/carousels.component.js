"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carousel_1 = require("ngx-bootstrap/carousel");
var CarouselsComponent = /** @class */ (function () {
    function CarouselsComponent() {
        this.myInterval = 6000;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    CarouselsComponent.prototype.addSlide = function () {
        this.slides.push({
            image: "https://loremflickr.com/900/500/sailing?random=" + (this.slides.length % 8 + 1) + "/"
        });
    };
    CarouselsComponent.prototype.removeSlide = function (index) {
        var toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    };
    CarouselsComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'carousels.component.html', providers: [
                { provide: carousel_1.CarouselConfig, useValue: { interval: 1500, noPause: true } }
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CarouselsComponent);
    return CarouselsComponent;
}());
exports.CarouselsComponent = CarouselsComponent;
//# sourceMappingURL=carousels.component.js.map