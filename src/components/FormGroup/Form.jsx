import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form.attrs((props) => ({
  onSubmit: props.handler,
}))`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
