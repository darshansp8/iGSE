export class User {
    constructor(
        public customer_id: string, 
        public password: string, 
        public propertyType: string,
        public bedroomNum: number,
        public address: string,
        public evcCode: string){}
}