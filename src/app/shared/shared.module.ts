import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioBoxComponent } from './component/radio-box/radio-box.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from './component/button/button.component';
import { InputTextComponent } from './component/input/input.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { SearchFieldComponent } from './component/search-field/search-field.component';



@NgModule({
  declarations: [
    RadioBoxComponent, 
    ButtonComponent, 
    InputTextComponent, 
    CheckboxComponent, 
    SearchFieldComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    RadioBoxComponent, 
    ButtonComponent, 
    InputTextComponent,
    CheckboxComponent,
    SearchFieldComponent
  ]
})
export class SharedModule { }
