"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var account_service_1 = require("../../shared/services/account.service");
var fournisseurs_service_1 = require("../../shared/services/fournisseurs.service");
var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(fournisseursservice, router, accountService) {
        this.fournisseursservice = fournisseursservice;
        this.router = router;
        this.accountService = accountService;
        this.accountService = accountService;
        this.fournisseursservice = fournisseursservice;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAll().subscribe(function (response) { _this.users = response; });
        this.fournisseursservice.getProviders().subscribe(function (resp) { return _this.providers = resp; });
    };
    EmployeesComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-employees',
            templateUrl: './employees.component.html',
            styleUrls: ['./employees.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [fournisseurs_service_1.FournisseursService, router_1.Router, account_service_1.AccountService])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map