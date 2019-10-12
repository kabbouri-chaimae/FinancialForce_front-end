"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// Angular
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
// Alert Component
var alert_1 = require("ngx-bootstrap/alert");
var alerts_component_1 = require("./alerts.component");
var badges_component_1 = require("./badges.component");
// Modal Component
var modal_1 = require("ngx-bootstrap/modal");
var modals_component_1 = require("./modals.component");
// Notifications Routing
var notifications_routing_module_1 = require("./notifications-routing.module");
var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                notifications_routing_module_1.NotificationsRoutingModule,
                alert_1.AlertModule.forRoot(),
                modal_1.ModalModule.forRoot()
            ],
            declarations: [
                alerts_component_1.AlertsComponent,
                badges_component_1.BadgesComponent,
                modals_component_1.ModalsComponent
            ]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());
exports.NotificationsModule = NotificationsModule;
//# sourceMappingURL=notifications.module.js.map