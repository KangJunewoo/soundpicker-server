import { Controller, Post, Req, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from '../auth/local-auth.guard'

@Controller('users')
export class UsersController {
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Req() req) {
    return req.user
  }
}
