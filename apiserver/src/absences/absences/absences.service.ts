import { Injectable } from '@nestjs/common';
import absences from './absences';
import * as ical from 'ical-generator';
import * as fs from 'fs';
import { MemberService } from 'src/member/member/member.service';
@Injectable()
export class AbsencesService {
  absenceArr = absences.payload;
  memberService = new MemberService();
  cal = ical({ domain: 'crewmeister.com', name: 'Absences ICal' });
  getAbsences(): any {
    return this.absenceArr;
  }

  getAbsencesOfUser(userId: string): any {
    const absOfuser = this.absenceArr.filter(
      item => item.userId.toString() === userId,
    );
    return absOfuser;
  }
  getAbsencesInRange(startDate: string, endDate: string): any {
    const absInRange = this.absenceArr.filter(
      item =>
        new Date(item.endDate) <= new Date(endDate) &&
        new Date(item.endDate) >= new Date(startDate),
    );
    return absInRange;
  }

  getICalFile(): any {
    const events = this.absenceArr.map(item => {
      const mName = this.memberService.getMemberName(item.userId.toString());
      const startDate = new Date(item.startDate);
      const endDate = new Date(item.endDate);
      const ea = {
        start: startDate,
        end: endDate,
        title: `${mName} ${item.type}`,
        summary: `${item.memberNote}`,
      };
      return ea;
    });
    this.cal.events(events);
    return this.cal;
  }
}
