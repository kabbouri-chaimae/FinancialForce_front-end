"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var CollapsesComponent = /** @class */ (function () {
    function CollapsesComponent() {
        this.isCollapsed = false;
    }
    CollapsesComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    CollapsesComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    CollapsesComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'collapses.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CollapsesComponent);
    return CollapsesComponent;
}());
exports.CollapsesComponent = CollapsesComponent;
//# sourceMappingURL=collapses.component.js.map