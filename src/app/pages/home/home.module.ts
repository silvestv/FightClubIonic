import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ViewDetailsPageModule } from 'src/app/components/view-details/view-details.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterPageModule } from 'src/app/footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    SharedModule,
    FooterPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
