import {Coordinates} from './Coordinates'
export class Cell {
    
    coordinates: Coordinates;
    isAvailable: boolean;
    isOccupied: boolean;

    constructor(isAvailable: boolean, isOccupied: boolean, coordinates: Coordinates) {
        
        this.isAvailable = isAvailable;
        this.isOccupied = isOccupied;
        this.coordinates = coordinates;
    }
    setAvailability(state: boolean) {
        this.isAvailable = state;
    }
    setOccupacy(state: boolean) {
        this.isOccupied = state;
    }
   
}