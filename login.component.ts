import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      tipo: ['', Validators.required],
      anio: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.submitted = true;

      // Crear el contenido del archivo
      const formData = this.loginForm.value;
      const fileContent = `Modelo: ${formData.modelo}\nMarca: ${formData.marca}\nTipo: ${formData.tipo}\nAño de Fabricacion: ${formData.anio}`;

      // Crear un blob y guardar el archivo
      const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, 'registro.txt');
    }
  }

}

