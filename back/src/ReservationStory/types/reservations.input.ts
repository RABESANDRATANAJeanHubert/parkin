import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateReservationInput {

  @Field(() => Date)
  arrivedAt: Date;

  @Field(() => Date)
  reservedAt: Date;

  @Field(() => Date)
  freeAt: Date;

  @Field(() => Date)
  givenTo: Date;
  
}

@InputType()
export class UpdateReservationInput extends CreateReservationInput {
  @Field(() => Int)
  id: number;
}
