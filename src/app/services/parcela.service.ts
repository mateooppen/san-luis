import { ParcelaModel } from './../models/parcela.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParcelaService {

  public parcelaSeleccionada: ParcelaModel;
  private url = 'https://san-luis-738e9-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient ) {
  }

  parcelaActiva(parcela) {
    if (parcela.value.cantidad !== 0 && parcela.value.cantidad !== null) {
      return parcela.value.activa = true;
    } else {
      return parcela.value.activa = false;
    }
  }

  crearParcela( parcela ) {

    return this.http.post(`${ this.url }/parcelas.json`, parcela.value)
            .pipe(
              map( (resp: any) => {
                parcela.value.id = resp.name;
                return parcela;
              })
            );

  }

  editarParcela( parcela ) {

    if( parcela.value.cantidad === null ) {
      parcela.value.cantidad = 0;
    }

    return this.http.put(`${ this.url }/parcelas/${ parcela.value.id }.json`, parcela.value);
  }

  getParcelas() {
    return this.http.get(`${ this.url }/parcelas.json`)
            .pipe(
              map( this.parcelasArray )
            );
  }

  private parcelasArray( parcelasObj ) {

    const parcelas: ParcelaModel[] = [];

    if (parcelasObj === null ) { return []; }

    Object.keys( parcelasObj ).forEach( key => {
      const parcela: ParcelaModel = parcelasObj[key];
      parcela.id = key;
      parcelas.push( parcela );
    });

    return parcelas;
  }

}
