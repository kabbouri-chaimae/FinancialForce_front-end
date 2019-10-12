"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var chartjs_component_1 = require("./chartjs.component");
var chartjs_routing_module_1 = require("./chartjs-routing.module");
var ChartJSModule = /** @class */ (function () {
    function ChartJSModule() {
    }
    ChartJSModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                chartjs_routing_module_1.ChartJSRoutingModule,
                ng2_charts_1.ChartsModule
            ],
            declarations: [chartjs_component_1.ChartJSComponent]
        })
    ], ChartJSModule);
    return ChartJSModule;
}());
exports.ChartJSModule = ChartJSModule;
//# sourceMappingURL=chartjs.module.js.map