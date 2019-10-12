"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var fournisseurs_service_1 = require("../../shared/services/fournisseurs.service");
var router_1 = require("@angular/router");
var ProvidersComponent = /** @class */ (function () {
    function ProvidersComponent(fournisseursservice, router) {
        this.fournisseursservice = fournisseursservice;
        this.router = router;
        this.fournisseursservice = fournisseursservice;
    }
    ProvidersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fournisseursservice.getProviders().subscribe(function (re) { return _this.providers = re; });
    };
    ProvidersComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-providers',
            templateUrl: './providers.component.html',
            styleUrls: ['./providers.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [fournisseurs_service_1.FournisseursService, router_1.Router])
    ], ProvidersComponent);
    return ProvidersComponent;
}());
exports.ProvidersComponent = ProvidersComponent;
//# sourceMappingURL=providers.component.js.map