export function ResetButton(props) {
  const { resetButtonClick } = props;

  return (
    <button className="resetButton" onClick={resetButtonClick}>
      リセット
    </button>
  );
}
