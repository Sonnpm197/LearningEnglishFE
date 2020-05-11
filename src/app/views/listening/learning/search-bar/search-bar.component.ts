import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {YoutubeResponseDTO} from '../../../../models/youtube/youtube-response-dto.model';
import {fromEvent} from 'rxjs';
import {map, filter, debounceTime, tap, switchAll} from 'rxjs/operators';
import {YoutubeService} from '../../../../services/youtube.service';

@Component({
  selector: 'search-bar-component',
  templateUrl: 'search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit, OnChanges {

  private _testPassingProp: any;

  @Input()
  testPassingObject: YoutubeResponseDTO;

  @Output()
  searchResults: EventEmitter<YoutubeResponseDTO[]>;

  constructor(private elementRef: ElementRef,
              private youtubeService: YoutubeService) {
    this.searchResults = new EventEmitter<YoutubeResponseDTO[]>();
  }

  ngOnInit(): void {
    fromEvent(this.elementRef.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        filter((text: string) => text.length > 3),
        debounceTime(250),
        map((searchString: string) => this.youtubeService.searchVideos(searchString)),
        switchAll()
      ).subscribe((responseDTOs: YoutubeResponseDTO[]) => {
      this.searchResults.emit(responseDTOs);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('SearchBarComponent.ngOnChanges');
  }


  get testPassingProp(): any {
    return this._testPassingProp;
  }

  @Input('testPassingProp')
  set testPassingProp(value: any) {
    this._testPassingProp = value ? value : 'default';
  }
}
