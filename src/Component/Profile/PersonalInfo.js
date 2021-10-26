import ProfileInput from "../Profile/ProfileInput.js";
import UploadFile from "./UploadFile.js";
import DropdownInput from "./DropdownInput.js";

const PersonalInfo = () => {
  const province = [
    { value: "Bangkok" },
    { value: "Khon Kaen" },
    { value: "Nan" },
  ];
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
          <DropdownInput label="จังหวัด" options={province} />
          <DropdownInput label="เขต/อำเภอ" options={[]} />
        </div>
        <div className="flex space-x-10">
          <DropdownInput label="แขวง/ตำบล" options={[]} />
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
