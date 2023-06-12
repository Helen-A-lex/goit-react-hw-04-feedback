import styled from 'styled-components';
export const FeedbackWrap = styled.div`
  display: flex;
  gap: 25px;
  font-family: san-serif;
  font-size: 25px;
  margin-bottom: 30px;
}
`;
export const FeedbackButton = styled.button`
  width: 100px;
  font-size: 25px;
  padding: 5px;
  cursor: pointer;
  background-color: whitesmoke;
  border: 1px solid #b9b3b3;
  border-radius: 7px;
  &:hover {
    background-color: #4646d8;
  }
`;
