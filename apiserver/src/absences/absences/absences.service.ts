import { Injectable } from '@nestjs/common';
import absences from './absences';
@Injectable()
export class AbsencesService {
  getAbsences(): any {
    return absences;
  }
}
