import { Component, VERSION } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Angular ' + VERSION.major;
  key: string;

  teatro = {
    platea: [],
    palchi: []
  };
  nfilePlatea = 7;
  npostiPlatea = 10;
  nfilePalchi = 4;
  npostiPalchi = 6;

  constructor(private database: DatabaseService) {
    this.key = '9cf84c28';
    this.teatro.platea=Array(this.nfilePlatea).fill(undefined).map( () => Array(this.npostiPlatea).fill("x"));
    this.teatro.palchi=Array(this.nfilePalchi).fill(undefined).map( () => Array(this.npostiPalchi).fill("x"));
    this.teatro.platea[2][1] = 'Alessio';
    this.teatro.platea[3][4] = 'Gianna';
    this.teatro.palchi[3][1] = 'Luigi';
  }

  upload() {
    var obs = this.database.postvalue(this.teatro, this.key);
    obs.subscribe({
      next: (x: string) => console.log(x),
      error: (err: Error) => console.error('Observer got an error: ' + err.message)
    });
  }

  download() {
    var obs=this.database.getvalue(this.key);
    obs.subscribe({
      next: (v: string) => console.log(v),
      error: (err: Error) => console.error('Observer got an error: ' + err)
    });
  }
}
