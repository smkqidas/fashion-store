import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent }   from './pages/home/home.component';
import { MeasurementsComponent } from './checkout/measurements/measurements.component';
import { BookSlotComponent } from './checkout/book-slot/book-slot.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'measurements', component: MeasurementsComponent },
  { path: 'book-slot', component: BookSlotComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}