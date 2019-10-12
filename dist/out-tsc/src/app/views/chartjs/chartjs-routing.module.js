"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var chartjs_component_1 = require("./chartjs.component");
var routes = [
    {
        path: '',
        component: chartjs_component_1.ChartJSComponent,
        data: {
            title: 'Charts'
        }
    }
];
var ChartJSRoutingModule = /** @class */ (function () {
    function ChartJSRoutingModule() {
    }
    ChartJSRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ChartJSRoutingModule);
    return ChartJSRoutingModule;
}());
exports.ChartJSRoutingModule = ChartJSRoutingModule;
//# sourceMappingURL=chartjs-routing.module.js.map