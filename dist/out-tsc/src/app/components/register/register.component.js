"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_model_1 = require("../../shared/model/user.model");
var account_service_1 = require("../../shared/services/account.service");
var router_1 = require("@angular/router");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.user = new user_model_1.User();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.accountService.createAccount(this.user).subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = "username already exist";
        });
    };
    RegisterComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: 'register.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map