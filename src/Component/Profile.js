import image from "../Asset/Profile.png";

const Profile = () => {
  return (
    <div className="flex h-auto">
      <img className="flex items-center justify-center w-24 h-24 mr-2 rounded-full" src={image} alt="Profile" />
      <div className="pl-12">
        <div className="flex text-2xl pb-5 black">สำรวย หวยสำราญ</div>
        <div className="pb-5">รายได้สุทธิของคุณ 0.00 บาท</div>
        <div className="pb-5">บันทึก : อยากได้เงินก็กรอกมาสิ</div>
      </div>
    </div>
  );
};

export default Profile;
