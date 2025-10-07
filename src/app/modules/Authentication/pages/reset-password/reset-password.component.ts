import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  private readonly authService = inject(AuthenticationService);
  private readonly router = inject(Router);

  isLoading = false;
  message = '';
  errorMsg = '';

  resetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.authService.resetPassword({
      email: this.resetForm.get('email')?.value || '',
      newPassword: this.resetForm.get('newPassword')?.value || ''
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.message = 'Password reset successfully! You can now log in.';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = err.error.message || 'Something went wrong. Try again.';
      }
    });
  }
}
