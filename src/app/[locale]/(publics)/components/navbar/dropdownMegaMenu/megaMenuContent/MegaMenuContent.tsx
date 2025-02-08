import dynamic from "next/dynamic";
import { fetchData } from "@/shared/utils/CallApiUtil";

const Website = dynamic(
  () =>
    import(
      "@/app/[locale]/(publics)/components/navbar/dropdownMegaMenu/megaMenuContent/website/Website"
    ),
  { ssr: false }
);
const OutService = dynamic(
  () =>
    import(
      "@/app/[locale]/(publics)/components/navbar/dropdownMegaMenu/megaMenuContent/outService/page"
    ),
  { ssr: false }
);
const FQA = dynamic(
  () =>
    import(
      "@/app/[locale]/(publics)/components/navbar/dropdownMegaMenu/megaMenuContent/fqa/page"
    ),
  {
    ssr: false,
  }
);

export async function getStaticProps() {
  const categories = await fetchData("/categories");
  return {
    props: {
      categories,
    },
    revalidate: 3600, // Thời gian (tính bằng giây) để cập nhật lại dữ liệu, ở đây là 1 giờ
  };
}

const MegaMenuContent: React.FC = () => {
  return (
    <div className="flex flex-wrap max-lg:flex-col lg:space-x-3 text-base ">
      <>
        <div className="flex-1  rounded-xl p-3 space-y-4 w-full">
          <OutService />
        </div>
        <div className="basis-5/12 rounded-xl p-3 w-full">
          <Website />
        </div>
        <div className="basis-1/4  rounded-xl p-3 ">
          <FQA />
        </div>
      </>
    </div>
  );
};

export default MegaMenuContent;
