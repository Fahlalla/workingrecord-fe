const Card = ( props ) => {
  return (
    <button onClick = { () => props.select(props.data.name)} >
    <div className="flex flex-col leading-6 border-4 rounded-md h-30 w-80 ">
      <div className="flex">{props.data.name}</div>
      <div className="flex justify-between">
        <p>โอนแล้ว</p>
        <p>{props.data.transferedAmount}</p>
      </div>
      <div className="flex justify-between">
        <p>ยอดโอนทั้งหมด</p>
        <p>{props.data.total}</p>
      </div>
    </div>
    </button>
  );
};
export default Card;
