import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { AbsencesModule } from './absences/absences.module';

@Module({
  imports: [MemberModule, AbsencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
