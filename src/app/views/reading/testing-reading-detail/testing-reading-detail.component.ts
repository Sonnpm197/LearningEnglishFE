import {Component, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Reading} from "../../../models/reading.model";
import {ReadingService} from "../../../services/reading.service";
import {ReadingTest} from '../../../models/reading-test.model';

@Component({
  templateUrl: './testing-reading-detail.component.html'
})
export class TestingReadingDetailComponent {

  readingTest: ReadingTest;
  myCurrentPage: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private readingService: ReadingService
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.readingTest = this.readingService.getReadingTestById(params.id);
    });

    this.activatedRoute.queryParams.subscribe(queryParams => {
       this.myCurrentPage = queryParams.myCurrentPage;
    });
  }

  backToHome() {
    this.router.navigate(['/reading/testing'], {
      queryParams: {
        myCurrentPage: this.myCurrentPage // pass this param back to keep pagination state
      }
    });
  }

}
