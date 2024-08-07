import { IsString } from "class-validator"

export class CreateUserDTO {
  @IsString()
  username: string

  @IsString()
  firstname: string

  @IsString()
  email: string

  @IsString()
  password: string
}