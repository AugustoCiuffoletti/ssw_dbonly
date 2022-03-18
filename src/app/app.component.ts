import { Component, VERSION } from '@angular/core';
import { DatabaseService } from './database.service';

import { Observable } from "rxjs"; // per Observable

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Angular ' + VERSION.major;
  teatro: Object = {};

  constructor(private database: DatabaseService) {}

  upload() {
    var obs: Observable<Object>;
    obs = this.database.getvalue();
    obs.subscribe({complete: (x) => console.log(x)});
    //obs.subscribe({error: (err) => console.error('Observer got an error: ' + err)});
  }

  download() {
    var obs: Observable<Object>;
    obs = this.database.postvalue(this.teatro)
    obs.subscribe((x) => console.log(x));
    obs.subscribe({error: (err) => console.error('Observer got an error: ' + err)});
  }
}
