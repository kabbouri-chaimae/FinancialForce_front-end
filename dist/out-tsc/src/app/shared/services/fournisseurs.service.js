"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("../../app.component");
var FournisseursService = /** @class */ (function () {
    function FournisseursService(http) {
        this.http = http;
    }
    FournisseursService.prototype.getProviders = function () {
        return this.http.get(app_component_1.AppComponent.API_URL + '/account/selectedSocieties')
            .map(function (resp) { return resp.json(); });
    };
    FournisseursService.prototype.postSelectedProviders = function (providers) {
        // providers.forEach(() => {
        // })
        for (var i in providers)
            return this.http.post(app_component_1.AppComponent.API_URL + '/account/postSelectedProviders', i);
    };
    FournisseursService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.Http])
    ], FournisseursService);
    return FournisseursService;
}());
exports.FournisseursService = FournisseursService;
//# sourceMappingURL=fournisseurs.service.js.map