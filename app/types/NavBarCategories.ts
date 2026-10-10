export type MarketPrice = {
  market: string;
  division: string;
  min: number;
  max: number;
};

export type NavBarCategories = {
  id: number;
  slug: string;
  icon:string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
  markets: MarketPrice[];
};