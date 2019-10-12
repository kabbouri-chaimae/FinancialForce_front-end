"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var colors_component_1 = require("./colors.component");
var typography_component_1 = require("./typography.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Theme'
        },
        children: [
            {
                path: '',
                redirectTo: 'colors'
            },
            {
                path: 'colors',
                component: colors_component_1.ColorsComponent,
                data: {
                    title: 'Colors'
                }
            },
            {
                path: 'typography',
                component: typography_component_1.TypographyComponent,
                data: {
                    title: 'Typography'
                }
            }
        ]
    }
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());
exports.ThemeRoutingModule = ThemeRoutingModule;
//# sourceMappingURL=theme-routing.module.js.map