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
  key: string;
  teatro = {
    platea: ['Hallo'],
    palchi: ['World'],
  };

  constructor(private database: DatabaseService) {
    this.key = '9cf84c28';
  }

  upload() {
    var obs = this.database.postvalue(this.teatro, this.key);
    obs.subscribe({
      next: (x) => console.log(x),
      error: (err) => console.error('Observer got an error: ' + err.message)
    });
  }

  download() {
    var obs=this.database.getvalue(this.key);
    obs.subscribe({
      next: (v) => console.log(v),
      error: (err) => console.error('Observer got an error: ' + err)
    });
  }
}
