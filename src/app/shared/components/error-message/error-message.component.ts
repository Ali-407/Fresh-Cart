import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent implements OnChanges {


  @Input() control!:AbstractControl | null;
  ngOnChanges(changes: SimpleChanges): void {
  console.log(this.control)
}
  

}
