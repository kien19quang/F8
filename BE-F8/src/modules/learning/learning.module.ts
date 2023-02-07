import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackController } from './controllers/track.controller';
import { TrackStepController } from './controllers/trackStep.controller';
import { TrackSchema } from './models/track.model';
import { TrackStepSchema } from './models/trackStep.model';
import { TrackRepository } from './repositories/track.repository';
import { TrackStepRepository } from './repositories/trackStep.repository';
import { TrackService } from './services/track.service';
import { TrackStepService } from './services/trackStep.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Track', schema: TrackSchema },
      { name: 'TrackStep', schema: TrackStepSchema },
    ]),
  ],
  controllers: [TrackController, TrackStepController],
  providers: [
    TrackRepository,
    TrackStepRepository,
    TrackService,
    TrackStepService,
  ],
})
export class LearningModule {}
