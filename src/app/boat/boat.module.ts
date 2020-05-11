import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { PresentationalHomeComponent } from './component/presentational-home/presentational-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { PaginateBoatComponent } from './component/paginate-boat/paginate-boat.component';
import { PresentationalTypeComponent } from './component/presentational-type/presentational-type.component';
import { BoatRoutingModule } from './boat-routing.module';
import { SmartTypeComponent } from './component/smart-type/smart-type.component';
import { SmartCongratsComponent } from './component/smart-congrats/smart-congrats.component';
import { PresentationalCongratsComponent } from './component/presentational-congrats/presentational-congrats.component';
import { PresentationalBoatComponent } from './component/presentational-boat/presentational-boat.component';
import { SmartCatamaranComponent } from './component/smart-catamaran/smart-catamaran.component';
import { SmartSailingComponent } from './component/smart-sailing/smart-sailing.component';
import { SharedModule } from '../shared/shared.module';
import { SmartHomeComponent } from './component/smart-home/smart-home.component';

@NgModule({
  declarations: [ 
    PresentationalHomeComponent, 
    PaginateBoatComponent, 
    PresentationalTypeComponent, 
    SmartTypeComponent, 
    SmartCongratsComponent, 
    PresentationalCongratsComponent, 
    PresentationalBoatComponent, 
    SmartCatamaranComponent, 
    SmartSailingComponent, SmartHomeComponent, 
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    BoatRoutingModule,
    SharedModule
  ],
  // providers: [BoatStore],
  exports: [TranslateModule]
})
export class BoatModule { }
