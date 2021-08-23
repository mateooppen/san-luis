import { Router } from '@angular/router';
import { ModuloPastoreoModel } from './../../models/modulo-pastoreo.model';
import { ModuloPastoreoService } from './../../services/modulo-pastoreo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-modulos-pastoreo',
  templateUrl: './lista-modulos-pastoreo.page.html',
  styleUrls: ['./lista-modulos-pastoreo.page.scss'],
})
export class ListaModulosPastoreoPage implements OnInit {

  listaModulosPastoreo: ModuloPastoreoModel[] = [];
  filtroBusqueda = '';

  constructor( private moduloService: ModuloPastoreoService, private router: Router ) {
    this.moduloService.getModulos().subscribe( resp => {
      this.listaModulosPastoreo = resp;
    },
    (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  crearModulo() {
    this.moduloService.moduloSeleccionado = undefined;
    this.router.navigate(['/modulo-pastoreo']);
  }

  editarModulo(modulo) {
    this.moduloService.moduloSeleccionado = modulo;
    this.router.navigate(['/modulo-pastoreo']);
  }

  buscarModulo(event){
    this.filtroBusqueda = event.detail.value;
  }

}
