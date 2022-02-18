import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CountryService } from './countries.service';
import { Country } from './countries.entity';
import { CreateCountryInput } from './types/countries.input';
import { UpdateCountryInput } from './types/update-countries.input';

@Resolver(() => Country)
export class CountryResolver {
  // access a notre service
  constructor(private  countryService: CountryService) {}

  //Permet de creer une country
  @Mutation(() => Country)
  async createCountry(@Args('input') input: CreateCountryInput) {
    const countries = new Country();
    Object.assign(countries, input);
    return this.countryService.save(countries);
  }

  // Permet de modifier un nouveau country
  @Mutation(() => Country)
  async updateCountry(@Args('input') input: UpdateCountryInput) {
    const { id, ...res } = input;
    const countries = await this.countryService.findOne(id);
    Object.assign(countries, res);
    return this.countryService.save(countries);
  }

  // Supprimer une country
  @Mutation(() => Country)
  removeCountry(@Args('id', { type: () => Int }) id: number) {
    return this.countryService.remove(id);
  }

// Selectionner la liste de tous les country
  @Query(() => [Country])
  countries() {
    return this.countryService.findAll();
  }

}
