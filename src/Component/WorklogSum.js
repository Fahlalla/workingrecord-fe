const WorklogSum = (props) => {
  return (
    <div className="flex flex-col space-y-5 ">
      <div className="font-bold text-4xl">สรุปรายการขอเบิก Worklog</div>
      <div className="text-xl">ประจำเดือน {(props.month.getMonth() + 1).toString()} ณ วันที่ 25</div>
    </div>
  );
};
export default WorklogSum;
