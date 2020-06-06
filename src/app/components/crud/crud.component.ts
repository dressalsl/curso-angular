import { Images } from './../../models/placeholder.model';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  // para eu usar ele no app.component.html eu uso esse selector
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  // faco isso pra poder chamar na interpolacao do ngFor no crud.components.html
  images: any;
  erro: any;
// eu digo que é do tipo CrudService que é a classe do crud.service.ts
  constructor(private crudService: CrudService) {
//pra usar meu getter() eu coloco aqui
    this.getter();
  }
//usar esse service pra consumir os dados da api
// crio um metodo para consumir o outro metodo (get fotos) que criou no service
  ngOnInit(): void { }
  getter() {
    this.crudService.getFotos().subscribe(
      // aqui vou preencher uma variavel do tipo Images que é o plaholder.models.ts
      // tipei o retorno de data
      (data: Images) => {
        this.images = data;
        console.log('o data que recebeu', data);
        console.log('a variavel preenchemos', this.images);
      },
      (error: any) => {
        this.erro = error;
        console.error('ERROR', error);
      });
  }
}
