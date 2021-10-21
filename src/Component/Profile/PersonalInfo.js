import ProfileInput from "../Profile/ProfileInput.js";

const PersonalInfo = () => {
    return (
        <div className="flex h-auto">
            <div className="flex-col space-y-5">
                <div className="flex space-x-10">
                    <ProfileInput />
                    <ProfileInput />
                    <ProfileInput />
                </div>
                <div className="flex space-x-10">
                    <ProfileInput />
                    <ProfileInput />
                    <ProfileInput />
                </div>
            </div>

        </div>
    );
};

export default PersonalInfo;
