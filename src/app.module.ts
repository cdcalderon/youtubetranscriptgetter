import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeTranscriptModule } from './youtube-transcript/youtube-transcript.module';

@Module({
  imports: [YoutubeTranscriptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
