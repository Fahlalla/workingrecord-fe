import styled from "styled-components";

const ButtonStyle = styled.div.attrs({
  className:
    "rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6",
})`
  background-color: #00b6ef;
`;

const Button = () => {
  return (
    <div className="flex flex-wrap content-center justify-end">
      <div className="flex flex-col">
        <ButtonStyle>เพิ่มรายการเงินเดือน</ButtonStyle>
      </div>
    </div>
  );
};

export default Button;
