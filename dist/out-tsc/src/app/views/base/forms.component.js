"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.isCollapsed = false;
        this.iconCollapse = 'icon-arrow-up';
    }
    FormsComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    FormsComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    FormsComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
        this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
    };
    FormsComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'forms.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=forms.component.js.map