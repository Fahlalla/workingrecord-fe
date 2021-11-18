import DropdownInput from "./DropdownInput";
import ProfileInput from "./ProfileInput";
import UploadFile from "./UploadFile";
import { useState, useEffect } from "react";

const BankAccountInfo = () => {
  const province = [
    { value: "Krungthai (KTB)" },
    { value: "Kasikorn (KBANK)" },
    { value: "Krungsri (BAY)" },
    { value: "Siam Commercial Bank (SCB)" },
    { value: "Bangkok Bank (BBL)" },
  ];

  const [bankAccount,setBankAccount] = useState("")
  const [bankBranch,setBankBranch] = useState("")
  const [bankAccountNumber,setBankAccountNumber] = useState("")

  let handleChangebankAccount=(e) => {
    setBankAccount(e.target.value);
  }
  let handleChangebankBranch=(e) => {
    setBankBranch(e.target.value);
  }
  let handleChangebankAccountNumber=(e) => {
    setBankAccountNumber(e.target.value);
  }

  useEffect(() => {
    console.log(bankAccount)
    console.log(bankBranch)
    console.log(bankAccountNumber)

  }, [bankAccount, bankBranch, bankAccountNumber])

  return (
    <div className="flex h-auto">
      <div className="flex flex-col space-y-5 pt-5">
        <div className="font-bold text-2xl">บัญชีธนาคาร</div>
        <div className="flex space-x-10">
          <ProfileInput label="ชื่อบัญชี" onChange={handleChangebankAccount} value={bankAccount} dataCy="bankAccount-input"/>
          <DropdownInput label="ธนาคาร" options={province} disabled/>
          <ProfileInput label="สาขา" onChange={handleChangebankBranch} value={bankBranch} dataCy="branch-input"/>
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="เลขที่บัญชี" onChange={handleChangebankAccountNumber} value={bankAccountNumber} dataCy="accountNumber-input"/>
        </div>
        <div className="flex space-x-10">
          <UploadFile label="รูปบัญชีธนาคาร" dataCy="book-bank-uplaod" />
        </div>
      </div>
    </div>
  );
};

export default BankAccountInfo;
