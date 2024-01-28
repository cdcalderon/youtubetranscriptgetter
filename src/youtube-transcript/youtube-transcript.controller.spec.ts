import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeTranscriptController } from './youtube-transcript.controller';
import { YoutubeTranscriptService } from './youtube-transcript.service';

describe('YoutubeTranscriptController', () => {
  let controller: YoutubeTranscriptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubeTranscriptController],
      providers: [
        {
          provide: YoutubeTranscriptService,
          useValue: {
            // Mock implementation or Jest.fn()
          },
        },
      ],
    }).compile();

    controller = module.get<YoutubeTranscriptController>(YoutubeTranscriptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // other tests...
});
