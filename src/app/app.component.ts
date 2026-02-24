import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from "./cabecero/cabecero.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { EgresoComponent } from "./egreso/egreso.component";
import { IngresoComponent } from "./ingreso/ingreso.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceroComponent, FormularioComponent, EgresoComponent, IngresoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-presupuesto';
}
