export class MeterReading{

    constructor(
        public readingId: number,
        public customerId: string,
        public submissionDate: string,
        public elecReadingDay: number,
        public elecReadingNight: number,
        public gasReading: number
    ){}
}