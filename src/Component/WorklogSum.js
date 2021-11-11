const formatCurrency = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const WorklogSum = (props) => {
  let amount = 0;
  props.amount.forEach(data => {
    amount += data.totalSalary
  });

  let text = `ประจำเดือน ${props.month.toLocaleString("th", { month: "long", year: "numeric"})} ณ วันที่ 25 ยอดที่ต้องโอนทั้งหมด ${formatCurrency(amount)} บาท`;

  return (
    <div className="flex flex-col space-y-5 ">
      <div className="font-bold text-4xl">สรุปรายการขอเบิก Worklog</div>
      <div className="text-xl">
        {text}
      </div>
    </div>
  );
};
export default WorklogSum;
