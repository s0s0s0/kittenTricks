export class YearDetail {
    constructor(year) {
        this.description = 'Year';
        this.year = year;
    }
    get value() {
        return this.year;
    }
}
export class CountryDetail {
    constructor(country) {
        this.description = 'Country';
        this.country = country;
    }
    get value() {
        return this.country;
    }
}
export class LengthDetail {
    constructor(length) {
        this.description = 'Length';
        this.length = length;
    }
    get value() {
        return `${this.length} min`;
    }
}
//# sourceMappingURL=movie.model.js.map