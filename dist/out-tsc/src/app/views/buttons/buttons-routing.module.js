"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var buttons_component_1 = require("./buttons.component");
var dropdowns_component_1 = require("./dropdowns.component");
var brand_buttons_component_1 = require("./brand-buttons.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Buttons'
        },
        children: [
            {
                path: '',
                redirectTo: 'buttons'
            },
            {
                path: 'buttons',
                component: buttons_component_1.ButtonsComponent,
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'dropdowns',
                component: dropdowns_component_1.DropdownsComponent,
                data: {
                    title: 'Dropdowns'
                }
            },
            {
                path: 'brand-buttons',
                component: brand_buttons_component_1.BrandButtonsComponent,
                data: {
                    title: 'Brand buttons'
                }
            }
        ]
    }
];
var ButtonsRoutingModule = /** @class */ (function () {
    function ButtonsRoutingModule() {
    }
    ButtonsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ButtonsRoutingModule);
    return ButtonsRoutingModule;
}());
exports.ButtonsRoutingModule = ButtonsRoutingModule;
//# sourceMappingURL=buttons-routing.module.js.map