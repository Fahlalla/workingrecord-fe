import { useMemo, useState } from "react";
import Card from "../Component/Card.js";
import WorklogSum from "../Component/WorklogSum.js";
import SummaryPaymentTable from "../Component/SummaryPaymentTable.js";
import MonthPicker from "../Component/MonthPicker.js";
import { AdminProfiles } from "../AdminProfiles.js";
import PopupConfirm from "../Component/PopupConfirm.js";
import { IndividualInformations } from "../IndividualInformations.js";

const SummaryPayment = () => {
  const [selectMonth, setSelectMonth] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const mockId = "6189163da920b710675a0e09"
  const [selectAdminProfile, setSelectAdminProfile] = useState(mockId);

  const filterState = useMemo(() =>
      IndividualInformations.filter(
        (data) => data.transferBy === selectAdminProfile
      ),
    [selectAdminProfile]
  );

  return (
    <div className="flex flex-col w-full px-12 pt-4 overflow-scroll">
      <div className="flex justify-between space-y-2">
        <WorklogSum month={selectMonth} amount={IndividualInformations}/>
        <div  data-cy="MonthPicker">
          <MonthPicker data-cy="month" month={selectMonth} setSelectMonth={setSelectMonth} />
        </div>
      </div>
      <div className="flex justify-between mt-8 ">
        {AdminProfiles.map((adminProfile) => {
          return (
            <Card
              data={adminProfile}
              key={adminProfile.id}
              select={setSelectAdminProfile}
            />
          );
        })}
      </div>
      <div className="mt-8">
        <SummaryPaymentTable data={filterState} />
        <div>
          <div className="flex flex-wrap content-center justify-center pt-20">
            <button
              type="button"
              className="text-lg font-bold text-white rounded-full w-80 h-14 "
              style={{ backgroundColor: "#00B6EF" }}
              onClick={() => setShowPopup(true)}
            >
              ยืนยันการโอนครบถ้วน และส่งให้บัญชี
            </button>
          </div>
          {showPopup ? (
            <PopupConfirm
              isPopup={setShowPopup}
              header="ยืนยันการโอน"
              body="หากกดปุ่มยืนยันแล้ว ระบบจะทำการอัปเดตสถานะ และแจ้งเตือนไปยัง
                Staff"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default SummaryPayment;
