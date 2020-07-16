import { Controller, Get, Param, Query } from '@nestjs/common';
import { AbsencesService } from './absences.service';

@Controller('absences')
export class AbsencesController {
  constructor(private readonly absencesService: AbsencesService) {}
  @Get()
  getAbsencese(): any {
    return this.absencesService.getAbsences();
  }

  @Get('/absr')
  getAbsencesInRange(
    @Query('startDate') sd: string,
    @Query('endDate') ed: string,
  ): any {
    return this.absencesService.getAbsencesInRange(sd, ed);
  }

  @Get('/uid/:userId')
  getAbsencesOfUser(@Param('userId') userId: string): any {
    return this.absencesService.getAbsencesOfUser(userId);
  }
}
