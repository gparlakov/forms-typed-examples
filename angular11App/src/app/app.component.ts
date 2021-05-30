import { Component } from '@angular/core';
import { typedFormControl, typedFormGroup } from 'ngx-forms-typed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11App';

  f = typedFormGroup<{name: string, date: Date}>({
    name: typedFormControl(''),
    date: typedFormControl(new Date())
  });
}
