import { Controller, Get, Param } from '@nestjs/common';
import { AbsencesService } from './absences.service';

@Controller('absences')
export class AbsencesController {
  constructor(private readonly absencesService: AbsencesService) {}
  @Get()
  getAbsencese(): any {
    return this.absencesService.getAbsences();
  }

  @Get('/:userId')
  getAbsencesOfUser(@Param('userId') userId: string): any {
    return this.absencesService.getAbsencesOfUser(userId);
  }
}
