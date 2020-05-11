import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {YoutubeResponseDTO} from '../../../models/youtube/youtube-response-dto.model';

@Component({
  templateUrl: 'learning-listening.component.html',
})

/**
 * 1. OnChanges will be invoked whenever @Input fields of this component
 *        change their reference from parents (= new Object)
 * 2. If @Input only changes its properties (testPassingObject.title),
 *    =>> change detection will not run on component OnPush and run on Default mode
 */
export class LearningListeningComponent implements OnChanges, OnInit {

  searchResults: YoutubeResponseDTO[];

  testPassingProp: string = null;
  testPassingObject: YoutubeResponseDTO = new YoutubeResponseDTO({title: 'title'});

  setSearchResults(searchResults: YoutubeResponseDTO[]) {
    // console.log(searchResults);
    this.searchResults = searchResults;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.testPassingProp = Math.random().toString();
    // }, 3000);
  }

  changePassingObject() {
    console.log('Clicked');
    this.testPassingObject.title = 'newtitle';
    // this.testPassingObject = new YoutubeResponseDTO({title: 'titleNewRef'});
    return false;
  }
}
