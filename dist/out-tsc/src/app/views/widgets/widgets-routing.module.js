"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var widgets_component_1 = require("./widgets.component");
var routes = [
    {
        path: '',
        component: widgets_component_1.WidgetsComponent,
        data: {
            title: 'Widgets'
        }
    }
];
var WidgetsRoutingModule = /** @class */ (function () {
    function WidgetsRoutingModule() {
    }
    WidgetsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], WidgetsRoutingModule);
    return WidgetsRoutingModule;
}());
exports.WidgetsRoutingModule = WidgetsRoutingModule;
//# sourceMappingURL=widgets-routing.module.js.map