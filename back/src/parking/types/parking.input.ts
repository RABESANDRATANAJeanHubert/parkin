import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateParkingInput {

  @Field(() => String)
  address: string;

  @Field(() => String)
  type: string;

}

@InputType()
export class UpdateParkingInput extends CreateParkingInput {
  @Field(() => Int)
  id: number;
}
