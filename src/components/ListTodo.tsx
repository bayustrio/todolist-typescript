import React, { useState } from 'react';
import { text } from 'stream/consumers';
import { Props, IData } from '../utils/TypeScript';

const ListTodo: React.FC<Props> = ({
  setText,
  data,
  setData,
  edit,
  setEdit,
  setTodos
}) => {
  const handleEdit = (Item: IData) => {
    setTodos(Item.id);
    setEdit(true);
    setText(Item.text);
  };

  const handleDelete = (id: number) => {
    let local = localStorage.setItem(
      'data',
      JSON.stringify(data.filter((item) => item.id !== id))
    );
    const localData = JSON.parse(localStorage.getItem('data') || '[]');
    setData(localData);
  };
  return (
    <div>
      <h1 className="text-[1.5rem] text-center font-semibold">List Todo</h1>
      <div className="flex flex-col  items-center justify-center gap-3 px-3">
        {data?.map((Item, idx) => (
          <div
            key={idx}
            className="lg:w-[50%] sm:w-[50%]  md:w-[50%] w-full  xl:w-[50%] h-10 px-4 flex items-center justify-between rounded bg-slate-400"
          >
            <h1 className="font-semibold text-lg text-white">{Item.text}</h1>
            <div className="items-center flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 hover:text-blue-600"
                onClick={() => handleEdit(Item)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                onClick={() => handleDelete(Item.id)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTodo;
