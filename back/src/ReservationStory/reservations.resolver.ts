import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReservationService } from './reservations.service';
import { Reservation } from './reservations.entity';
import { CreateReservationInput } from './types/reservations.input';
import { UpdateReservationInput } from './types/update-reservations.input';

@Resolver(() => Reservation)
export class ReservationResolver {
  // access a notre service
  constructor(private  reservationService: ReservationService) {}

  //Permet de creer une reservations
  @Mutation(() => Reservation)
  async createReservation(@Args('input') input: CreateReservationInput) {
    const reservations = new Reservation();
    Object.assign(reservations, input);
    return this.reservationService.save(reservations);
  }

  // Permet de modifier un nouveau reservations
  @Mutation(() => Reservation)
  async updateReservation(@Args('input') input: UpdateReservationInput) {
    const { id, ...res } = input;
    const reservations = await this.reservationService.findOne(id);
    Object.assign(reservations, res);
    return this.reservationService.save(reservations);
  }

  // Supprimer une reservations
  @Mutation(() => Reservation)
  removeReservation(@Args('id', { type: () => Int }) id: number) {
    return this.reservationService.remove(id);
  }

// Selectionner la liste de tous les reservations
  @Query(() => [Reservation])
  reservations() {
    return this.reservationService.findAll();
  }

}
