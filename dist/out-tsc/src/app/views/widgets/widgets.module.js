"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var widgets_component_1 = require("./widgets.component");
var widgets_routing_module_1 = require("./widgets-routing.module");
var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                widgets_routing_module_1.WidgetsRoutingModule,
                ng2_charts_1.ChartsModule,
                dropdown_1.BsDropdownModule
            ],
            declarations: [widgets_component_1.WidgetsComponent]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());
exports.WidgetsModule = WidgetsModule;
//# sourceMappingURL=widgets.module.js.map