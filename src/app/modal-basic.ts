import { Component, Input, Output, EventEmitter }             from '@angular/core';
import { ProgramService }                                     from './program.service';

@Component({
  selector: 'demo-modal-static',
  templateUrl: './app/modal-basic.html'
})
export class DemoModalStaticComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
   program:String = ''

   onClick() {
   this.notify.emit('Click from nested component');
 }
}
