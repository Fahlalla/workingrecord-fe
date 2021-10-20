import Menubar from "../Component/Menubar";
import PersonalInfo from "../Component/Profile/PersonalInfo";
import SiteInfo from "../Component/Profile/SiteInfo";
import BankAccountInfo from "../Component/Profile/BankAccountInfo";

const ProfilePage = () => {
    return (
        <div className="flex h-full w-full">
            <div className="flex items-start content-start h-full">
                <Menubar />
            </div>
            <div className="flex flex-col w-full pt-4 px-12">
                <PersonalInfo />
                <SiteInfo />
                <BankAccountInfo />
            </div>
        </div>

    );
};
export default ProfilePage;


