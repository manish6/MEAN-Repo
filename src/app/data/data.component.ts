import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit  } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // <-- OnPush here

})
export class DataComponent implements OnInit {

  constructor(private myService: MyServiceService, private cdr: ChangeDetectorRef) { }
  heading: string = "";
  products: any[] = [];
  showInput = false;
  inputValue = '';
  addedValue = '';
  timerValue = 0;

  ngOnInit(): void {
    this.myService.getData().subscribe({
        next: (data) =>{
          console.log(data);
          this.heading = data.company + " at " + data.currentDate;
        },
        error: (error) =>{
          console.log(error);
        }
      });
  }

  getProducts(){
    this.myService.getproducts().subscribe(data => {
this.products = data.items;
    })
  }

  openInput() {
    this.showInput = true;
    //this.cdr.markForCheck();
  }

  addValue() {
    this.addedValue = this.inputValue;
    this.inputValue = '';
   // this.cdr.markForCheck();
  }

  startTimer() {
    // setTimeout(() => {
    //   this.timerValue = 42;
    //  // this.cdr.markForCheck(); // Needed with OnPush!
    // }, 2000);

  }

}
