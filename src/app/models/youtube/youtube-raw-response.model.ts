import {YoutubeId} from './youtube-id.model';
import {YoutubeSnippet} from './youtube-snippet.model';

export class YoutubeRawResponse {

  kind: string;
  etag: string;
  id: YoutubeId;
  snippet: YoutubeSnippet;

}
