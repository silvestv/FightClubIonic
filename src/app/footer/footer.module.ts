import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { FooterPageRoutingModule } from './tabs.router.module';

import { FooterPage } from './footer.page';
import { SharedModule } from '../shared/shared.module';
import { CardProfileComponent } from '../shared/card-profile/card-profile.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers:[CardProfileComponent],
  declarations: [FooterPage] 
})
export class FooterPageModule {

  constructor(){}
  
  
}
