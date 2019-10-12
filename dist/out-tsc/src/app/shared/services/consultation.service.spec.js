"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var consultation_service_1 = require("./consultation.service");
describe('ConsultationService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(consultation_service_1.ConsultationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=consultation.service.spec.js.map