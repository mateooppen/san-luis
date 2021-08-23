import { Router } from '@angular/router';
import { ModuloPastoreoService } from './../../services/modulo-pastoreo.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ModuloPastoreoModel } from './../../models/modulo-pastoreo.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

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

  constructor( private moduloService: ModuloPastoreoService,  private fb: FormBuilder, private router: Router ) {
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
      this.crearFormulario();
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

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if( moduloForm.value.id !== '' ) {
      peticion = this.moduloService.editarModulo( moduloForm );
    } else {
      peticion = this.moduloService.crearModulo( moduloForm );
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: 'Modulo Pastoreo:' + moduloForm.value.id,
        text: 'Se actualizó correctamente',
        icon: 'success'
      }).then( res => {
        window.location.reload();
      });
    });

    this.router.navigate(['/lista-modulos-pastoreo']);
  }

}
