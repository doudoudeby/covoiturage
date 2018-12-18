import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public datepickerOptions: Pickadate.DateOptions = {
    clear: 'Supprimer', // Clear button text
    close: 'Ok',    // Ok button text
    today: 'Aujourd\'hui', // Today button text
    closeOnClear: true,
    closeOnSelect: false,
    format: 'dddd, dd mmm, yyyy', // Visible date format (defaulted to formatSubmit if provided otherwise 'd mmmm, yyyy')
    formatSubmit: 'dd-mm-yyyy',   // Return value format (used to set/get value)
    // onClose: () => alert('Close has been invoked.'),
    // onOpen: () => alert('Open has been invoked.'),
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 10,    // Creates a dropdown of 10 years to control year,
  };

  public timepickerOptions: Pickadate.TimeOptions = {
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Effacer', // text for clear-button
    canceltext: 'Annuler', // Text for cancel-button
    autoclose: true, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: () => alert('AfterShow has been invoked.'), // function for after opening timepicker
  };


  errorMessages = {
    input: {
      required: 'This field is required.',
    },
    select: {
      required: 'This field is required.',
    },
    datepicker: {
      required: 'This field is required.',
    },
    timepicker: {
      required: 'This field is required.',
    },
  };
  private profileForm: FormGroup;


  constructor(private  formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.profileForm = new FormGroup({
      depart: new FormControl(''),
      destination: new FormControl(''),
      date: new FormControl(''),
      heure: new FormControl('')
    });

  }




  onSubmit() {

    console.log(this.profileForm.value);
  }

}
