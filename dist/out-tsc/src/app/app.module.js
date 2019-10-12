"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var app_component_1 = require("./app.component");
// Import containers
var containers_1 = require("./containers");
var _404_component_1 = require("./components/error/404.component");
var _500_component_1 = require("./components/error/500.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var APP_CONTAINERS = [
    containers_1.DefaultLayoutComponent
];
var angular_1 = require("@coreui/angular");
// Import routing module
var app_routing_1 = require("./app.routing");
// Import 3rd party components
var dropdown_1 = require("ngx-bootstrap/dropdown");
var tabs_1 = require("ngx-bootstrap/tabs");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var formulaire_component_1 = require("./components/formulaire/formulaire.component");
var consultations_component_1 = require("./components/formulaire/consultations/consultations.component");
var consultation_component_1 = require("./components/formulaire/consultations/consultation/consultation.component");
var http_1 = require("@angular/http");
var angular_editor_1 = require("@kolkov/angular-editor");
var http_2 = require("@angular/common/http");
var ng_multiselect_dropdown_1 = require("ng-multiselect-dropdown");
var forms_1 = require("@angular/forms");
var bon_de_commande_component_1 = require("./components/formulaire/bon-de-commande/bon-de-commande.component");
var fiche_engagement_component_1 = require("./components/formulaire/fiche-engagement/fiche-engagement.component");
var model_de_devis_component_1 = require("./components/formulaire/model-de-devis/model-de-devis.component");
var ordre_de_paiement_component_1 = require("./components/formulaire/ordre-de-paiement/ordre-de-paiement.component");
var ordre_de_virement_component_1 = require("./components/formulaire/ordre-de-virement/ordre-de-virement.component");
var ordre_imputation_component_1 = require("./components/formulaire/ordre-imputation/ordre-imputation.component");
var proces_verbal_component_1 = require("./components/formulaire/proces-verbal/proces-verbal.component");
var proces_verbal_reception_component_1 = require("./components/formulaire/proces-verbal-reception/proces-verbal-reception.component");
var auth_service_1 = require("./shared/services/auth.service");
var account_service_1 = require("./shared/services/account.service");
var urlPermission_1 = require("./urlPermission/urlPermission");
var employees_component_1 = require("./components/employees/employees.component");
var providers_component_1 = require("./components/providers/providers.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.AppRoutingModule,
                angular_1.AppAsideModule,
                angular_1.AppBreadcrumbModule.forRoot(),
                angular_1.AppFooterModule,
                angular_1.AppHeaderModule,
                angular_1.AppSidebarModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                dropdown_1.BsDropdownModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                ng2_charts_1.ChartsModule,
                angular_editor_1.AngularEditorModule,
                http_2.HttpClientModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule.forRoot(),
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(APP_CONTAINERS, [
                _404_component_1.P404Component,
                _500_component_1.P500Component,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                formulaire_component_1.FormulaireComponent,
                consultations_component_1.ConsultationsComponent,
                consultation_component_1.ConsultationComponent,
                bon_de_commande_component_1.BonDeCommandeComponent,
                fiche_engagement_component_1.FicheEngagementComponent,
                model_de_devis_component_1.ModelDeDevisComponent,
                ordre_de_paiement_component_1.OrdreDePaiementComponent,
                ordre_de_virement_component_1.OrdreDeVirementComponent,
                ordre_imputation_component_1.OrdreImputationComponent,
                proces_verbal_component_1.ProcesVerbalComponent,
                proces_verbal_reception_component_1.ProcesVerbalReceptionComponent,
                employees_component_1.EmployeesComponent,
                providers_component_1.ProvidersComponent
            ]),
            providers: [auth_service_1.AuthService, account_service_1.AccountService, urlPermission_1.UrlPermission,
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map