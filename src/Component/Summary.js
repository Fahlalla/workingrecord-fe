import Menubar from "./Menubar";
import styled from "styled-components";
import Table from "./Table";
import Button from "./button";
import Search from "./search";
import DatePickers from "./DatePicker";

const ContainerTabMenu = styled.div.attrs({})`
  border-bottom: 2px solid #eaeaea;
`;

const Summary = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex items-start content-start h-full">
        <Menubar />
      </div>
      <div className="w-full pt-4 px-12">
        <div className="text-3xl mb-14 font-bold">Summary</div>
        <div className="flex justify-between">
          <div>
            <ContainerTabMenu>
              <ul className="flex cursor-pointer">
                <li className="py-2 px-6 bg-white rounded-t-lg">
                  รายการที่กรอกแล้ว
                </li>
                <li className="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200">
                  คนที่กรอกแล้ว
                </li>
                <li className="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200">
                  คนที่ยังไม่ได้กรอก
                </li>
              </ul>
            </ContainerTabMenu>
          </div>
          <div className="flex justify-end">
            <div>
              <p className="text-lg font-bold"> Date: </p>
              <div className="flex flex-col justify-center items-center rounded-md h-14 border-2 border-gray-300">
                <DatePickers />
              </div>
            </div>
            <div className="flex flex-col justify-end ml-6">
              <button className="font-bold w-40 h-14 text-white bg-blue-400 rounded-full">
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full pt-4 px-12">
          <div className="mt-8">
            <Search />
          </div>
          <div className="mt-8">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
