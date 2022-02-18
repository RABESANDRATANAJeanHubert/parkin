import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParkingService } from './parking.service';
import {  Parking } from './parking.entity';
import { CreateParkingInput } from './types/parking.input';
import { UpdateParkingInput } from './types/update-parking.input';

@Resolver(() => Parking)
export class ParkingResolver {
  // access a notre service
  constructor(private  parkingService: ParkingService) {}

  //Permet de creer une vehicule
  @Mutation(() => Parking)
  async createParking(@Args('input') input: CreateParkingInput) {
    const parking = new Parking();
    Object.assign(parking, input);
    return this.parkingService.save(parking);
  }

  // Permet de modifier un nouveau parking
  @Mutation(() => Parking)
  async updateParking(@Args('input') input: UpdateParkingInput) {
    const { id, ...res } = input;
    const parking = await this.parkingService.findOne(id);
    Object.assign(parking, res);
    return this.parkingService.save(parking);
  }

  // Supprimer une vehicule

  @Mutation(() => Parking)
  removeParking(@Args('id', { type: () => Int }) id: number) {
    return this.parkingService.remove(id);
  }

// Selectionner la liste de tous les vehicule
  @Query(() => [Parking])
  parking() {
    return this.parkingService.findAll();
  }

}
