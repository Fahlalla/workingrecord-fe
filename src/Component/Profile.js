import image from "../Asset/Profile.png";

const Profile = () => {
    return (
        <div className="flex h-auto">
            <img className="flex items-center justify-center w-24 h-24 mr-2 rounded-full" src={image} alt="Profile" />
            <div>
              <div>ชื่อ ...</div>
              <div>รายได้สุทธิของคุณ 0.00 บาท</div>
              <div>บันทึก : อยากได้เงินก็กรอกมาสิ</div>
            </div>
          </div>
    )
} 

export default Profile