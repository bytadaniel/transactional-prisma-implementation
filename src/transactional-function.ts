import { AircraftService } from "./aircraft.service"
import { transactional } from '@transactional/core'

(async () => {
  const service = new AircraftService();

  const createAircraftsInTransaction = transactional(async () => {
    await service.createAircraft();
    await service.createAircraft();

    throw new Error('Some error');
  })

  await createAircraftsInTransaction()

})()