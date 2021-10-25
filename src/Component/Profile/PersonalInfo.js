import ProfileInput from "../Profile/ProfileInput.js";
import UploadFile from "./UploadFile.js";
import DropdownInput from "./DropdownInput.js";

const PersonalInfo = () => {
  return (
    <div className="flex h-auto">
      <div className="flex-col space-y-5">
        <div className="flex space-x-10">
          <ProfileInput label="ชื่อ" />
          <ProfileInput label="นามสกุล" />
          <ProfileInput label="เลขบัตรประชาชน" />
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="วัน เดือน ปีเกิด" />
          <ProfileInput label="เบอร์โทรศัพท์" />
          <ProfileInput label="E-mail" disabled />
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="ที่อยู่" />
          <DropdownInput label="จังหวัด" />
          <DropdownInput label="เขต/อำเภอ" />
        </div>
        <div className="flex space-x-10">
          <DropdownInput label="แขวง/ตำบล" />
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
