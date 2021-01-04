import React, { useState } from "react";
import "./CreateRecipe.css";

export default function CreateRecipe(props: any) {
  const { handleSubmit } = props;
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  let postData = {
    id: name,
    name: name,
    text: text,
    link: link,
  };

  return (
    <div className="CreateRecipeForm">
      Create Recipe
      <form onSubmit={(e) => handleSubmit(e, postData)}>
        <div className="InputFeild">
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div className="InputFeild">
          <label>
            Recipe
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </label>
        </div>
        <div className="InputFeild">
          <label>
            Link
            <input value={link} onChange={(e) => setLink(e.target.value)} />
          </label>
        </div>
        <input value="submit" type="submit" />
      </form>
    </div>
  );
}
