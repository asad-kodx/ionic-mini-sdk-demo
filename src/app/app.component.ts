import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { PrinterService } from './services/printer/printer.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private printerService: PrinterService){} 

  ngOnInit() {
    console.log(this.printerService.printer);
  }
}
