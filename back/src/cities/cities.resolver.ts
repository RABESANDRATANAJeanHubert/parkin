import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CityService } from './cities.service';
import { City } from './cities.entity';
import { CreateCityInput } from './types/cities.input';
import { UpdateCityInput } from './types/update-cities.input';

@Resolver(() => City)
export class CityResolver {
  // access a notre service
  constructor(private  cityService: CityService) {}

  //Permet de creer une country
  @Mutation(() => City)
  async createCountry(@Args('input') input: CreateCityInput) {
    const cities = new City();
    Object.assign(cities, input);
    return this.cityService.save(cities);
  }

  // Permet de modifier un nouveau country
  @Mutation(() => City)
  async updateCountry(@Args('input') input: UpdateCityInput) {
    const { id, ...res } = input;
    const cities = await this.cityService.findOne(id);
    Object.assign(cities, res);
    return this.cityService.save(cities);
  }

  // Supprimer une country
  @Mutation(() => City)
  removeCountry(@Args('id', { type: () => Int }) id: number) {
    return this.cityService.remove(id);
  }

// Selectionner la liste de tous les country
  @Query(() => [City])
  cities() {
    return this.cityService.findAll();
  }

}
