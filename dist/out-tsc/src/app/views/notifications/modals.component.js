"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var modal_1 = require("ngx-bootstrap/modal");
var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    tslib_1.__decorate([
        core_1.ViewChild('myModal'),
        tslib_1.__metadata("design:type", modal_1.ModalDirective)
    ], ModalsComponent.prototype, "myModal", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('largeModal'),
        tslib_1.__metadata("design:type", modal_1.ModalDirective)
    ], ModalsComponent.prototype, "largeModal", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('smallModal'),
        tslib_1.__metadata("design:type", modal_1.ModalDirective)
    ], ModalsComponent.prototype, "smallModal", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('primaryModal'),
        tslib_1.__metadata("design:type", modal_1.ModalDirective)
    ], ModalsComponent.prototype, "primaryModal", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('successModal'),
        tslib_1.__metadata("design:type", modal_1.ModalDirective)
    ], ModalsComponent.prototype, "successModal", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('warningModal'),
        tslib_1.__metadata("design:type", modal_1.ModalDirective)
    ], ModalsComponent.prototype, "warningModal", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('dangerModal'),
        tslib_1.__metadata("design:type", modal_1.ModalDirective)
    ], ModalsComponent.prototype, "dangerModal", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('infoModal'),
        tslib_1.__metadata("design:type", modal_1.ModalDirective)
    ], ModalsComponent.prototype, "infoModal", void 0);
    ModalsComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'modals.component.html'
        })
    ], ModalsComponent);
    return ModalsComponent;
}());
exports.ModalsComponent = ModalsComponent;
//# sourceMappingURL=modals.component.js.map