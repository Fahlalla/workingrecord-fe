import ProfileInput from "../Profile/ProfileInput.js";
import UploadFile from "./UploadFile.js";
import DropdownInput from "./DropdownInput.js";
import ProfileIcon from "../../Asset/profile-icon.svg";
import DateInput from "./DateInput.js";

const PersonalInfo = () => {
  const province = [
    { value: "Bangkok" },
    { value: "Khon Kaen" },
    { value: "Nan" },
  ];
  const district = [
    { value: "Muaeng" },
    { value: "Chatuchuk" },
    { value: "Lad krabang" },
  ];
  const subDistrict = [
    { value: "Nai Muaeng" },
    { value: "Non Muang" },
    { value: "Nan" },
  ];

  return (
    <div className="flex h-auto">
      <div className="flex-col space-y-5">
        <div className="flex font-bold text-2xl">
          ประวัติส่วนตัว
          <img src={ProfileIcon} className="items-center w-6 ml-2"/>
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="ชื่อ" />
          <ProfileInput label="นามสกุล" />
          <ProfileInput label="เลขบัตรประชาชน" />
        </div>
        <div className="flex space-x-10">
          <DateInput label="วัน เดือน ปีเกิด" />
          <ProfileInput label="เบอร์โทรศัพท์" />
          <ProfileInput label="E-mail" disabled />
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="ที่อยู่" />
          <DropdownInput label="จังหวัด" options={province} />
          <DropdownInput label="เขต/อำเภอ" options={district} />
        </div>
        <div className="flex space-x-10">
          <DropdownInput label="แขวง/ตำบล" options={subDistrict} />
          <ProfileInput label="รหัสไปรษณีย์" />
        </div>
        <div className="flex space-x-10">
          <UploadFile label="รูปบัตรประชาชน" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
