import { Injectable } from '@nestjs/common';
import members from './members';
@Injectable()
export class MemberService {
  getMembers(): any {
    return members;
  }
}
