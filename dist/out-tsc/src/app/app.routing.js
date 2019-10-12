"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Import Containers
var containers_1 = require("./containers");
var _404_component_1 = require("./components/error/404.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var consultations_component_1 = require("./components/formulaire/consultations/consultations.component");
var formulaire_component_1 = require("./components/formulaire/formulaire.component");
var bon_de_commande_component_1 = require("./components/formulaire/bon-de-commande/bon-de-commande.component");
var employees_component_1 = require("./components/employees/employees.component");
var providers_component_1 = require("./components/providers/providers.component");
// ToDo trouver une solution pour les parenthèses (et le #)qui apparaissent dans le URL (e.g /#/formulaire/(consultations))
exports.routes = [
    { path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: _404_component_1.P404Component,
        data: {
            title: 'Page 404'
        }
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        pathMatch: 'full',
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        data: {
            title: 'Register Page'
        }
    },
    {
        path: '',
        component: containers_1.DefaultLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'formulaire',
                component: formulaire_component_1.FormulaireComponent,
                children: [
                    { path: 'employees',
                        component: employees_component_1.EmployeesComponent,
                    },
                    { path: 'fournisseurs',
                        component: providers_component_1.ProvidersComponent,
                    },
                    {
                        path: 'consultations',
                        component: consultations_component_1.ConsultationsComponent,
                    },
                    {
                        path: 'bon-de-commande',
                        component: bon_de_commande_component_1.BonDeCommandeComponent,
                    }
                ],
            },
        ]
    },
    { path: '**', component: _404_component_1.P404Component }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(exports.routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map