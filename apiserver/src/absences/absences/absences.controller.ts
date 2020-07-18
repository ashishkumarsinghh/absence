import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { AbsencesService } from './absences.service';
import { Response } from 'express';
import { join } from 'path';
@Controller('absences')
export class AbsencesController {
  constructor(private readonly absencesService: AbsencesService) {}
  @Get()
  getAbsencese(): any {
    return this.absencesService.getAbsences();
  }

  @Get('/range')
  getAbsencesInRange(
    @Query('startDate') sd: string,
    @Query('endDate') ed: string,
  ): any {
    return this.absencesService.getAbsencesInRange(sd, ed);
  }

  @Get('/ltype/:lType')
  getAbsenceByType(@Param('lType') lType: string): any {
    return this.absencesService.getAbsenceByType(lType);
  }

  @Get('/uid/:name')
  getAbsencesOfUser(@Param('name') name: string): any {
    return this.absencesService.getAbsencesByName(name);
  }

  @Get('/export')
  getICalFile(@Res() res: Response): any {
    this.absencesService.getICalFile().save('calendar.ics', (err, file) => {
      if (err) res.send(err);
      else {
        res.sendFile(join(process.cwd(), 'calendar.ics'));
      }
    });
  }
}
