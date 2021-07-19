const Container = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    }}
  >
    {children}
  </div>
);

export default Container;
