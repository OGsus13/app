import { Component, OnInit } from '@angular/core';
import { cardmodel } from 'src/app/models/cardmodel';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


card: cardmodel= new cardmodel();
datacard: cardmodel[]= [
  {
    cardtitul :"TITULO 1",
    descri: "descripcion",
    boton: "1",
    il: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjegBJyGExptm83UtjLQcYJN_lM7T-ayFrVA&usqp=CAU"
  },
  {
    cardtitul :"TITULO2",
    descri: "descripcion2",
    boton: "2",
    il: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjegBJyGExptm83UtjLQcYJN_lM7T-ayFrVA&usqp=CAU"
  },
  {
    cardtitul :"TITULO3",
    descri: "descripcion3",
    boton: "3",
    il: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjegBJyGExptm83UtjLQcYJN_lM7T-ayFrVA&usqp=CAU"
  },
  {
    cardtitul :"TITULO4",
    descri: "descripcion4",
    boton: "4",
    il: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzZHX5QtAkblBE-f8qcCy7Da_6SCJ1smTNFE4cyviwBTrq2vpHnN-U00MypyHS7uSZvA&usqp=CAU"
  }
]

addcard(){
  console.log(this.card);
  this.datacard.push(this.card)
}
}

