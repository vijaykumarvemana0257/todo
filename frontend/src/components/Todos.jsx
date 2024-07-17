import React, { useCallback, useState } from "react";

function Todos({ todos }) {
    
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.isCompleted ==true ? "Complted": "Mark as completed"}</button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
