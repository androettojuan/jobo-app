import React, { useCallback, useEffect, useState } from "react";
import Title from "../components/Title/Title";
import Comments from "../components/Comments/Comments";
import CommentsLayout from "../components/CommentsLayout/CommentsLayout";
import { useUserData } from "../utils/userData";
import NoResults from "../components/NoResults/NoResults";

const CommentsPage = () => {
  const user = useUserData();
  const token = localStorage.getItem("token");
  const [comments, setComments] = useState([]);

  const getComments = useCallback(
    async (id) => {
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
    },
    [token]
  );

  useEffect(() => {
    getComments(user.id);
  }, [getComments, user.id]);

  return (
    <CommentsLayout>
      <CommentsLayout.Title>
        <Title>Comentarios</Title>
      </CommentsLayout.Title>
      <CommentsLayout.Comments>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comments
              key={comment.id}
              comment={comment}
              rating={4}
              photoAdmin={user?.photo}
              nameAdmin={user?.name}
              isAdmin={user?.is_profesional ? true : false}
              update={() => {
                getComments(user.id);
              }}
            ></Comments>
          ))
        ) : (
          <CommentsLayout.NoResults>
            <NoResults msg={"Todavía no hay comentarios"} />
          </CommentsLayout.NoResults>
        )}
      </CommentsLayout.Comments>
    </CommentsLayout>
  );
};

export default CommentsPage;
