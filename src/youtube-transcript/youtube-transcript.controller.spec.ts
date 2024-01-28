import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeTranscriptController } from './youtube-transcript.controller';

describe('YoutubeTranscriptController', () => {
  let controller: YoutubeTranscriptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubeTranscriptController],
    }).compile();

    controller = module.get<YoutubeTranscriptController>(YoutubeTranscriptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
