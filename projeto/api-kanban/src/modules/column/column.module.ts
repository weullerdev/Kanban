import { Module } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnResolver } from './column.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TaskModule } from '../task/task.module';

@Module({
  providers: [ColumnService, ColumnResolver],
  imports: [PrismaModule, TaskModule],
})
export class ColumnModule { }
