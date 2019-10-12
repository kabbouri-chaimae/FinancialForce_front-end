"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var coreui_icons_component_1 = require("./coreui-icons.component");
var flags_component_1 = require("./flags.component");
var font_awesome_component_1 = require("./font-awesome.component");
var simple_line_icons_component_1 = require("./simple-line-icons.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Icons'
        },
        children: [
            {
                path: '',
                redirectTo: 'coreui-icons'
            },
            {
                path: 'coreui-icons',
                component: coreui_icons_component_1.CoreUIIconsComponent,
                data: {
                    title: 'CoreUI Icons'
                }
            },
            {
                path: 'flags',
                component: flags_component_1.FlagsComponent,
                data: {
                    title: 'Flags'
                }
            },
            {
                path: 'font-awesome',
                component: font_awesome_component_1.FontAwesomeComponent,
                data: {
                    title: 'Font Awesome'
                }
            },
            {
                path: 'simple-line-icons',
                component: simple_line_icons_component_1.SimpleLineIconsComponent,
                data: {
                    title: 'Simple Line Icons'
                }
            }
        ]
    }
];
var IconsRoutingModule = /** @class */ (function () {
    function IconsRoutingModule() {
    }
    IconsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], IconsRoutingModule);
    return IconsRoutingModule;
}());
exports.IconsRoutingModule = IconsRoutingModule;
//# sourceMappingURL=icons-routing.module.js.map