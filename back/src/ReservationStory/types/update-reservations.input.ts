import { CreateReservationInput } from './reservations.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReservationInput extends PartialType(CreateReservationInput) {
  @Field(() => Int)
  id: number;
}
