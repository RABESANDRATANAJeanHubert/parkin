import { Resolver, Query, Mutation, Args, Int, ResolveField, Root } from '@nestjs/graphql';
import { ServiceService } from './service.service';
import { Service } from './service.entity';
import { CreateServiceInput } from './types/input';
import { UpdateServiceInput } from './types/update-service.input';
import { Employe } from '../employe/employe.entity';

@Resolver(() => Service)
  
export class ServiceResolver {
  employeService: any;
  constructor(private serviceService: ServiceService) {}

  @Mutation(() => Service)
  async createService(@Args('input') input: CreateServiceInput) {
    const service = new Service();
    Object.assign(service, input);
    return this.serviceService.save(service);
    
  }
  @Mutation(() => Service)
  async updateService(@Args('input') input: UpdateServiceInput) {
    const { id, ...res } = input;
    const service = await this.serviceService.findOne(id);
    Object.assign(service, res);
    return this.serviceService.save(service);
  }

  @Mutation(() => Boolean)
  async removeService(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<boolean> {
    return this.serviceService.remove(id);
  }

  @Query(() => [Service])
  services() {
 return this.serviceService.findAll();

  }

  @Query(() => Service, { name: 'service' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.serviceService.findOne(id);
  }
  
  @ResolveField(() => [Employe])
  employes(@Root() service: Service){
    return this.employeService.findEmployesByService(service.id);
  }
}
