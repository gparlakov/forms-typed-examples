import { Component, OnInit } from '@angular/core';
import { typedFormControl, typedFormGroup } from 'ngx-forms-typed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'angular8app';
  c = typedFormControl('test');
  form = typedFormGroup<{name: string, date: Date}>({
    name: typedFormControl(''),
    date: typedFormControl(new Date())
  });

  ngOnInit() {
    this.c.setValue('', { emitModelToViewChange: true });
  }
}
