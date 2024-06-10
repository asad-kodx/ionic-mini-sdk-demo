import { Injectable } from '@angular/core';
import IminPrinter from 'imin-printer';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  public printer: IminPrinter;

  constructor() {
    this.printer = new IminPrinter('10.0.21.53');
  }
}
