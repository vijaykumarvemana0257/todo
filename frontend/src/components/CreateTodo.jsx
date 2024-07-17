import React from "react";
import { useState } from "react";

export function CreateTodo() {
  const [title,setTitle]=useState()
  const [description,setDescription]=useState()
  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        onChange={(e)=>setTitle(e.target.value)}
      ></input>
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={(e)=>setDescription(e.target.value)}
      ></input>
      <br />

      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function(res){
            const json=await res.json();
            alert("Todo Ad")
          });
        }}
      >Add todo</button>
    </div>
  );
}
