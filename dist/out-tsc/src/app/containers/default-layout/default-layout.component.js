"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var _nav_1 = require("../../_nav");
var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent(_document) {
        var _this = this;
        this.navItems = _nav_1.navItems;
        this.sidebarMinimized = true;
        this.changes = new MutationObserver(function (mutations) {
            _this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    DefaultLayoutComponent.prototype.ngOnDestroy = function () {
        this.changes.disconnect();
    };
    DefaultLayoutComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './default-layout.component.html'
        }),
        tslib_1.__param(0, core_1.Inject(common_1.DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());
exports.DefaultLayoutComponent = DefaultLayoutComponent;
//# sourceMappingURL=default-layout.component.js.map