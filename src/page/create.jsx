import React, { useState } from "react";
import  { useAppContext } from "../store/store";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../componets/Layout";



function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate= useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "author":
        setAuthor(value);
        break;

        case "intro":
            setIntro(value);
            break;

            case "completed":
                setCompleted(e.target.checked);
                break;

                case "review":
                    setReview(value);
                    break;

      default:
    }
  }

  function handleOnChageFile(e) {
    const element = e.target;
    const file= element.files[0];
    const reader = new FileReader();
// esto es para decodificar una imagen
reader.readAsDataURL(file);

    reader.onloadend= function(){
        setCover(reader.result.toString());
    }
  }

  function handleSubmit(e){
e.preventDefault();

const newBoook={
    id: crypto.randomUUID(),
    title,
    author,
    cover,
    intro,
    completed,
    review
};


store.createItem(newBoook);
navigate("/");
  }

  return (
    <div>
        <Link to="/">home</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <div>title</div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div>
          <div>author</div>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>

        <div>
          <div>conver</div>
          <input type="file"
           name="cover" 
           onChange={handleOnChageFile}  />
          <div>{!! cover ? <img src={cover} 
          width = "200" alt="previe"
          />: 'No hay nada'}
          </div>
        </div>

        <div>
          <div>Introduction</div>
          <input
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>
        <div>
          <div>Completed</div>
          <input type="checkbox" 
          name="completed" 
          onChange={handleChange} 
          value={completed} 
          />
        </div>
        <div>
          <div>Review</div>
          <input type="text" 
          name="review" 
          onChange={handleChange} 
          value={review} 
          />
        </div>

        <input
          type="submit"
          value="Register book"
      
        />
      </form>
    </div>
  );
}



export default Create;
