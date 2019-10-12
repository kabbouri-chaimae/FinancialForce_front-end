"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var app_component_1 = require("../../app.component");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.logIn = function (user) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        // creating base64 encoded String from user name and password
        var base64Credential = btoa(user.username + ':' + user.password);
        headers.append("Authorization", "Basic " + base64Credential);
        headers.append;
        var options = new http_1.RequestOptions();
        options.headers = headers;
        return this.http.get(app_component_1.AppComponent.API_URL + "/account/login", options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json().principal; // the returned user object is a principal object
            if (user) {
                // store user details  in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                sessionStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthService.prototype.logOut = function () {
        // remove user from local storage to log user out
        return this.http.post(app_component_1.AppComponent.API_URL + "logout", {})
            .map(function (response) {
            localStorage.removeItem('currentUser'),
                localStorage.clear,
                sessionStorage.removeItem('currentUser'),
                sessionStorage.clear;
        });
    };
    AuthService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map