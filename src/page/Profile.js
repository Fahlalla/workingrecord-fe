import PersonalInfo from "../Component/Profile/PersonalInfo";
import SiteInfo from "../Component/Profile/SiteInfo";
import BankAccountInfo from "../Component/Profile/BankAccountInfo";
import ProfileButton from "../Component/Profile/ProfileButton";

const ProfilePage = () => {
  return (
    <div className="flex flex-col w-full pt-4 px-12 overflow-y-scroll">
      <PersonalInfo />
      <SiteInfo />
      <BankAccountInfo />
      <div className="flex flex-wrap content-center justify-center space-x-20 py-10">
        <ProfileButton color='bg-black' dataCy="clear-button">ล้างข้อมูล</ProfileButton>
        <ProfileButton color='bg-skyblue' dataCy="confirm-button">ยืนยันข้อมูล</ProfileButton>
      </div>
    </div>
  );
};
export default ProfilePage;
