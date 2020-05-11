import {
  ChangeDetectionStrategy,
  Component, ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {YoutubeResponseDTO} from '../../../../models/youtube/youtube-response-dto.model';
import {ListeningRefreshPopupComponent} from '../refresh-popup/refresh-popup.component';

@Component({
  selector: 'search-results-component',
  templateUrl: 'search-results.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnChanges {

  @Input()
  searchResults: YoutubeResponseDTO[];

  @Input()
  testPassingProp: string;

  @Input()
  testPassingObject: YoutubeResponseDTO;

  @ViewChild('refreshPopUp', {read: ViewContainerRef}) refreshViewRef: ViewContainerRef;
  refreshComponentRef: ComponentRef<ListeningRefreshPopupComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('SearchResultsComponent.ngOnChanges');
  }

  refreshSearchResults() {
    this.searchResults = null;
    this.openRefreshPopUp();
  }

  openRefreshPopUp() {
    if (!this.refreshComponentRef) {
      const popupComponent = this.componentFactoryResolver
        .resolveComponentFactory(ListeningRefreshPopupComponent);
      this.refreshComponentRef = this.refreshViewRef.createComponent(popupComponent);
    }

    this.refreshComponentRef.instance.message = 'Clear youtube search results';
  }

  closeRefreshPopUp() {
    this.refreshComponentRef.destroy();
    delete this.refreshComponentRef;
  }
}
