const Button = () => {
  return (
    <div className="flex flex-wrap content-center justify-end">
      <div className="flex flex-col">
        <button
          className="w-40 h-8 mb-2 text-white bg-blue-400 rounded-2xl"
          onClick={() => {
            console.log("300%");
          }}
        >
          เพิ่มรายการเงินเดือน
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default Button;
