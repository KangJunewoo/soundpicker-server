import { Controller, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Controller('users')
export class UsersController {
  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signIn(@Req() req) {
    return req.user
  }
}
