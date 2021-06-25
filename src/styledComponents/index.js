import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  background-color: #017aff;
  padding: 18px 30px;
  text-align: center;
  color: white;
  border-radius: 3px;
  transition: all 0.4s;
  &:hover {
    background-color: #017ae1;
  }
`;

const LS = {};
LS.LinkButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  a {
    background-color: #017aff;
    padding: 18px 30px;
    text-align: center;
    color: white;
    border-radius: 3px;
    transition: all 0.4s;
    line-height: 25px;
    &:hover {
      background-color: #017ae1;
    }
  }
`;
export const LinkButton = ({ link, name, className }) => {
  return (
    <LS.LinkButton>
      <Link to={link} className={className}>
        {name}
      </Link>
    </LS.LinkButton>
  );
};

export const OutlineButton = styled.button`
  border: 1px solid #017ae1;
  background-color: transparent;
  padding: 20px 30px;
  text-align: center;
  color: #017ae1;
`;
