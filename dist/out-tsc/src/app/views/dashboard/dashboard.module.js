"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var buttons_1 = require("ngx-bootstrap/buttons");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                dashboard_routing_module_1.DashboardRoutingModule,
                ng2_charts_1.ChartsModule,
                dropdown_1.BsDropdownModule,
                buttons_1.ButtonsModule.forRoot()
            ],
            declarations: [dashboard_component_1.DashboardComponent]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map