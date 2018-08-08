import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  template:
  `
  <p>
    feedback works!
  </p>
  <a [routerLink]="['/feedback','44','Benny']">44 Benny</a>
  `,
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.params['name']);
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      console.log('param only' + params['id']);
      console.log(params['name']);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
