export type PaymentConditionOnBudget = {
    min_budget: number;
    max_budget: number;
    fixed_fee: number;
    percentage_fee: number;
  };
  
  export type PaymentConditionOnMonthly = {
    id: number;
    price: number;
    duration_months: number;
  };
  
  export type PackageImage = {
    image: string | null;
  };
  
  export type PackageFeature = {
    id: number;
    feature: string;
    packageId: number;
  };
  
  export type PaymentTerm = {
    price?: number;
  };
  
  export type Package = {
    id: number;
    name: string;
    description: string;
    deposit: number;
    categories_id: number;
    packages_images: PackageImage[];
    packages_feature: PackageFeature[];
    payment_term: PaymentTerm;
    payment_condition_on_budget: PaymentConditionOnBudget[];
    payment_condition_on_monthly: PaymentConditionOnMonthly[];
  };
  