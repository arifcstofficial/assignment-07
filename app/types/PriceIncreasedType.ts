export interface PriceIncreasedType{   
    id: string,
    categoryIcon:string,
    nameBn: string,
    today:number,
    change: {
        dir:"up"|"down"|"flat",
        pct:number,
    },
  }
