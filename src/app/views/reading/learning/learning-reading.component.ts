import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ReadingService} from '../../../services/reading.service';
import {Reading} from '../../../models/reading.model';
import {ActivatedRoute} from '@angular/router';
import {ReadingTableComponent} from '../reading-table/reading-table.component';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  templateUrl: 'learning-reading.component.html'
})
export class LearningReadingComponent implements OnInit, OnChanges {

  headers: string[];
  readingSamplesForPractice: Array<Reading>;

  @ViewChild(ReadingTableComponent) readingTableComponent: ReadingTableComponent;

  // primaryModal is a template variable in learning-reading.component.html
  @ViewChild('primaryModal') public primaryModal: ModalDirective;

  constructor(private readingService: ReadingService
  ) {
    // Table data
    this.headers = ['ID', 'Title'];
    this.readingSamplesForPractice = this.readingService.getReadingSamplesForPractice();
  }

  ngOnInit(): void {
    console.log('LearningReadingComponent.ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('LearningReadingComponent.ngOnChanges');
  }

  refresh() {
    console.log('refresh');
    this.readingTableComponent.refresh();
    this.primaryModal.hide();
  }
}
