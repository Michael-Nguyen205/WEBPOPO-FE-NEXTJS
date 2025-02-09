import Image from "next/image";
import CoporImage from "../../../../../../public/images/coporImage.jpg";

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white text-black px-3 md:px-14 py-9 md:py-16">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start space-y-6" >
        <Image
          src={CoporImage}
          alt="Team Meeting"
          width={700}
          height={500}
          className="rounded-lg shadow-lg"
        />
<p className="text-6xl mb-4">
          Vì sao chọn WebPopo Studio?
        </p>
        <ul className="list-disc pl-5 text-xl mb-4">
          <li> Phát triển website & ứng dụng theo yêu cầu</li>
          <li> Giải pháp tối ưu, thân thiện với người dùng</li>
          <li> Công nghệ hiện đại, xu hướng mới nhất</li>
          <li> Hỗ trợ & bảo trì tận tâm</li>
        </ul>
        <p className="text-xl">
          Hãy đồng hành cùng chúng tôi để biến ý tưởng của bạn thành giải pháp số đột phá. Cùng nhau tạo nên những sản phẩm tuyệt vời! 🚀
        </p>

      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 pt-7 lg:pt-0  lg:px-8">
        <h1 className="text-7xl lg:text-8xl font-bold mb-4">CHÀO MỪNG ĐẾN VỚI WEBPOPO STUDIO</h1>

        <p className="text-xl mb-4">
          Tại WebPopo Studio, chúng tôi đam mê tạo ra những trải nghiệm số sáng tạo giúp doanh nghiệp phát triển. 
          Chúng tôi chuyên thiết kế và phát triển website & ứng dụng, không chỉ đẹp mắt mà còn tối ưu hóa trải nghiệm người dùng một cách mượt mà nhất.
        </p>
        <p className="text-xl mb-4">
          Chúng tôi tin rằng những sản phẩm số tuyệt vời được tạo ra từ sự hợp tác, sáng tạo và công nghệ tiên tiến. Dù đó là một website chuyên nghiệp, 
          một ứng dụng web mạnh mẽ hay một app di động đa tính năng, chúng tôi luôn biến ý tưởng thành hiện thực với độ chính xác và hiệu quả cao.
        </p>
        
      </div>
    </div>
  );
};

export default Welcome;
