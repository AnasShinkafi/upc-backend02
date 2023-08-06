import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';;
import { RegisterAdminService } from './register-admin.service';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from './role.enum';
import { LocalAuthGuard } from 'src/auth/guards/local.guards';
import { Admin } from './entities/register-admin.entity';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { registerAdminDto } from './dto/create-register-admin.dto';


@Controller('register-admin')
export class RegisterAdminController {

  constructor(private readonly registerAdminService: RegisterAdminService){}

  @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Super)  
  @Post()
  registerAdmin(@Body() registerAdminDto: registerAdminDto){
      return this.registerAdminService.registerAdmin(registerAdminDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get()
  getAllAdmins(): Promise<Admin[]> {
    return this.registerAdminService.getAllAdmin();
  }
 
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super) 
  @Get(':id')
  getAdminById(@Param('id') id: number): Promise<Admin> {
    return this.registerAdminService.getAdminById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super)
  @Put(':id')
  updateAdmin(@Param('id') id: number, @Body() registerAdminDto: registerAdminDto): Promise<Admin> {
    return this.registerAdminService.updateAmin(id, registerAdminDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Super)
  @Delete(':id')
  deleteDonation(@Param('id') id: number): Promise<void> {
    return this.registerAdminService.deleteAdmin(id);
  }
}
    