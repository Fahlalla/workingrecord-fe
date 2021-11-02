const Card = ({ data }) => {
  return (
    <div className="flex flex-col leading-6 border-4 rounded-md h-30 w-80 ">
      <div>{data.name}</div>
      <div className="flex justify-between">
        <p>โอนแล้ว</p>
        <p>{data.transferedAmount}</p>
      </div>
      <div className="flex justify-between">
        <p>ยอดโอนทั้งหมด</p>
        <p>{data.total}</p>
      </div>
    </div>
  );
};
export default Card;
