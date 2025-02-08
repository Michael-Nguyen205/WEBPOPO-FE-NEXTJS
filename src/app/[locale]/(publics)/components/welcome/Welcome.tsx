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
      </div>
    </div>
  );
};

export default Welcome;
