import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class CreateVehiculeInput {

  @Field(() => String)
  libelle: string;

  @Field(() => String)
  type: string;

}

@InputType()
export class UpdateVehiculeInput extends CreateVehiculeInput {
  @Field(() => Int)
  id: number;
}
