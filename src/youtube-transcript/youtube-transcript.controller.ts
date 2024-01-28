// youtube-transcript.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { YoutubeTranscriptService } from './youtube-transcript.service';

@Controller('transcript')
export class YoutubeTranscriptController {
  constructor(private readonly transcriptService: YoutubeTranscriptService) {}

  @Get(':videoId')
  getTranscript(@Param('videoId') videoId: string) {
    return this.transcriptService.fetchTranscript(videoId);
  }
}
