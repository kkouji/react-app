export const SearchPokemon = (props) => {
  const { inputValue, onChangeInput, dispMatchPokemon } = props;
  return (
    <>
      <hr></hr>
      <div className="search">
        <p>ポケモン検索</p>
        <input value={inputValue} type="text" onChange={onChangeInput}></input>
        {dispMatchPokemon()}
      </div>
    </>
  );
};
