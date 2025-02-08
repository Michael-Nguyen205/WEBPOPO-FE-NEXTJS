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
    price: number | null;                      // Giá tổng cộng, có thể là `null`
    packages_id: number | null;               // ID của gói, có thể là `null`
    product_id: number | null;                // ID sản phẩm, có thể là `null`
    deposit_percent: number;                  // Phần trăm đặt cọc
    payment_condition_on_budget: PaymentConditionOnBudget[]; // Danh sách điều kiện thanh toán dựa trên ngân sách
    payment_condition_on_monthly: PaymentConditionOnMonthly[]; // Danh sách điều kiện thanh toán hàng tháng
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
  };
  