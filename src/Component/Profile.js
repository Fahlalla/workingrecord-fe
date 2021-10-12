import image from "../Asset/Profile.png";

const Profile = () => {
    return (
        <div className="flex">
            <img src={image} alt="Profile" width="200" height="200" />
            <div>
              <div>ชื่อ ...</div>
              <div>รายได้สุทธิของคุณ 0.00 บาท</div>
              <div>บันทึก : อยากได้เงินก็กรอกมาสิ</div>
            </div>
          </div>
    )
} 

export default Profile