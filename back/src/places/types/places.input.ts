import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreatePlaceInput {

  @Field(() => String)
  availabel: string;

  @Field(() => String)
  currentUser: string;

  @Field(() => String)
  nextUser: string;
}

@InputType()
export class UpdatePlaceInput extends CreatePlaceInput {
  @Field(() => Int)
  id: number;
}
