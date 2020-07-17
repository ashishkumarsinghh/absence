import { Module } from '@nestjs/common';
import { MemberService } from './member/member.service';
import { MemberController } from './member/member.controller';

@Module({
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService],
})
export class MemberModule {}
