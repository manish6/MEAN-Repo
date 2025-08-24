import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  name: string = '';
  heading: string = '';
  submittedName: string = '';
  message: string = '';

  constructor(private myService: MyServiceService, private router: Router) { }

  ngOnInit() {
   this.myService.getData().subscribe(data =>{
    this.submittedName = data.name;
   })
  }

  submitName() {
    console.log("Submitted Name",this.name);
  }

  getBackendData() {
    if(this.name == this.submittedName){
      this.message = '';
        this.router.navigate(['/data']);
    } else {
      console.log("error")
      this.message = "Please enter correct name";
    }

  }
   
}




