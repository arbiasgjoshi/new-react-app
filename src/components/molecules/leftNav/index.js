const LeftNav = ({ changeSection }) => {
  return (
    <>
      <nav>
        <button type="button" onClick={() => changeSection(1)}>
          Section 1
        </button>
        <button type="button" onClick={() => changeSection(2)}>
          Section 2
        </button>
        <button type="button" onClick={() => changeSection(3)}>
          Section 3
        </button>
        <button type="button" onClick={() => changeSection(4)}>
          Section 4
        </button>
      </nav>
    </>
  );
};

export default LeftNav;
