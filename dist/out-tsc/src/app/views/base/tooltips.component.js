"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent(sanitizer) {
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>";
        this.html = sanitizer.sanitize(core_1.SecurityContext.HTML, this.html);
    }
    TooltipsComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'tooltips.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], TooltipsComponent);
    return TooltipsComponent;
}());
exports.TooltipsComponent = TooltipsComponent;
//# sourceMappingURL=tooltips.component.js.map