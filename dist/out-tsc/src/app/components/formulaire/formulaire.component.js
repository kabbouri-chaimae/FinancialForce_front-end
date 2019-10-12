"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FormulaireComponent = /** @class */ (function () {
    function FormulaireComponent(router) {
        this.router = router;
    }
    FormulaireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.forEach(function (event) {
            if (event instanceof router_1.NavigationStart) {
                var urlStringArray = event.url.split('/', 3);
                _this.libelleFormulaire = urlStringArray[urlStringArray.length - 1].replace(/[^A-Z0-9]/ig, " ");
                console.log(_this.libelleFormulaire);
            }
            // NavigationEnd
            // NaviationCancel
            // NavigationError
            // RoutesRecognized
        });
    };
    FormulaireComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-formulaire',
            templateUrl: './formulaire.component.html',
            styleUrls: ['./formulaire.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], FormulaireComponent);
    return FormulaireComponent;
}());
exports.FormulaireComponent = FormulaireComponent;
//# sourceMappingURL=formulaire.component.js.map