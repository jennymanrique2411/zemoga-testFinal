import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../model/api.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input()
  person: Person;
  votes: number;
  upPerc:number;
  downPerc: number;
  selectedIndex = -1;
  voted = false;

  constructor() {
  }

  ngOnInit() {
    this.calculate();
  }

  setSelected(id: number) {
    this.selectedIndex = id;
  }

  doVote() {

    if(!this.voted) {
      if (this.selectedIndex === 1) {
        this.person.UpVote++;
      }
      if (this.selectedIndex === 2) {
        this.person.DownVote++;
      }

      this.voted = true;
    } else {
      this.voted = false;
    }
    this.calculate();
  }

  calculate() {
    this.votes = this.person.UpVote + this.person.DownVote;
    this.upPerc = this.person.UpVote * 100 / this.votes;
    this.downPerc = 100 - this.upPerc;
  }
}
