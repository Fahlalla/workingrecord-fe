import Menubar from "./Menubar";
import styled from "styled-components";

const ContainerTabMenu = styled.div.attrs({})`
  border-bottom: 2px solid #eaeaea;
`;

const Summary = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex items-start content-start h-full">
        <Menubar />
        <div className="flex flex-col w-full pt-4 px-12">
          <div>Summary</div>
          {/* 
          <div style="border-bottom: 2px solid #eaeaea"> */}
          <ContainerTabMenu>
            <ul className="flex cursor-pointer">
              <li className="py-2 px-6 bg-white rounded-t-lg">Personal</li>
              <li className="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200">
                Akun
              </li>
              <li className="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200">
                Pengaturan
              </li>
            </ul>
          </ContainerTabMenu>
        </div>
      </div>
    </div>
  );
};

export default Summary;
