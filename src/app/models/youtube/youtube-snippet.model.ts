import {YoutubeThumbnail} from './youtube-thumbnail.model';

export class YoutubeSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeThumbnail
  channelTitle: string;
  liveBroadcastContent: string;
}
