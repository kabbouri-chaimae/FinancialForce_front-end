"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var PopoversComponent = /** @class */ (function () {
    function PopoversComponent(sanitizer) {
        this.title = 'Welcome word';
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-warning\">Never trust not sanitized <code>HTML</code>!!!</span>";
        this.html = sanitizer.sanitize(core_1.SecurityContext.HTML, this.html);
    }
    PopoversComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'popovers.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], PopoversComponent);
    return PopoversComponent;
}());
exports.PopoversComponent = PopoversComponent;
//# sourceMappingURL=popovers.component.js.map