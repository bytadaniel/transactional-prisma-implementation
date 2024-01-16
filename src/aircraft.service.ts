import { client } from "./prisma-client";
import { Transactional } from "@transactional/core"

export class AircraftService {
  // @Transactional()
  public async createAircraft() {
    const aircraft = await client.aircraft.create({
      data: {
        manufacturerDate: new Date(),
        regNumber: Date.now().toString(),
        inService: new Date(),
        companies: {
          connect: {
            id: '935de438-aba4-40af-bd95-dd0caf78ffc8'
          }
        },
        aircraftModel: {
          connect: {
            id: '065ed5f0-fe25-4f2b-9a93-2bd0f0e25910'
          }
        }
      }
    });

    console.log(aircraft);

    return aircraft
  }
}