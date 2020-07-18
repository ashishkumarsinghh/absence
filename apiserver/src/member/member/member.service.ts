import { Injectable } from '@nestjs/common';
import members from './members';
@Injectable()
export class MemberService {
  membersArr = members.payload;
  getMembers(): any {
    return members;
  }

  getMemberId(name: string): any {
    let uid;
    this.membersArr.forEach(item => {
      if (item.name.toLowerCase() == name.toLowerCase()) {
        uid = item.userId.toString();
        return;
      }
    });
    return uid;
  }
  getMemberName(userId: string): any {
    let name;
    this.membersArr.forEach(item => {
      if (item.userId.toString() == userId.toString()) {
        name = item.name.toString();
        return;
      }
    });
    return name;
  }
}
