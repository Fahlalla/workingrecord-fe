import ProfileInput from "../Profile/ProfileInput.js";

const SiteInfo = () => {
  return (
    <div className="flex flex-row h-auto pt-8">
      <div className="flex-col space-y-5">
        <div className="">
          <div className="font-bold text-2xl">Site</div>
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="Site" />
          <ProfileInput label="Team" />
          <ProfileInput label="ผู้แนะนำเข้า Odds" />
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="Discord Account" />
          <ProfileInput label="รายได้ต่อวัน" />
          <ProfileInput label="รายได้ต่อชั่วโมง (Part-time)" />
        </div>
      </div>
    </div>
  );
};

export default SiteInfo;
