import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { CategoriesField } from "../components/CategoriesField";
import { WordsField } from "../components/WordsField";

export const Admin = () => {
  const [user, setUser] = useState({});
  const session = Cookies.get("adminSessionId");
  const navigate = useNavigate();

  const [categories, setcategories] = useState([]);
  const [words, setWords] = useState([]);

  const [categoryName, setCategoryName] = useState("");
  const [wordContent, setWordContent] = useState("")
  const [categoryId, setCategoryId] = useState(0)

  useEffect(() => {
    if (!session) {
      navigate("/adminLogin");
    }
  }, [session]);

  useEffect(() => {
    updatePlayerData();
    updateData();
  }, []);

  const updatePlayerData = () => {
    fetch("http://localhost:3001/getAdmin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        adminSessionId: Cookies.get("adminSessionId"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  };

  const updateData = () => {
    fetch("http://localhost:3001/getData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        adminSessionId: Cookies.get("adminSessionId"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcategories(data.categories);
        setWords(data.words);
      });
  };

  const logOut = () => {
    Cookies.remove("adminsessionId");
    //refresh page and navigate to Login Page
    navigate("/");
  };

  const addCategory = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:3001/addCategory", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              adminSessionId: Cookies.get("adminSessionId"),
              name: categoryName
            }),
          })

    setCategoryName("");
    updateData()
  };

  const addWord = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:3001/addWord", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              adminSessionId: Cookies.get("adminSessionId"),
              content: wordContent,
              id: categoryId
            }),
          })

    setCategoryId(0);
    setWordContent("")
    updateData()
  };



  var categoryElements = [];

  for (let index = 0; index < categories.length; index++) {
    categoryElements.push(
      <CategoriesField
        key={categories[index].id}
        data={categories[index]}
        updateData={updateData}
      ></CategoriesField>
    );
  }

  var wordElement = [];

  for (let index = 0; index < words.length; index++) {
    wordElement.push(
      <WordsField
        key={words[index].id}
        data={words[index]}
        updateData={updateData}
      ></WordsField>
    );
  }

  return (
    <div className="bg-gray-100 h-screen p-4 flex flex-col gap-4">
      <div className="stats shadow w-full h-1/6">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <button className="btn btn-sm" onClick={logOut}>
              LogOut
            </button>
          </div>
          <div className="stat-value">{user.username}</div>
          <div className="stat-title">username</div>
        </div>
      </div>
      <div className="grid grid-cols-2 h-full gap-4">
        <div className="card bg-base-100 shadow-xl h-full">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">categories</h2>
              <form
                onSubmit={(e) => addCategory(e)}
                className="flex justify-center items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
                <button className="btn btn-circle" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </form>
            </div>

            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>{categoryElements}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl h-full">
          <div className="card-body">
          <div className="flex justify-between">
              <h2 className="card-title">words</h2>
              <form
                onSubmit={(e) => addWord(e)}
                className="flex justify-center items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="name"
                  value={wordContent}
                  onChange={(e) => setWordContent(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
                <input
                  type="number"
                  placeholder="name"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
                <button className="btn btn-circle" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>id</th>
                    <th>categoryId</th>
                    <th>content</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>{wordElement}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
