import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  lastName: string;

  @Field(() => String)
  firstName: string;

  @Field(() => Int)
  role: number;
  
  @Field(() => String)
  nickName: string;

  @Field(() => String)
  publicName: string;

  @Field(() => String)
  biography: string;

  @Field(() => String)
  confirmed: string;

  @Field(() => String)
  contacts: string;
  
  @Field(() => String, { nullable: true })
  username?: string;
}

@InputType()
export class UpdateUserInput extends CreateUserInput {
  @Field(() => Int)
  id: number;
}
