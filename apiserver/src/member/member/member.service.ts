import { Injectable } from '@nestjs/common';
import members from './members';
@Injectable()
export class MemberService {
  membersArr = members.payload;
  getMembers(): any {
    return members;
  }
  getMemberName(userId: string): any {
    //console.log('queerid', userId);
    let name;
    this.membersArr.forEach(item => {
      //console.log(item.userId.toString());
      if (item.userId.toString() == userId.toString()) {
        //console.log('matched');
        name = item.name.toString();
        return;
      }
    });
    return name;
  }
}
