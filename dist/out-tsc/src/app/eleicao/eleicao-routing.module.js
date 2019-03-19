import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CandidatosComponent } from './candidatos/candidatos.component';
var routes = [
    {
        path: '', component: CandidatosComponent
    }
];
var EleicaoRoutingModule = /** @class */ (function () {
    function EleicaoRoutingModule() {
    }
    EleicaoRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], EleicaoRoutingModule);
    return EleicaoRoutingModule;
}());
export { EleicaoRoutingModule };
//# sourceMappingURL=eleicao-routing.module.js.map