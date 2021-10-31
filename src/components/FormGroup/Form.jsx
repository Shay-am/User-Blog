import styled from 'styled-components';

const Form = styled.form.attrs((props) => ({
  onSubmit: props.handler,
}))`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
`;
export default Form;
