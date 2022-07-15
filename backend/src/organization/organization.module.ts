import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from '@entities/organization.entity';
import { Employee } from '@entities/employee.entity';
import { Role } from '@entities/role.entity';
import { RoleType } from '@entities/roleType.entity';
import { UserService } from 'src/user/user.service';
import { User } from '@entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, Employee, Role, RoleType, User]),
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService, UserService],
})
export class OrganizationModule {}
