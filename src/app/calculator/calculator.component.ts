import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  submitted:boolean = false;
  addMoney: number = null;
  change: any = null;
  message: any = "";

  formValue:any = {
    taxi:null,
    paid: null,
    people: null
  }

  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    // if the money recieved is more than or equals to R200 tell the person you don't accept R200 or more 
    if(this.formValue.paid <= 200){
    //declaring my variables
      let addMoney = this.formValue.taxi * this.formValue.people;
      this.change = this.formValue.paid - addMoney;
    //if money which was given is equals to or greater than the money (taxi fare plus people who you paying for or included)
      if (this.addMoney <= this.formValue.paid) {
        return this.change;
      }
    }
    //otherwise return an alert that your money is less by R... that amount
    else if (this.formValue.paid < this.addMoney) {
      this.message = alert("Money is less R" + (this.addMoney - this.formValue.paid))
    }
    //else if the money recieved is more than or equals to R200 tell the person you don't accept R200 or more 
    else{
      this.message = alert("Can't Accept money above R200");
    }
  }
}