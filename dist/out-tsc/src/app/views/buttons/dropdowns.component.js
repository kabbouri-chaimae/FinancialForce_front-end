"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var DropdownsComponent = /** @class */ (function () {
    function DropdownsComponent() {
        this.status = { isOpen: false };
        this.disabled = false;
        this.isDropup = true;
        this.autoClose = false;
        this.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];
    }
    DropdownsComponent.prototype.onHidden = function () {
        console.log('Dropdown is hidden');
    };
    DropdownsComponent.prototype.onShown = function () {
        console.log('Dropdown is shown');
    };
    DropdownsComponent.prototype.isOpenChange = function () {
        console.log('Dropdown state is changed');
    };
    DropdownsComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isOpen = !this.status.isOpen;
    };
    DropdownsComponent.prototype.change = function (value) {
        this.status.isOpen = value;
    };
    DropdownsComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'dropdowns.component.html',
            styleUrls: ['dropdowns.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DropdownsComponent);
    return DropdownsComponent;
}());
exports.DropdownsComponent = DropdownsComponent;
//# sourceMappingURL=dropdowns.component.js.map