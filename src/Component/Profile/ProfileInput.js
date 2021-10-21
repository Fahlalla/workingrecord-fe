const ProfileInput = () => {
  return (
    <div className="flex-col">
      <div>ชื่อ</div>
      <input
        className="py-2 pl-10 text-sm text-black shadow-md placeholder-gray-500 border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none"
        type="text"
      />

    </div>
  );
};

export default ProfileInput;
