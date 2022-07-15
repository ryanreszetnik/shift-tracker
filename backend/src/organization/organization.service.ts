import { Employee } from '@entities/employee.entity';
import { Organization } from '@entities/organization.entity';
import { Role } from '@entities/role.entity';
import { RoleType } from '@entities/roleType.entity';
import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private orgRepository: Repository<Organization>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(RoleType)
    private roleTypeRepository: Repository<RoleType>,
  ) {}
  async create(name: string, admin: User) {
    const organization = await this.orgRepository.save({
      name,
    });
    const adminRoleType = await this.roleTypeRepository.save({
      name: 'admin',
      organization,
    });
    const employee = await this.employeeRepository.save({
      user: admin,
      organization,
    });
    await this.roleRepository.save({
      roleType: adminRoleType,
      employee,
    });
    return await this.orgRepository.findOne({
      where: { id: organization.id },
      relations: {
        employees: { roles: { roleType: true }, user: true },
        roleTypes: true,
      },
    });
  }

  findAll() {
    return `This action returns all organization`;
  }

  async findOne(id: number) {
    return await this.orgRepository.findOne({
      where: { id },
      relations: {
        employees: { user: true, roles: { roleType: true } },
        locations: true,
        roleTypes: true,
        shifts: true,
        payments: true,
      },
    });
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  async remove(id: number) {
    return await this.orgRepository.delete({ id });
  }
}
