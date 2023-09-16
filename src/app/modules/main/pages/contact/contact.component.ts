import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, MinLengthValidator } from '@angular/forms'
import { ApiService } from 'src/app/service/api.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public Form: any;
  public submitted: boolean = false;
  public response: any = [];
  public isLoading = false;
  public domain: any = [];

  constructor(private fb: FormBuilder, private api: ApiService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.Form = this.fb.group({
      firstname: ["", [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      lastname: ["", [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required, Validators.minLength(10)]]
    });
  }

  submit() {
    this.submitted = true
    if (this.Form.valid) {
      const data = {
        "First_Name": this.Form.value.firstname,
        "Last_Name": this.Form.value.lastname,
        "Email": this.Form.value.email,
        "Subject": this.Form.value.subject,
        "Message": this.Form.value.message
      }
      this.isLoading = true;
      this.api.postData(data).subscribe((response: any) => {
        this.isLoading = false;
        this.response = response
        // this.toastr.success(this.response.message)
        Swal.fire({
          icon: 'success',
          title: this.response.message,
          text: 'I will connect with you as soon as possible'
        })
      },
        (error: any) => {
          this.isLoading = false;
          this.response = error;
          this.toastr.error('error')
          this.Form.reset();
        }
      )
      this.Form.reset();
      this.submitted = false
    }
  }

  get registerFormControl() {
    return this.Form.controls;
  }
  
}
