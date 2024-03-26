import { NgModule } from "@angular/core";
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";

@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    UserDetailsComponent
  ],
})
export class ComponentsModule {

}
