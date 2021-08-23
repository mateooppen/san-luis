import { Router } from '@angular/router';
import { ParcelaModel } from './../../models/parcela.model';
import { ParcelaService } from './../../services/parcela.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parcela',
  templateUrl: './parcela.page.html',
  styleUrls: ['./parcela.page.scss'],
})
export class ParcelaPage implements OnInit {

  public parcela: ParcelaModel;

  parcelaForm = new FormGroup({
    id: new FormControl(),
    activa: new FormControl(),
    numeroParcela: new FormControl(),
    categoria: new FormControl(),
    cantidad: new FormControl(),
    dueño: new FormControl(),
    proxima: new FormControl(),
    agua: new FormControl(),
    sombra: new FormControl(),
    estado: new FormControl(),
    remanente: new FormControl(),
    malezas: new FormControl(),
    desmalezar: new FormControl(),
    ultimaLluvia: new FormControl(),
    cantidadLluvia: new FormControl(),
    hongos: new FormControl(),
  });

  categorias: string [] = [];
  estados: string [] = [];
  remanentes: string [] = [];
  malezas: string [] = [];

  constructor( private parcelaService: ParcelaService, private fb: FormBuilder, private router: Router ) {

    this.crearFormulario();

  }

  ngOnInit() {
    this.categorias = ['Macho', 'Hembra', 'Ternero', 'Novillo', 'Vaquilla'];
    this.estados = ['Bueno', 'Regular', 'Malo'];
    this.remanentes = ['Bien', 'Poco'];
    this.malezas = ['Senesio', 'Caraguatá', 'Cardo', 'Espartillo', 'Chilca', 'Amor seco', 'Otras'];

    this.parcela = this.parcelaService.parcelaSeleccionada;

    if( this.parcela ) {
      this.parcelaForm.setValue({
        ...this.parcela
      });
    }
  }

  crearFormulario() {
    this.parcelaForm = this.fb.group({
      id: [''],
      activa: [false],
      numeroParcela: [''],
      categoria: [''],
      cantidad: [0],
      dueño: ['San Luis'],
      proxima: [''],
      agua: [false],
      sombra: [false],
      estado: ['Bueno'],
      remanente: ['Bien'],
      maleza: [''],
      desmalezar: [false],
      ultimaLluvia: [''],
      cantidadLluvia: [''],
      hongos: [false]
    });
  }

  guardar( parcelaForm: FormGroup ) {
    this.parcelaService.parcelaActiva(parcelaForm);

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if( parcelaForm.value.id !== '' ) {
      peticion = this.parcelaService.editarParcela( parcelaForm );
    } else {
      peticion = this.parcelaService.crearParcela( parcelaForm  );
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: 'Parcela:' + parcelaForm.value.numeroParcela,
        text: 'Se actualizó correctamente',
        icon: 'success'
      }).then( res => {
        window.location.reload();
      });
    });

    this.router.navigate(['/']);
  }

}
