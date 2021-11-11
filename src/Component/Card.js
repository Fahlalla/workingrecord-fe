

const Card = (props) => {
  return (
    <div className="p-6 text-xl rounded-md text-blue-400  px-14 hover:text-gray-500 bg-gray-100">
      <button onClick={() => props.select(props.data.id)}>
        <div className="font-bold ">{props.data.name}</div>
        <div className="flex justify-between text-black ">
          <p>โอนแล้ว</p>
          <p>{props.data.transferedAmount}</p>
        </div>
        <div className="flex justify-between text-black">
          <p>ยอดโอนทั้งหมด</p>
          <p>{props.data.total}</p>
        </div>
      </button>
    </div>
  );
};
export default Card;
