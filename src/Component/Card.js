const cardStyle = {
  flex: "",
  border:"solid",
  color:"lightblue",


};

const Card = (props) => {
  return (
    <div style={cardStyle}>
      <button onClick={() => props.select(props.data.id)}>
        <div className="flex text-black">{props.data.name}</div>
        <div className="flex justify-between text-black">
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
