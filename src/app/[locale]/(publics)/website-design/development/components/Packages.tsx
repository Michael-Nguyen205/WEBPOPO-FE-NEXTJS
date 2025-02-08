import { useCart } from "@/shared/hooks/useCard";
import { useTranslations } from "next-intl";
import { Package } from "@/shared/types/PackagesTypes"; // Import kiểu dữ liệu Package từ file types của bạn

interface PackagesProps {
  packages: Package[];
}
const Packages: React.FC<PackagesProps> = ({ packages }) => {
  const t = useTranslations("WebsiteDesignDevelopment"); // Đa ngôn ngữ
  const { addToCart } = useCart(); // Hook giỏ hàng

  if (!packages || !Array.isArray(packages)) {
    return <p>No packages available</p>; // Hiển thị khi `packages` không phải là mảng
  }

  return (
    <div>
      <header>
        <h1>{t("title")}</h1>
      </header>
      <div className="flex flex-wrap gap-6 justify-start">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="package-card max-w-xs p-6 bg-white rounded-lg border shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900">{pkg.name}</h2>
            <p className="text-gray-700 mt-2">{pkg.description}</p>

            {/* Tính năng */}
            <ul className="mt-4 space-y-2">
              {pkg.packages_feature.map((feature) => (
                <li key={feature.id} className="text-gray-600">
                  {feature.feature}
                </li>
              ))}
            </ul>

            {/* Điều kiện thanh toán */}
            <div className="mt-4">
     
              <div className="mt-2">
              <ul className="text-gray-600 space-y-2">
  {pkg.payment_term.payment_condition_on_budget &&
  pkg.payment_term.payment_condition_on_budget.length > 0 ? (
    <>
      <h4 className="font-semibold">On Budget:</h4>
      {pkg.payment_term.payment_condition_on_budget.map((condition, idx) => (
        <li key={idx}>
          Min Budget: ${condition.min_budget}, Max Budget: $
          {condition.max_budget}, Fixed Fee: ${condition.fixed_fee}, Percentage
          Fee: {condition.percentage_fee}%
        </li>
      ))}
    </>
  ) : (
    <li>No budget conditions available.</li>
  )}
</ul>

              </div>
              <div className="mt-2">
                <ul className="text-gray-600 space-y-2">
  {pkg.payment_term.payment_condition_on_monthly &&
  pkg.payment_term.payment_condition_on_monthly.length > 0 ? (
    <>

      <h4 className="font-semibold">Monthly Payment Plans:</h4>
      {pkg.payment_term.payment_condition_on_monthly.map((condition) => (
        <li key={condition.id}>
          Price: ${condition.price} for {condition.duration_months} months
        </li>
      ))}
    </>
  ) : (
    <li>No monthly payment plans available.</li>
  )}
</ul>

              </div>
              <p className="mt-4 text-lg font-medium">
              {pkg.payment_term?.price
                ? `Price: $${pkg.payment_term.price}`
                : "Contact us for pricing"}
            </p>
            </div>

            {/* Nút thêm vào giỏ hàng */}
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={() =>
                addToCart({
                  productId: null,
                  packageId: pkg.id,
                  quantity: 1,
                  payment_condition_on_monthly_id:
                    pkg.payment_term.payment_condition_on_monthly?.length > 0
                      ? pkg.payment_term.payment_condition_on_monthly[0].id
                      : undefined,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
