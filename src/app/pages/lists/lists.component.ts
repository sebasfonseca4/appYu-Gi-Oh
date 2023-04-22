import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit{

  cards: Card[] = [];
  offset = 0;

  cardTextFC = new FormControl('');

  constructor (private cardService: CardService){}

  ngOnInit(): void {
    this.cardTextFC.valueChanges.pipe(
      debounceTime(1200)
      ).subscribe(res =>{
      this.cards = [];
      this.searchsCards(res);
    })
    this.searchsCards();
  }

  onScroll() {
    console.log("scrolled!!");
    this.offset += 100;
    this.searchsCards();
  }

  searchsCards(cardName: string | null = null){
      this.cardService.getCards(cardName, this.offset).subscribe((res) =>{
      this.cards = [...this.cards, ...res];
    });
  }

}
