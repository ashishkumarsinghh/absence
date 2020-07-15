import { Module } from '@nestjs/common';
import { AbsencesController } from './absences/absences.controller';
import { AbsencesService } from './absences/absences.service';

@Module({
  controllers: [AbsencesController],
  providers: [AbsencesService]
})
export class AbsencesModule {}
