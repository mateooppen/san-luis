import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  login( form: NgForm ) {
    this.auth.login( this.usuario )
      .subscribe( resp => {

        console.log(resp);
        this.router.navigateByUrl('/home');

      }, (err) => {

        console.log(err.error.error.message);

      });

  }

}
