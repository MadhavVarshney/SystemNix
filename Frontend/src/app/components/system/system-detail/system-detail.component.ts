import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-system-detail',
  templateUrl: './system-detail.component.html',
  styleUrls: ['./system-detail.component.scss']
})
export class SystemDetailComponent implements OnInit {

  systemId: number = 0;
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.systemId = +this.activatedRouter.snapshot.params['id'];

    this.activatedRouter.params.subscribe((param) => {
      this.systemId = +param['id'];
    });
  }

  backToList(){
    this.router.navigate(['/'])
  }

  nextPage(){
    this.systemId += 1;
    this.router.navigate(['system-detail', this.systemId])
  }

}
