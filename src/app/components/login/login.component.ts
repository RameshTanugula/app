
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  }
  submit() {
    if (this.form.valid) {
      try {
        this.appService.login(this.form.value).subscribe((res) => {
          if (res.message === 'success') {
            this.router.navigateByUrl('/decide-scale');
          } else {
            this.error = 'invalid data';
          }
        });
      } catch (err) {
        this.error = 'Something went wrong';
      }
    }
  }
  @Input()
  error!: string | null;

}

