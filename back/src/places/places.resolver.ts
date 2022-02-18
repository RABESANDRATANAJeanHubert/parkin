import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlaceService } from './places.service';
import { Place } from './places.entity';
import { CreatePlaceInput } from './types/places.input';
import { UpdatePlaceInput } from './types/update-places.input';

@Resolver(() => Place)
export class PlaceResolver {
  // access a notre service
  constructor(private  placeService: PlaceService) {}

  //Permet de creer une Place
  @Mutation(() => Place)
  async createPlace(@Args('input') input: CreatePlaceInput) {
    const place = new Place();
    Object.assign(place, input);
    return this.placeService.save(place);
  }

  // Permet de modifier un nouveau Place
  @Mutation(() => Place)
  async updatePlace(@Args('input') input: UpdatePlaceInput) {
    const { id, ...res } = input;
    const place = await this.placeService.findOne(id);
    Object.assign(place, res);
    return this.placeService.save(place);
  }

  // Supprimer une vehicule
  @Mutation(() => Place)
  removePlace(@Args('id', { type: () => Int }) id: number) {
    return this.placeService.remove(id);
  }

// Selectionner la liste de tous les vehicule
  @Query(() => [Place])
  places() {
    return this.placeService.findAll();
  }

}
