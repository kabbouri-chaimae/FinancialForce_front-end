"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var alerts_component_1 = require("./alerts.component");
var badges_component_1 = require("./badges.component");
var modals_component_1 = require("./modals.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Notifications'
        },
        children: [
            {
                path: '',
                redirectTo: 'alerts'
            },
            {
                path: 'alerts',
                component: alerts_component_1.AlertsComponent,
                data: {
                    title: 'Alerts'
                }
            },
            {
                path: 'badges',
                component: badges_component_1.BadgesComponent,
                data: {
                    title: 'Badges'
                }
            },
            {
                path: 'modals',
                component: modals_component_1.ModalsComponent,
                data: {
                    title: 'Modals'
                }
            }
        ]
    }
];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());
exports.NotificationsRoutingModule = NotificationsRoutingModule;
//# sourceMappingURL=notifications-routing.module.js.map