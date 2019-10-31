import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { Person } from '../../model/api.model';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  public persons = [];

  constructor(private _personsService: PersonsService) {}

  ngOnInit() {
    this._personsService.getPersons()
      .subscribe(data => this.persons = data);
  }

}
