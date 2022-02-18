import { Injectable } from '@nestjs/common';
import { UpdateVehiculeInput } from './types/vehicules.input';

import { Vehicule } from './vehicules.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class VehiculeService {

  constructor(
    @InjectRepository(Vehicule)
    private repository: Repository<Vehicule>,
  ) { }
  
  
  async save(vehicule: Vehicule) {
    return this.repository.save(vehicule);
  }

  async findAll(): Promise<Vehicule[]> {
    return this.repository.find({
      order: { libelle: 'ASC', type:'ASC'},
    });
  }

  async findOne(id: number): Promise<Vehicule> {
    return this.repository.findOne(id);
  }

  update(id: number, updateVehiculeInput: UpdateVehiculeInput) {
    return `This action updates a #${id} vehicule`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} vehicule`;
  }

}
