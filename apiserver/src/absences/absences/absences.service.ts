import { Injectable } from '@nestjs/common';
import absences from './absences';
@Injectable()
export class AbsencesService {
  absenceArr = absences.payload;
  getAbsences(): any {
    console.log(this.absenceArr);
    return this.absenceArr;
  }

  getAbsencesOfUser(userId: string): any {
    const absOfuser = this.absenceArr.filter(
      item => item.userId.toString() === userId,
    );
    return absOfuser;
  }
}
