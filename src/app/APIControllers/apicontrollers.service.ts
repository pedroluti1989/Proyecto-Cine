import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pelicula, FormEmpresa, Transmiten} from '../bd/bd.component';
import { Observable } from 'rxjs';

import {Persona, Consulta } from 'src/app/bd/bd.component';

@Injectable({
  providedIn: 'root'
})
export class APIControllersService {

  private url = (`http://localhost:3000/API`);
  
  constructor(private conector: HttpClient) { 
      

  }
  ObtenerCartelera(fecha: String):Observable<Pelicula[]>{    
    return this.conector.get<Pelicula[]>(`http://localhost:3000/API/Cartelera/${fecha}`);
  }
  BuscarSolicitante(email: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Solicitante/${email}`);
  }
  BuscarProximosEstrenos(fecha: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/ProximosEstrenos/${fecha}`);
  }
  ObtenerCombosDisponibles(ciudad: String){//PASAR PARÁMETRO s:string= "San Luis"
    return this.conector.get<any[]>(`http://localhost:3000/API/Combos/${ciudad}`);
  }
  ObtenerPersona(email: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Personas/${email}`);
  }
  BuscarBeneficiosDisponibles(){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Beneficios/`);
  }

 
 // METODO QUE GUARDA UNA CONSULTA DE UNA EMPRESA AL DEPARTAMENTO DE MARKETING
 guardarEmpresa(empresa: FormEmpresa): Observable<any>{
  //  let json = JSON.stringify(empresa);
   //let empresaJSON = "json="+json;

    return this.conector.post(this.url+'/Empresas/', empresa );

}

// PARA VER UNA TRANSMISION PARTICULAR, PELICULA MAS SU HORARIO Y SALA
getTransmision(id_pelicula: Number):Observable<Transmiten>{    
  return this.conector.get<Transmiten>(`http://localhost:3000/API/Transmiten/${id_pelicula}`);
}




}
