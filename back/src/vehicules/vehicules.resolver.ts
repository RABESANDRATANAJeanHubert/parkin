import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VehiculeService } from './vehicules.service';
import { Vehicule } from './vehicules.entity';
import { CreateVehiculeInput } from './types/vehicules.input';
import { UpdateVehiculeInput } from './types/update-vehicules.input';

@Resolver(() => Vehicule)
export class VehiculeResolver {
  // access a notre service
  constructor(private  vehiculeService: VehiculeService) {}

  //Permet de creer une vehicule
  @Mutation(() => Vehicule)
  async createVehicule(@Args('input') input: CreateVehiculeInput) {
    const vehicule = new Vehicule();
    Object.assign(vehicule, input);
    return this.vehiculeService.save(vehicule);
  }

  // Permet de modifier un nouveau vehicule
  @Mutation(() => Vehicule)
  async updateVehicule(@Args('input') input: UpdateVehiculeInput) {
    const { id, ...res } = input;
    const vehicule = await this.vehiculeService.findOne(id);
    Object.assign(vehicule, res);
    return this.vehiculeService.save(vehicule);
  }

  // Supprimer une vehicule
  @Mutation(() => Vehicule)
  removeVehicule(@Args('id', { type: () => Int }) id: number) {
    return this.vehiculeService.remove(id);
  }

// Selectionner la liste de tous les vehicule
  @Query(() => [Vehicule])
  vehicules() {
    return this.vehiculeService.findAll();
  }

}
