"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_model_1 = require("../../shared/model/user.model");
var auth_service_1 = require("../../shared/services/auth.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.logIn(this.user)
            .subscribe(function (data) {
            _this.router.navigate(['/formulaire']);
        }, function (err) {
            _this.errorMessage = "error :  Username or password is incorrect";
        });
    };
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: 'login.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map