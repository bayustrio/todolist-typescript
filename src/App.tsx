import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import ListTodo from './components/ListTodo';
import { IData } from './utils/TypeScript';

const App = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<IData[]>([]);
  const [todo, setTodos] = useState<number>(0);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('data') || '[]');
    setData(localData);
  }, []);

  // event handle onClick
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (text === '') return;
    if (edit) {
      // ======= start save data edit to localstorage =======
      let dataLocalStorage = localStorage.setItem(
        'data',
        JSON.stringify(
          data.map((item) =>
            item.id === todo ? { ...item, text: text } : item
          )
        )
      );
      const localData = JSON.parse(localStorage.getItem('data') || '[]');
      setData(localData);
      setEdit(false);
      setText('');
    }
    // ======= end save data edit to localstorage =======
    else {
      let id = Math.random();
      setData([...data, { text, id }]);
      let dataLocalStorage = localStorage.setItem(
        'data',
        JSON.stringify([...data, { text, id }])
      );
      setText('');
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-center px-3 lg:px-0 md:px-0 ">
        <div className="lg:w-[50%] sm:w-[50%]  md:w-[50%] w-full  xl:w-[50%] flex gap-3 mt-5">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-[#F2F4F7] px-2 border-[1px] border-slate-300 w-full h-9 rounded"
            placeholder="Input your text"
          />
          <button
            onClick={handleClick}
            className="w-36 h-9 rounded bg-blue-500 text-white"
          >
            Submit
          </button>
        </div>
      </div>

      <ListTodo
        setText={setText}
        edit={edit}
        setTodos={setTodos}
        setEdit={setEdit}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default App;
