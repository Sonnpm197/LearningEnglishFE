import {Component, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Reading} from "../../../models/reading.model";
import {ReadingService} from "../../../services/reading.service";

@Component({
  templateUrl: './reading-detail.component.html'
})
export class ReadingDetailComponent {

  reading: Reading;
  myCurrentPage: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private readingService: ReadingService
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.reading = this.readingService.getReadingSampleById(params.id);
    });

    this.activatedRoute.queryParams.subscribe(queryParams => {
       this.myCurrentPage = queryParams.myCurrentPage;
    });
  }

  backToHome() {
    this.router.navigate(['/reading/learning'], {
      queryParams: {
        myCurrentPage: this.myCurrentPage // pass this param back to keep pagination state
      }
    });
  }

}
