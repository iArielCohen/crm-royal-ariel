import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };
  error = '';

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      this.error = '';
      try {
        await this.authService.loginWithEmail(
          this.form.email,
          this.form.password
        );
        this.router.navigate(['/dashboard']);
      } catch (err) {
        this.error = err.message;
      }
    }
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
