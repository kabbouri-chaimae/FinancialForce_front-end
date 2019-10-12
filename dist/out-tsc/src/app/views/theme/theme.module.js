"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// Angular
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var colors_component_1 = require("./colors.component");
var typography_component_1 = require("./typography.component");
// Theme Routing
var theme_routing_module_1 = require("./theme-routing.module");
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                theme_routing_module_1.ThemeRoutingModule
            ],
            declarations: [
                colors_component_1.ColorsComponent,
                typography_component_1.TypographyComponent
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());
exports.ThemeModule = ThemeModule;
//# sourceMappingURL=theme.module.js.map