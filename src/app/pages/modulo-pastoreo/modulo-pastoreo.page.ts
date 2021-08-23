import { ModuloPastoreoService } from './../../services/modulo-pastoreo.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ModuloPastoreoModel } from './../../models/modulo-pastoreo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-pastoreo',
  templateUrl: './modulo-pastoreo.page.html',
  styleUrls: ['./modulo-pastoreo.page.scss'],
})
export class ModuloPastoreoPage implements OnInit {

  public moduloPastoreo: ModuloPastoreoModel;

  moduloForm = new FormGroup({
    id: new FormControl(),
    historiaLote: new FormControl(),
    fechaSiembra: new FormControl(),
    sistemaSiembra: new FormControl(),
    fertilizacion: new FormControl(),
    especies: new FormControl(),
    analisisSuelo: new FormControl(),
    erosion: new FormControl(),
    cortesCobertura: new FormControl(),
    observaciones: new FormControl()
  });

  constructor( private moduloService: ModuloPastoreoService,  private fb: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit() {

    this.moduloPastoreo = this.moduloService.moduloSeleccionado;

    if( this.moduloPastoreo !== undefined) {
      this.moduloForm.setValue({
        ...this.moduloPastoreo
      });
    }
    else {
      this.moduloForm.reset();
    }

  }

  crearFormulario() {
    this.moduloForm = this.fb.group({
      id: [''],
      historiaLote: [''],
      fechaSiembra: [''],
      sistemaSiembra: [''],
      fertilizacion: [''],
      especies: [''],
      analisisSuelo: [''],
      erosion: [''],
      cortesCobertura: [''],
      observaciones: ['']
    });
  }

  guardar(moduloForm: FormGroup) {
    this.moduloService.crearModulo(moduloForm).subscribe( res => {
      console.log(res);
    });
  }

}
