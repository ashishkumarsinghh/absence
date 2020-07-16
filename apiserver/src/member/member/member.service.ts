import { Injectable } from '@nestjs/common';
import members from './members';
@Injectable()
export class MemberService {
  membersArr = members.payload;
  getMembers(): any {
    return members;
  }
  getMemberName(userId: string): any {
    this.membersArr.forEach(item => {
      if (item.userId.toString() === userId) {
        return item.name;
      }
    });
    return null;
  }
}
