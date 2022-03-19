import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmComponent } from './components/alarm/alarm.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { TimerComponent } from './components/timer/timer.component';
import { Venkatkadiveti248libComponent } from './venkatkadiveti248lib.component';


const routes: Routes = [
    {
        path: '',
        component: Venkatkadiveti248libComponent,
        children: [

            {
                path: 'home',
                component: HomeComponent,

            },
            {
                path: 'calc',
                component: CalculatorComponent
            },
            {
                path: 'alarm',
                component: AlarmComponent
            },
            {
                path: 'timer',
                component: TimerComponent
            }

        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LibraryRouting {

}