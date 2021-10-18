import image from "../Asset/Profile.png";

const Profile = () => {
    return (
        <div className="flex h-auto">
            <img className="flex items-center justify-center w-24 h-24 mr-2 rounded-full" src={image} alt="Profile" />
            <div className="mt-2 ml-4 font-sans font-bold">
              <div>อนันตทรัพย์ ปรีชาชาญ</div>
              <div>รายได้สุทธิของคุณ 0.00 บาท</div>
              <div>บันทึก : อยากได้เงินก็กรอกมาสิ</div>
            </div>
          </div>
    )
} 

export default Profile