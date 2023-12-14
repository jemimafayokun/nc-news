
const Error = (props) => {
  const { message } = props;
  return (
    <div className="error-container">
      <h2 className="error-heading">Error!</h2>
      <p className="error-message">{message}</p>
    </div>
  );
};

export default Error;
