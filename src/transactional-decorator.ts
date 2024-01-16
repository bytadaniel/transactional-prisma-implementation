import { Transactional } from '@transactional/core';
import { AircraftService } from './aircraft.service';

export class AircraftWrapper {
  constructor(
    protected readonly aircraftService = new AircraftService(),
  ) {}

  @Transactional()
  public async createAircrafts() {
    await this.aircraftService.createAircraft();
    await this.aircraftService.createAircraft();
    await this.aircraftService.createAircraft();

    throw new Error();
  }
}

async function run() {
  await new AircraftWrapper().createAircrafts();
}

run();