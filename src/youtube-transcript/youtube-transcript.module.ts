import { Module } from '@nestjs/common';
import { YoutubeTranscriptService } from './youtube-transcript.service';
import { YoutubeTranscriptController } from './youtube-transcript.controller';

@Module({
  providers: [YoutubeTranscriptService],
  controllers: [YoutubeTranscriptController]
})
export class YoutubeTranscriptModule {}
