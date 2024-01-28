// youtube-transcript.service.ts
import { Injectable } from '@nestjs/common';
import { YoutubeTranscript } from 'youtube-transcript';

@Injectable()
export class YoutubeTranscriptService {
  async fetchTranscript(videoId: string): Promise<string> {
    try {
      const transcriptArray = await YoutubeTranscript.fetchTranscript(videoId);
      const concatenatedTranscript = transcriptArray.map(entry => entry.text).join('\n');
      return concatenatedTranscript;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
