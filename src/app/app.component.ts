import { Component, VERSION } from '@angular/core';
import { DatabaseService } from './database.service';

import { Observable } from 'rxjs'; // per Observable

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Angular ' + VERSION.major;
  teatro = {
    platea: ['Hallo'],
    palchi: ['World'],
  };
  constructor(private database: DatabaseService) {}

  upload() {
    var obs = this.database.postvalue(this.teatro);
    obs.subscribe({
      next: (x) => console.log(x),
      error: (err) => console.error('Observer got an error: ' + err.message)
    });
  }

  download() {
    var obs=this.database.getvalue();
    obs.subscribe({
      next: (v) => console.log(v),
      error: (err) => console.error('Observer got an error: ' + err)
    });
  }
}
