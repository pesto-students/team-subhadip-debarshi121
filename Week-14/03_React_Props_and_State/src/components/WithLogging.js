const WithLogging = (Component) => {
  const logData = (data) => {
    console.log("Log: ", data);
  };
  return () => {
    return <Component logData={logData} />;
  };
};

export default WithLogging;
