import React from "react";
import Title from "../components/Title/Title";
import Comments from "../components/Comments/Comments";
import CommentsLayout from "../components/CommentsLayout/CommentsLayout";

const CommentsPage = () => {
  return (
    <CommentsLayout>
      <CommentsLayout.Title>
        <Title>Comentarios</Title>
      </CommentsLayout.Title>
      <CommentsLayout.Comments>
        <Comments
          name="Mario Santos"
          photo="/img/mariosantos.png"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
          onClick={() => console.log("click")}
          rating={4}
        ></Comments>
        <Comments
          name="Mario Santos"
          photo="/img/mariosantos.png"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
          onClick={() => console.log("click")}
          rating={2}
        ></Comments>
        <Comments
          name="Mario Santos"
          photo="/img/mariosantos.png"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
          onClick={() => console.log("click")}
          rating={5}
        ></Comments>
      </CommentsLayout.Comments>
    </CommentsLayout>
  );
};

export default CommentsPage;
