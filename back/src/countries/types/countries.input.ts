import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateCountryInput {

  @Field(() => String)
  country_code: string;

  @Field(() => String)
  name: string;

}

@InputType()
export class UpdateCountryInput extends CreateCountryInput {
  @Field(() => Int)
  id: number;
}
