import { Injectable } from '@nestjs/common';
import absences from './absences';
@Injectable()
export class AbsencesService {
  absenceArr = absences.payload;
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
}
