import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginRequestModel} from "../../../shared/models/auth/login.request.model";
import {Subject} from "rxjs";
import {fuseAnimations} from "../../../../@fuse/animations";
import {MatDialog, MatDialogRef} from "@angular/material";
import {ConfirmDialogComponent} from "../../../shared/components/confirm-dialog/confirm-dialog.component";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations : fuseAnimations
})
export class LoginComponent implements OnInit {

    loginRequest:LoginRequestModel;
    loginForm: FormGroup;
    loginFormErrors: any;

    returnUrl: string;


    confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private authService : AuthService
    ) {
      this.loginFormErrors = {email   : {}, password: {}};
    }

    ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

      this.loginForm = this.formBuilder.group({
        email   : ['', [Validators.required]],
        //email   : ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });

      this.loginForm.valueChanges.subscribe(() => {
        this.onLoginFormValuesChanged();
      });
    }

  onLoginFormValuesChanged() {
    for ( const field in this.loginFormErrors )
    {
      if ( !this.loginFormErrors.hasOwnProperty(field) )
      {
        continue;
      }
      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if ( control && control.dirty && !control.valid )
      {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }

    onSubmit() {
        this.loginRequest = new LoginRequestModel();
        this.loginRequest.password = this.loginForm.value.password;
        this.loginRequest.username = this.loginForm.value.email;

        this.authService.login(this.loginRequest)
            .subscribe(data => {
                    this.authService.setToken(data.token);
                    //localStorage.setItem('TOKEN_KEY', data.token);
                    this.authService.initUser().then( res =>{
                            if  (this.returnUrl){
                              console.log("go to last page");
                                this.router.navigateByUrl(this.returnUrl);
                            }else
                              console.log("go to profile");
                                this.router.navigate(['/profile']);
                        }
                    );
                });

    }




}
