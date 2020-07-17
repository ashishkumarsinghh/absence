import { Module } from '@nestjs/common';
import { AbsencesController } from './absences/absences.controller';
import { AbsencesService } from './absences/absences.service';
import { MemberModule } from 'src/member/member.module';

@Module({
  controllers: [AbsencesController],
  providers: [AbsencesService],
  imports: [MemberModule],
})
export class AbsencesModule {}
