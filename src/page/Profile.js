import PersonalInfo from "../Component/Profile/PersonalInfo";
import SiteInfo from "../Component/Profile/SiteInfo";
import BankAccountInfo from "../Component/Profile/BankAccountInfo";

const ProfilePage = () => {
  return (
    <div className="flex flex-col w-full pt-4 px-12">
      <PersonalInfo />
      <SiteInfo />
      <BankAccountInfo />
    </div>
  );
};
export default ProfilePage;
