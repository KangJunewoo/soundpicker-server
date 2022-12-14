import { Injectable } from '@nestjs/common'

// 실제 유저엔티티 나타내는 인터페이스
export type User = {
  email: string
  nickname: string
  password: string
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      email: 'a@a.a',
      nickname: 'junu',
      password: 'asdf',
    },
    {
      email: 'b@b.b',
      nickname: 'wunu',
      password: 'qwer',
    },
  ]

  // email password nickname
  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email == email)
  }
}
