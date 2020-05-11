import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SmartTypeComponent } from './component/smart-type/smart-type.component';
import { SmartCongratsComponent } from './component/smart-congrats/smart-congrats.component';
import { SmartCatamaranComponent } from './component/smart-catamaran/smart-catamaran.component';
import { SmartSailingComponent } from './component/smart-sailing/smart-sailing.component';
import { SmartHomeComponent } from './component/smart-home/smart-home.component';

const routes: Routes = [
    { path: 'home', component: SmartHomeComponent},
    { path: 'type', component: SmartTypeComponent},
    { path: 'catamaran', component: SmartCatamaranComponent},
    { path: 'sailing', component: SmartSailingComponent},
    { path: 'congrats', component: SmartCongratsComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BoatRoutingModule {}