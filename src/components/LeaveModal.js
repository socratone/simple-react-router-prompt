const LeaveModal = ({ onSubmit, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        background: 'white',
        border: '1px solid grey',
        transform: 'translate(-50%, -50%)',
        padding: '10px',
      }}
    >
      <div>저장하지 않고 다른 페이지로 이동하시겠습니까?</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '10px',
        }}
      >
        <button onClick={onSubmit}>예</button>
        <button onClick={onClose}>아니오</button>
      </div>
    </div>
  );
};

export default LeaveModal;
