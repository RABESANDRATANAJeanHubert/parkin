import { Injectable } from '@nestjs/common';
import { UpdateCountryInput } from './types/countries.input';

import { Country } from './countries.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CountryService {

  constructor(
    @InjectRepository(Country)
    private repository: Repository<Country>,
  ) { }
  
  async save(country: Country) {
    return this.repository.save(country);
  }

  async findAll(): Promise<Country[]> {

    return this.repository.find({
      order: { country_code: 'ASC', name:'ASC'},
    });
  }

  async findOne(id: number): Promise<Country> {
    return this.repository.findOne(id);
  }

  update(id: number, updateCountryInput: UpdateCountryInput) {
    return `This action updates a #${id} country`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} country`;
  }


}
