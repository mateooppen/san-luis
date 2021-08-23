import { Router } from '@angular/router';
import { ParcelaService } from './../../services/parcela.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-parcelas',
  templateUrl: './lista-parcelas.page.html',
  styleUrls: ['./lista-parcelas.page.scss'],
})
export class ListaParcelasPage implements OnInit {

  listaParcelas = [];
  filtroBusqueda = '';

  constructor( private parcelaService: ParcelaService, private router: Router ) { }

  ngOnInit() {

    this.parcelaService.getParcelas().subscribe( resp => {
      this.listaParcelas = resp;
    },
    (err) => {
      console.log(err);
    });

  }

  nuevaParcela() {
    this.parcelaService.parcelaSeleccionada = undefined;
    this.router.navigate(['/parcela']);
  }

  editarParcela(parcela) {
    this.parcelaService.parcelaSeleccionada = parcela;
    this.router.navigate(['/parcela']);
  }

  buscarParcela(event){
    this.filtroBusqueda = event.detail.value;
  }

}
