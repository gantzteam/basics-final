import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  @Input() in
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.params['id'];
  }

}
