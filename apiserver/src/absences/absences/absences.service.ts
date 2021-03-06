import { Injectable } from '@nestjs/common';
import absences from './absences';
import * as ical from 'ical-generator';
import { MemberService } from 'src/member/member/member.service';
@Injectable()
export class AbsencesService {
  constructor(private readonly memberService: MemberService) {}
  absenceArr = absences.payload;
  cal = ical({ domain: 'crewmeister.com', name: 'Absences ICal' });
  getAbsences(): any {
    return this.absenceArr;
  }

  getAbsencesOfUser(userId: string): any {
    const absOfuser = this.absenceArr.filter(
      item => item.userId.toString() === userId,
    );
    const result = absOfuser.map(item => {
      const name = this.memberService.getMemberName(item.userId.toString());
      return { name, startDate: item.startDate, endDate: item.endDate };
    });
    return result;
  }
  getAbsencesByName(name: string): any {
    const uid = this.memberService.getMemberId(name);
    return this.getAbsencesOfUser(uid);
  }
  getAbsencesInRange(startDate: string, endDate: string): any {
    const absInRange = this.absenceArr.filter(
      item =>
        new Date(item.endDate) <= new Date(endDate) &&
        new Date(item.endDate) >= new Date(startDate),
    );
    const result = absInRange.map(item => {
      const name = this.memberService.getMemberName(item.userId.toString());
      return { name, startDate: item.startDate, endDate: item.endDate };
    });
    return result;
  }

  getAbsenceByType(lType: string): any {
    let res: Array<any>;
    if (lType === 'vacation') {
      res = this.absenceArr.filter(item => item.type == 'vacation');
    } else if (lType === 'sickness') {
      res = this.absenceArr.filter(item => item.type == 'sickness');
    } else res = [];
    const result = res.map(item => {
      const name = this.memberService.getMemberName(item.userId);
      return { name, startDate: item.startDate, endDate: item.endDate };
    });
    return result;
  }
  getICalFile(): any {
    const events = this.absenceArr.map(item => {
      const mName = this.memberService.getMemberName(item.userId.toString());
      const startDate = new Date(item.startDate);
      const endDate = new Date(item.endDate);
      const ea = {
        start: startDate,
        end: endDate,
        summary: `${mName} - ${item.type} - ${item.memberNote}`,
      };
      return ea;
    });
    this.cal.events(events);
    return this.cal;
  }
}
