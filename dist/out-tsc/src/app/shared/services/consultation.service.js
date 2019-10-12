"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("../../app.component");
var http_2 = require("@angular/common/http");
var ConsultationService = /** @class */ (function () {
    function ConsultationService(http) {
        this.http = http;
    }
    ConsultationService.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ConsultationService.prototype, "consultation", {
        set: function (value) {
            this._consultation = value;
        },
        enumerable: true,
        configurable: true
    });
    ConsultationService.prototype.postConsultation = function (consultation) {
        var headers = new http_2.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': ''
        });
        var options = { headers: headers };
        return this.http.post(app_component_1.AppComponent.API_URL + '/account/consultation', consultation)
            .map(function (resp) { return resp.json(); });
    };
    ConsultationService.prototype.getConsultationId = function () {
        return this.http.get(app_component_1.AppComponent.API_URL + '/account/nextConsultation')
            .map(function (resp) { return resp.json(); });
    };
    ConsultationService.prototype.getConsultations = function (object) {
        return this.http.get(app_component_1.AppComponent.API_URL + '/account/getByObject' + object)
            .map(function (resp) { return resp.json(); });
    };
    ConsultationService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.Http])
    ], ConsultationService);
    return ConsultationService;
}());
exports.ConsultationService = ConsultationService;
//# sourceMappingURL=consultation.service.js.map