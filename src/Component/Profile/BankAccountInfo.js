import DropdownInput from "./DropdownInput";
import ProfileInput from "./ProfileInput";
import UploadFile from "./UploadFile";

const BankAccountInfo = () => {
  const province = [
    { value: "Krungthai (KTB)" },
    { value: "Kasikorn (KBANK)" },
    { value: "Krungsri (BAY)" },
    { value: "Siam Commercial Bank (SCB)" },
    { value: "Bangkok Bank (BBL)" },
  ];
  return (
    <div className="flex h-auto">
      <div className="flex flex-col space-y-5 pt-5">
        <div className="font-bold text-2xl">บัญชีธนาคาร</div>
        <div className="flex space-x-10">
          <ProfileInput label="ชื่อบัญชี" />
          <DropdownInput label="ธนาคาร" options={province} />
          <ProfileInput label="สาขา" />
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="เลขที่บัญชี" />
        </div>
        <div className="flex space-x-10">
          <UploadFile label="รูปบัญชีธนาคาร" />
        </div>
      </div>
    </div>
  );
};

export default BankAccountInfo;
