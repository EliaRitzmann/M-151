import React from 'react'
import Cookies from "js-cookie";

export const WordsField = ({data, updateData}) => {
    const deleteCategory = async () => {
        await fetch("http://localhost:3001/deleteWord", {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              adminSessionId: Cookies.get("adminSessionId"),
              id: data.id
            }),
          })

        updateData()
      };

  return (
    <tr>
      <th>{data.id}</th>
      <td>{data.categoryId}</td>
      <td>{data.content}</td>
      <td>
        <button className="btn btn-square btn-error" onClick={deleteCategory}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  )
}
