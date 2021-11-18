const formatCurrency = (input) => {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const WorklogSum = (props) => {
  let sum = 0;
  props.individualInformations.forEach(data => {
    sum += data.totalSalary
  });

  let text = `ประจำเดือน ${props.month.toLocaleString("th", { month: "long", year: "numeric"})} ณ วันที่ 25 ยอดที่ต้องโอนทั้งหมด ${formatCurrency(sum)} บาท`;

  return (
    <div className="flex flex-col space-y-5 ">
      <div className="font-bold text-4xl">สรุปรายการขอเบิก Worklog</div>
      <div className="text-xl" data-cy="month" >
      {text}
      </div>
    </div>
  );
};
export default WorklogSum;
