import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterAdminDto } from './create-register-admin.dto';

export class UpdateRegisterAdminDto extends PartialType(CreateRegisterAdminDto) {}
