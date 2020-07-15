import { Controller, Get } from '@nestjs/common';
import { AbsencesService } from './absences.service';

@Controller('absences')
export class AbsencesController {
  constructor(private readonly absencesService: AbsencesService) {}
  @Get()
  getAbsencese(): any {
    return this.absencesService.getAbsences();
  }
}
