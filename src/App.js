import { useState } from 'react'

function Square(){ // 子
  const [value, setValue] = useState(null);

  function handleClick(){
    setValue('X');
  }

  return(
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default function Board(){ // 親
  return (
    <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    </>
  )
}
