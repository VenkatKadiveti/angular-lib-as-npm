# Venkatkadiveti248lib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Code scaffolding

Run `ng generate component component-name --project venkatkadiveti248lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project venkatkadiveti248lib`.
> Note: Don't forget to add `--project venkatkadiveti248lib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build venkatkadiveti248lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build venkatkadiveti248lib`, go to the dist folder `cd dist/venkatkadiveti248lib` and run `npm publish`.

## Running unit tests

Run `ng test venkatkadiveti248lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Usage

## Step 1

Install the module 
```
npm i venkatkadiveti248lib
```

## Step 2

Add this line in app.module file 
```
import { Venkatkadiveti248libModule } from 'venkatkadiveti248lib';
```
if you are using lazy loading this in routing file 

```
const routes: Routes = [
  {
    path: 'lib',
    loadChildren: () => import('venkatkadiveti248lib').then(m => m.Venkatkadiveti248libModule)
  }
];
```

In app.component.ts file 

```
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  constructor(public router: Router) {

  }

  route () {
    this.router.navigate(['/lib']);
  }
}

```

in app.component.html file

```
<button (click)="route()" >Load Lib</button>

<router-outlet></router-outlet>

```




