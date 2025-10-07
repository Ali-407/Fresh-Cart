import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

 private readonly authService = inject(AuthenticationService);
  private readonly router = inject(Router);

  isLoading = false;
  message = '';
  errorMsg = '';

  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.authService.forgotPassword(this.forgotForm.value as { email: string }).subscribe({
      next: () => {
        this.isLoading = false;
        this.message = 'Reset code sent to your email.';
        setTimeout(() => this.router.navigate(['/verify-code']), 1500);
      },
      
    });
  }

}
