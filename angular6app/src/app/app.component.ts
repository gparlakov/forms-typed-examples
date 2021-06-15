import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular6app';
  form = new FormGroup({
    name: new FormControl('test')
  });

  constructor(dep: Component, dep2: Router) {}
  ngOnInit() {
    // this.c.setValue('', { emitModelToViewChange: true });
  }

  aPublicMethod() {

  }
}
