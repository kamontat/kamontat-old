import tw from "twin.macro";
import styled from "../../styles/styled";

export default styled.input`
  background-color: ${(props) => props.theme.body};
  ${tw`appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 mx-4 leading-tight focus:outline-none focus:border-purple-500`};
`;
