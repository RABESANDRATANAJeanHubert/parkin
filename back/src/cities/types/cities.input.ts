import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateCityInput {

  @Field(() => String)
  country_id: string;

  @Field(() => String)
  name: string;

}

@InputType()
export class UpdateCityInput extends CreateCityInput {
  @Field(() => Int)
  id: number;
}
