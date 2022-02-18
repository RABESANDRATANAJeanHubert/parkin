import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { EmployeModule } from './employe/employe.module';
import { UserModule } from './user/user.module';
import { ServiceModule } from './service/service.module';
import { VehiculeModule } from './vehicules/vehicules.module';
import { CityModule } from './cities/cities.module';
import { CountryModule } from './countries/countries.module';
import { ParkingModule } from './parking/parking.module';
import { PlaceModule } from './places/places.module';
import { connexionOptions } from './configuration/connexionLoader';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => await connexionOptions(),
    }),
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV === 'development',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
      playground: process.env.NODE_ENV === 'development',
      installSubscriptionHandlers: true,
    }),

    EmployeModule,
    UserModule,
    ServiceModule,
    VehiculeModule,
    CountryModule,
    CityModule,
    ParkingModule,
    PlaceModule,
  ],
  
  controllers: [AppController],
  providers: [AppResolver, AppService],
})
export class AppModule {}
