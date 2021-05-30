import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  ngOnInit() {
    // this.c.setValue('', { emitModelToViewChange: true });
  }
}
