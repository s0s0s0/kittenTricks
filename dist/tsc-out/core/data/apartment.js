import { imageApartment1, imageApartment2, imageApartment3, imageApartment4, imageApartment5, } from '../../assets/images';
/* tslint:disable */
class GuestsFacility {
    constructor(count) {
        this.count = count;
    }
    get title() {
        return `${this.count} Guests`;
    }
}
class BedsFacility {
    constructor(count) {
        this.count = count;
    }
    get title() {
        return `${this.count} Bed`;
    }
}
class BathFacility {
    constructor(count) {
        this.count = count;
    }
    get title() {
        return `${this.count} Baths`;
    }
}
const wifiFacility = {
    title: 'Wi-Fi',
    icon: require('../../assets/icons/eva/wifi-outline.png'),
};
const tvFacility = {
    title: 'TV',
    icon: require('../../assets/icons/eva/tv.png'),
};
const freeParkingFacility = {
    title: 'Free Parking',
    icon: require('../../assets/icons/eva/car.png'),
};
export const apartment1 = {
    title: 'Private Rooms with Central Park View',
    description: 'The apartment consists of 2 separate bedrooms, 1 bathroom with a hair dryer. A flat-screen TV and Blu-ray player are available.\n\nRodin Museum is 4.2 km from the apartment, while Orsay Museum is 5 km away. The nearest airport is Paris - Orly Airport, 13 km from the property.',
    price: 10,
    primaryFacilities: [
        new GuestsFacility(2),
        new BedsFacility(2),
        new BathFacility(2),
    ],
    facilities: [
        wifiFacility,
        tvFacility,
        freeParkingFacility,
    ],
    primaryPhoto: imageApartment1,
    photos: [
        imageApartment2,
        imageApartment3,
        imageApartment4,
        imageApartment5,
    ],
};
//# sourceMappingURL=apartment.js.map