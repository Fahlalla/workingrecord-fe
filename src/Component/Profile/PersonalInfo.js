import ProfileInput from "../Profile/ProfileInput.js";
import UploadFile from "./UploadFile.js";
import DropdownInput from "./DropdownInput.js";
import ProfileIcon from "../../Asset/profile-icon.svg";
import DateInput from "./DateInput.js";
import { useState, useEffect } from "react";

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
  const [name,setName] = useState("")
  const [lastName,setLastName] = useState("")
  const [idCard,setIDCard] = useState("")
  const [phoneNo,setPhoneNo] = useState("")
  const [address,setAddress] = useState("")
  const [zipCode,setZipCode] = useState("")
  
  let handleChangeName=(e) => {
    setName(e.target.value);
  }
  let handleChangeLastName=(e) => {
    setLastName(e.target.value);
  }
  let handleChangeIDCard=(e) => {
    setIDCard(e.target.value);
  }
  let handleChangePhoneNo=(e) => {
    setPhoneNo(e.target.value);
  }
  let handleChangeAddress=(e) => {
    setAddress(e.target.value);
  }
  let handleChangeZipCode=(e) => {
    setZipCode(e.target.value);
  }
  
  useEffect(() => {
    console.log(name)
    console.log(lastName)
    console.log(idCard)
    console.log(phoneNo)
    console.log(address)
    console.log(zipCode)
  }, [name, lastName, idCard, phoneNo, address, zipCode])
  
  return (
    <div className="flex h-auto">
      <div className="flex-col space-y-5">
        <div className="flex font-bold text-2xl">
          ประวัติส่วนตัว
          <img src={ProfileIcon} className="items-center w-6 ml-2"/>
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="ชื่อ" onChange={handleChangeName} value={name} dataCy="name-input"/>
          <ProfileInput label="นามสกุล" onChange={handleChangeLastName} value={lastName}/>
          <ProfileInput label="เลขบัตรประชาชน" onChange={handleChangeIDCard} value={idCard}/>
        </div>
        <div className="flex space-x-10">
          <DateInput label="วัน เดือน ปีเกิด" />
          <ProfileInput label="เบอร์โทรศัพท์" onChange={handleChangePhoneNo} value={phoneNo}/>
          <ProfileInput label="E-mail" disabled />
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="ที่อยู่" onChange={handleChangeAddress} value={address}/>
          <DropdownInput label="จังหวัด" options={province} />
          <DropdownInput label="เขต/อำเภอ" options={district} />
        </div>
        <div className="flex space-x-10">
          <DropdownInput label="แขวง/ตำบล" options={subDistrict} />
          <ProfileInput label="รหัสไปรษณีย์" onChange={handleChangeZipCode} value={zipCode}/>
        </div>
        <div className="flex space-x-10">
          <UploadFile label="รูปบัตรประชาชน" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
