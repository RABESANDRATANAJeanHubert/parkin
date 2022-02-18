import { CreatePlaceInput } from './places.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlaceInput extends PartialType(CreatePlaceInput) {
  @Field(() => Int)
  id: number;
}
