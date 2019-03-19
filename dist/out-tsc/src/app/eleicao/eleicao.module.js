import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleicaoRoutingModule } from './eleicao-routing.module';
import { CandidatosComponent } from './candidatos/candidatos.component';
var EleicaoModule = /** @class */ (function () {
    function EleicaoModule() {
    }
    EleicaoModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                CandidatosComponent
            ],
            imports: [
                CommonModule,
                EleicaoRoutingModule
            ]
        })
    ], EleicaoModule);
    return EleicaoModule;
}());
export { EleicaoModule };
//# sourceMappingURL=eleicao.module.js.map