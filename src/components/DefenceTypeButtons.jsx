export const DefenceTypeButtons = (props) => {
  const {
    pokemonTypes,
    pokemonTypesButtonClick,
    isDefButtonClick,
    isTransparent,
  } = props;
  return (
    <>
      <hr></hr>
      <div>
        <p>相手のタイプを選んでね</p>
      </div>
      <div className="defenceTypeButtons">
        {pokemonTypes.map((type, index) => (
          <button
            onClick={() => pokemonTypesButtonClick(index)}
            key={index}
            className={`typeButton ${type} ${
              isDefButtonClick[index] ? "selected " : " "
            } ${isTransparent(index) ? "transparent " : " "}
              `}
          >
            {type}
          </button>
        ))}
      </div>
    </>
  );
};
