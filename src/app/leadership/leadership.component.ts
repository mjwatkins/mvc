import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  public data: any[];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        name: "Brian Hinkle",
        phone: "301-980-4712",
        email: "BDHink@gmail.com"
      },
      {
        name: "Lauren Hinkle",
        phone: "301-980-4815",
        email: "RLNicUNurse@gmail.com"
      },
      {
        name: "Doug Phebus",
        phone: "937-554-6001",
      },
      {
        name: "Michelle Phebus",
        phone: "937-305-3081",
      }
    ];
  }

}
