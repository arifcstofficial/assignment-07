export interface PriceIncreasedType{   
    id: string,
    image:string,
    nameBn: string,
    today:number,
    change: {
        dir:"up"|"down"|"flat",
        pct:number,
    },
  }
