import { Component } from '@angular/core';
import { core } from '@org/common/core';

@Component({
  selector: 'lib-my-app-ang',
  imports: [],
  templateUrl: './my-app-ang.html',
  styleUrl: './my-app-ang.css',
})
export class MyAppAng {
  core = core;
}
