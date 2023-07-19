import React, { useEffect, useState } from "react";
import Title from "../components/Title/Title";
import Comments from "../components/Comments/Comments";
import CommentsLayout from "../components/CommentsLayout/CommentsLayout";
import { useUserData } from "../utils/userData";

const CommentsPage = () => {
  const user = useUserData();
  const token = localStorage.getItem("token");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments(id) {
      await fetch("http://localhost:8080/comments/" + id, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
        });
    }
    getComments(user.id);
  }, [token, user.id]);

  return (
    <CommentsLayout>
      <CommentsLayout.Title>
        <Title>Comentarios</Title>
      </CommentsLayout.Title>
      <CommentsLayout.Comments>
        {comments.map((comment) => (
          <Comments
            key={comment.id}
            comment={comment}
            onClick={() => console.log("click")}
            rating={4}
            photoAdmin={user?.photo}
            nameAdmin={user?.name}
            isAdmin={user?.is_profesional ? true : false}
          ></Comments>
        ))}
      </CommentsLayout.Comments>
    </CommentsLayout>
  );
};

export default CommentsPage;
