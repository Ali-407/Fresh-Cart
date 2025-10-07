import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent {

  private readonly authService = inject(AuthenticationService);
  private readonly router = inject(Router);

  isLoading = false;
  message = '';
  errorMsg = '';

  verifyForm = new FormGroup({
    resetCode: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.verifyForm.invalid) {
      this.verifyForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.authService.verifyResetCode(this.verifyForm.value as { resetCode: string }).subscribe({
      next: () => {
        this.isLoading = false;
        this.message = 'Code verified successfully!';
        setTimeout(() => this.router.navigate(['/reset-password']), 1500);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = err.error.message || 'Invalid code. Try again.';
      }
    });
  }
}
