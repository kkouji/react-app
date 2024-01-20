export const ResultArea = (props) => {
  const { magnificationValue, addTypeButton } = props;
  return (
    <>
      <hr></hr>
      <p>弱点</p>
      <div className="result">
        {magnificationValue.map((element) => (
          <div key={element} className="resultBox">
            <div className="magnification">{element}</div>
            {addTypeButton(element)}
          </div>
        ))}
      </div>
    </>
  );
};
