import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constant';
import { JwtStrategy } from './strategy/jwt.strategy';
import { RolesGuard } from './guards/roles.guard';
import { LocalAuthGuard } from './guards/local.guards';
import { RegisterAdminModule } from 'src/register-admin/register-admin.module';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtAuthGuard } from './guards/jwt.guard';


@Module({
  imports: [
    RegisterAdminModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '3600000s' }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtAuthGuard, RolesGuard, LocalAuthGuard, ],
  exports: [AuthService]
})
export class AuthModule {}
 