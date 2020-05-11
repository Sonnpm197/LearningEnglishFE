export class YoutubeResponseDTO {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj: any) {
    this.title = obj && obj.title || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl || null;
  }
}
