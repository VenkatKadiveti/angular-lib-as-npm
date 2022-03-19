import { NgModule } from '@angular/core';
import { Venkatkadiveti248libComponent } from './venkatkadiveti248lib.component';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { LibraryRouting } from './venkatkadiveti248lib.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlarmComponent } from './components/alarm/alarm.component';
import { TimerComponent } from './components/timer/timer.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [Venkatkadiveti248libComponent, HomeComponent, CalculatorComponent, AlarmComponent, TimerComponent],
  imports: [
    LibraryRouting,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [Venkatkadiveti248libComponent]
})
export class Venkatkadiveti248libModule { }
