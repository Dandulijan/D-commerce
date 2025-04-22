import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { user } from '../../Data/Users'; //interface
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  @Input() initialData: user | null = null;
  @Output() formSubmit = new EventEmitter<user>();

  // constructor(private fb: FormBuilder) {}
  private fb = inject(FormBuilder);

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['customer', Validators.required],
    status: ['active', Validators.required],
    isEmailVerified: [false],
    avatarUrl: [''],
  });

  ngOnInit() {
    if (this.initialData) {
      this.userForm.patchValue(this.initialData);
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      const newUser: user = {
        ...formValue,
        id: this.initialData?.id ?? Date.now(),
        createdAt: this.initialData?.createdAt ?? new Date().toISOString(),
        lastLogin: this.initialData?.lastLogin ?? null,
      } as user;

      this.formSubmit.emit(newUser);
      this.userForm.reset();
    }
  }
}
