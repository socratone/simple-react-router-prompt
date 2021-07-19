import { useState } from 'react';
import { Prompt, useHistory } from 'react-router';
import Container from '../components/Container';
import LeaveModal from '../components/LeaveModal';

const Input = () => {
  const history = useHistory();
  const [value, setValue] = useState('');
  const [changed, setChanged] = useState(false);
  const [nextPathname, setNextPathname] = useState('');
  const [leaveModal, setLeaveModal] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    setChanged(true);
  };

  const handleSubmitInput = () => {
    setChanged(false);
    alert('저장 됐습니다.');
    setValue('');
  };

  const handleSubmitModal = () => {
    setChanged(false);
    setTimeout(() => {
      history.push(nextPathname);
    }, 0);
  };

  const handleCloseModal = () => {
    setNextPathname('');
    setLeaveModal(false);
  };

  return (
    <>
      <Container>
        <div>
          <input value={value} onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleSubmitInput}>Submit</button>
        </div>
        {changed && (
          <div style={{ color: 'red' }}>
            저장하시려면 submit 버튼을 눌러주세요.
          </div>
        )}
      </Container>

      <Prompt
        when={changed}
        message={(location) => {
          setNextPathname(location.pathname);
          setLeaveModal(true);
          return false;
        }}
      />

      {leaveModal && (
        <LeaveModal onClose={handleCloseModal} onSubmit={handleSubmitModal} />
      )}
    </>
  );
};

export default Input;
