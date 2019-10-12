"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var consultation_model_1 = require("../../../shared/model/consultation.model");
var consultation_service_1 = require("../../../shared/services/consultation.service");
var fournisseur_model_1 = require("../../../shared/model/fournisseur.model");
var ConsultationsComponent = /** @class */ (function () {
    function ConsultationsComponent(consultationsService) {
        this.consultationsService = consultationsService;
        // configuration de l'éditeur du text utilisé
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '18rem',
            minHeight: '5rem',
            placeholder: 'Saissez le contenu de la consultation ici ...',
            translate: 'no'
        };
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    ConsultationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.formConsul);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var currentDate = new Date().toLocaleDateString('fr-FR', options);
        // ToDo récuperer le numero de la derniere consultation enregistrée dans la table consultation
        var idConsultation = 120;
        setTimeout(function () {
            _this.formConsul.form.patchValue({
                dateCreation: currentDate.toString(),
                idConsultation: idConsultation
            });
        });
        // ToDo recupérer la liste de noms fournissuers
        this.dropdownList = ['  1: societe 1', ' 2 : société 2', ' 3 : société 3', '4 : société 4', '5 : société 5'];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'selectionner tout',
            unSelectAllText: 'tout déselectionner',
            itemsShowLimit: 5,
            allowSearchFilter: true
        };
    };
    ConsultationsComponent.prototype.onPrint = function () { };
    ConsultationsComponent.prototype.onSubmit = function () {
        var _this = this;
        var consultations = [];
        for (var i = 0; i < this.selectedItems.length; i++) {
            consultations[i] = new consultation_model_1.ConsultationModel();
            consultations[i].idConsultation = this.formConsul.value.idConsultation;
            consultations[i].dateCreation = this.formConsul.value.dateCreation;
            consultations[i].objet = this.formConsul.value.objet;
            consultations[i].message = this.htmlContent;
            consultations[i].fournisseurList = new fournisseur_model_1.FournisseurModel();
            consultations[i].fournisseurList
                .pid = parseInt(this.selectedItems[i]);
            // ToDo comment implementer l'utilisation de la table materiel
            // consultation.materiel.designation = this.formConsul.value.me;
            this.consultationsService.consultation = consultations[i];
            this.consultationsService.postConsultation(consultations[i]).subscribe(function (data) {
                _this.router.navigate(['/consultation']);
            }, function (err) {
                console.log(err);
                _this.errorMessage = "cons already exist";
            });
            console.log(consultations[i]);
        }
    };
    ConsultationsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    ConsultationsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    tslib_1.__decorate([
        core_1.ViewChild('f'),
        tslib_1.__metadata("design:type", forms_1.NgForm)
    ], ConsultationsComponent.prototype, "formConsul", void 0);
    ConsultationsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-consultations',
            templateUrl: './consultations.component.html',
            styleUrls: ['./consultations.component.scss'],
            providers: [consultation_service_1.ConsultationService]
        }),
        tslib_1.__metadata("design:paramtypes", [consultation_service_1.ConsultationService])
    ], ConsultationsComponent);
    return ConsultationsComponent;
}());
exports.ConsultationsComponent = ConsultationsComponent;
//# sourceMappingURL=consultations.component.js.map