import { Component } from '@angular/core';
import { typedFormControl } from 'ngx-forms-typed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular8app';
  c = typedFormControl('test');
  ngOnInit() {
    this.c.setValue('', { emitModelToViewChange: true });
  }
}
