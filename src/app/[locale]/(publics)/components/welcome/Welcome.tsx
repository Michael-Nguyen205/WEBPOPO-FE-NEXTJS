import Image from "next/image";
import CoporImage from "../../../../../../public/images/coporImage.jpg";
const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row  bg-white text-black  px-3 md:px-14 py-9 md:py-16">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-start items-start ">
        <Image
          src={CoporImage}
          alt="Team Meeting"
          width={700}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 pt-7 lg:pt-0 px-4 lg:px-8">
        <h1 className="text-7xl lg:text-8xl font-bold mb-4">WELCOME TO STUDIO AGATHO</h1>

        <p className="text-xl mb-4">
          At Studio Agatho, we believe in working together and celebrating the diverse strengths we each bring.
        </p>
        <p className="text-xl mb-4">
          We foster an environment where everyone feels respected. We welcome people of all castes, genders, and beliefs.
          We encourage healthy discussions and value the lasting bonds we form as teammates.
        </p>
        <p className="text-xl">
          Join us at Studio Agatho and be part of a fulfilling and enriching experience where you'll be valued, supported,
          and inspired to reach your full potential.
        </p>



        {/* CHÀO MỪNG ĐẾN VỚI WEBPOPO STUDIO
Tại WebPopo Studio, chúng tôi đam mê tạo ra những trải nghiệm số sáng tạo giúp doanh nghiệp phát triển. Chúng tôi chuyên thiết kế và phát triển website & ứng dụng, không chỉ đẹp mắt mà còn tối ưu hóa trải nghiệm người dùng một cách mượt mà nhất.

Chúng tôi tin rằng những sản phẩm số tuyệt vời được tạo ra từ sự hợp tác, sáng tạo và công nghệ tiên tiến. Dù đó là một website chuyên nghiệp, một ứng dụng web mạnh mẽ hay một app di động đa tính năng, chúng tôi luôn biến ý tưởng thành hiện thực với độ chính xác và hiệu quả cao.

🌟 Vì sao chọn WebPopo Studio?
✅ Phát triển website & ứng dụng theo yêu cầu
✅ Giải pháp tối ưu, thân thiện với người dùng
✅ Công nghệ hiện đại, xu hướng mới nhất
✅ Hỗ trợ & bảo trì tận tâm

Hãy đồng hành cùng chúng tôi để biến ý tưởng của bạn thành giải pháp số đột phá. Cùng nhau tạo nên những sản phẩm tuyệt vời! 🚀 */}
      </div>
    </div>
  );
};

export default Welcome;
