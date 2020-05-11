import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YoutubeResponseDTO} from '../models/youtube/youtube-response-dto.model';
import {YoutubeRawResponse} from '../models/youtube/youtube-raw-response.model';
import {map} from 'rxjs/operators';

@Injectable()
export class YoutubeService {

  searchResults: YoutubeResponseDTO[] = [];

  constructor(@Inject('YOUTUBE_API_KEY') private YOUTUBE_API_KEY: string,
              @Inject('YOUTUBE_REQUEST_URL') private YOUTUBE_REQUEST_URL: string,
              @Inject('YOUTUBE_VIDEO_URL') private YOUTUBE_VIDEO_URL: string,
              private httpClient: HttpClient,
  ) {

  }

  searchVideos(q: string): Observable<YoutubeResponseDTO[]> {
    const params = [
      `part=snippet`,
      `q=${q}`,
      `key=${this.YOUTUBE_API_KEY}`,
      `maxResults=10`
    ].join('&');

    const requestUrl = `${this.YOUTUBE_REQUEST_URL}?${params}`;

    return this.httpClient.get<any>(requestUrl).pipe(
      map((response: any) => {
        return response.items.map((item: YoutubeRawResponse) => {
          // console.log(item);
          return new YoutubeResponseDTO({
            title: item.snippet.title,
            thumbnailUrl: item.snippet.thumbnails.default.url,
            videoUrl: `${this.YOUTUBE_VIDEO_URL + item.id.videoId}`
          });
        });
      })
    );
  }

}
