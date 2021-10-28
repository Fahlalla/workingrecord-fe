const Card = () => {
  return (
    <div className="flex flex-col leading-6 border-4 rounded-md h-30 w-80 ">
      <div>P'Roof</div>
      <div className="flex justify-between">
        <p>โอนแล้ว</p>
        <p>500,000</p>
      </div>
      <div className="flex justify-between">
        <p>ยอดโอนทั้งหมด</p>
        <p>5,000,000</p>
      </div>
    </div>
  );
};
export default Card;
