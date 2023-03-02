const Button = (props) => {
  const { disabed, onClick, children, type, loading } = props;

  return (
    <>
      <button
        type={type}
        disabled={disabed}
        onClick={onClick}
        className={`bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out `}
      >
        {loading ? "Loading" : children}
      </button>
    </>
  );
};

export { Button };
