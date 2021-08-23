import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ModuloPastoreoModel } from '../models/modulo-pastoreo.model';

@Injectable({
  providedIn: 'root'
})
export class ModuloPastoreoService {

  public moduloSeleccionado: ModuloPastoreoModel;
  private url = 'https://san-luis-738e9-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearModulo(modulo) {
    return this.http.post(`${ this.url }/modulosPastoreo.json`, modulo.value)
            .pipe(
              map( (resp: any) => {
                modulo.value.id = resp.name;
                return modulo;
              })
            );
  }

  editarModulo(modulo) {
    return this.http.put(`${ this.url }/modulosPastoreo/${ modulo.value.id }.json`, modulo.value);
  }

  getModulos() {
    return this.http.get(`${ this.url }/modulosPastoreo.json`)
            .pipe(
              map( this.modulosArray )
            );
  }

  private modulosArray( modulosObj ) {

    const modulos: ModuloPastoreoModel[] = [];

    if (modulosObj === null ) { return []; }

    Object.keys( modulosObj ).forEach( key => {
      const modulo: ModuloPastoreoModel = modulosObj[key];
      modulo.id = key;
      modulos.push( modulo );
    });

    return modulos;
  }

}
