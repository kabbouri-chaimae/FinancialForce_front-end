"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("../../app.component");
require("rxjs/add/operator/map");
var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.createAccount = function (user) {
        return this.http.post(app_component_1.AppComponent.API_URL + '/account/register', user)
            .map(function (resp) { return resp.json(); });
    };
    AccountService.prototype.createDevis = function (devis) {
        return this.http.post(app_component_1.AppComponent.API_URL + '/saveDevis', devis)
            .map(function (resp) { return resp.json(); });
    };
    AccountService.prototype.getAll = function () {
        return this.http
            .get(app_component_1.AppComponent.API_URL + '/account/allUsers')
            .map(function (res) { return res.json(); });
    };
    AccountService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.Http])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map