"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var coreui_icons_component_1 = require("./coreui-icons.component");
var flags_component_1 = require("./flags.component");
var font_awesome_component_1 = require("./font-awesome.component");
var simple_line_icons_component_1 = require("./simple-line-icons.component");
var icons_routing_module_1 = require("./icons-routing.module");
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [icons_routing_module_1.IconsRoutingModule],
            declarations: [
                coreui_icons_component_1.CoreUIIconsComponent,
                flags_component_1.FlagsComponent,
                font_awesome_component_1.FontAwesomeComponent,
                simple_line_icons_component_1.SimpleLineIconsComponent
            ]
        })
    ], IconsModule);
    return IconsModule;
}());
exports.IconsModule = IconsModule;
//# sourceMappingURL=icons.module.js.map