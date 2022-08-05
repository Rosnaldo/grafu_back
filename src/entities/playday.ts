import Address from './address';
import Lot from './lot';

export default class Playday {
  date: Date
  address: Address
  firstLot: Lot
  secoundLot?: Lot
  thirdLo?: Lot
  fourthLot?: Lot
  fifthLot?: Lot
  gallery: string[]
}