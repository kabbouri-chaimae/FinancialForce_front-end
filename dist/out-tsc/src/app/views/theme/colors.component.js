"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var coreui_utilities_1 = require("@coreui/coreui/dist/js/coreui-utilities");
var ColorsComponent = /** @class */ (function () {
    function ColorsComponent(_document) {
        this._document = _document;
    }
    ColorsComponent.prototype.themeColors = function () {
        var _this = this;
        Array.from(this._document.querySelectorAll('.theme-color')).forEach(function (el) {
            var background = coreui_utilities_1.getStyle('background-color', el);
            var table = _this._document.createElement('table');
            table.innerHTML = "\n        <table class=\"w-100\">\n          <tr>\n            <td class=\"text-muted\">HEX:</td>\n            <td class=\"font-weight-bold\">" + coreui_utilities_1.rgbToHex(background) + "</td>\n          </tr>\n          <tr>\n            <td class=\"text-muted\">RGB:</td>\n            <td class=\"font-weight-bold\">" + background + "</td>\n          </tr>\n        </table>\n      ";
            el.parentNode.appendChild(table);
        });
    };
    ColorsComponent.prototype.ngOnInit = function () {
        this.themeColors();
    };
    ColorsComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'colors.component.html'
        }),
        tslib_1.__param(0, core_1.Inject(common_1.DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ColorsComponent);
    return ColorsComponent;
}());
exports.ColorsComponent = ColorsComponent;
//# sourceMappingURL=colors.component.js.map