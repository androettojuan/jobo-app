import React, { useEffect, useState } from "react";
import FavoriteLayout from "../components/FavoriteLayout/FavoriteLayout";
import Title from "../components/Title/Title";
import { useNavigate } from "react-router";
import ProfesionalCard from "../components/ProfesionalCard/ProfesionalCard";
import NoResults from "../components/NoResults/NoResults";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const userId = parseInt(localStorage.getItem("userId"));
  const navigate = useNavigate();

  async function getFavorites(id) {
    const response = await fetch("http://localhost:8080/favorites/" + id);
    const data = await response.json();
    setFavorites(data);
  }

  async function deleteFavorite(id, adminId) {
    await fetch("http://localhost:8080/favorites/" + id + "/" + adminId, {
      method: "DELETE",
    }).then(() => getFavorites(userId));
  }

  async function getUsers() {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    return data;
  }

  async function getJobs() {
    const response = await fetch("http://localhost:8080/jobs");
    const data = await response.json();
    setJobs(data);
  }

  useEffect(() => {
    getFavorites(userId);
    getJobs();
    getUsers().then((data) => setUsers(data));
  }, [userId]);

  return (
    <FavoriteLayout>
      <Title size={"xl"}>Favoritos</Title>
      <FavoriteLayout.Content>
        {favorites.length > 0 ? (
          users
            .filter((user) => {
              return favorites.find(
                (favorite) => favorite.user_admin_id === user.id
              );
            })
            .map((user) => {
              return (
                <ProfesionalCard
                  key={user.id}
                  name={user.name + " " + user.lastname}
                  lastname={user.lastname}
                  photo={user.photo}
                  favorite={
                    favorites?.find(
                      (favorite) => favorite.user_admin_id === user.id
                    )
                      ? true
                      : false
                  }
                  isFavorite={(e) => {
                    e.stopPropagation();
                    if (
                      favorites?.find(
                        (favorite) =>
                          parseInt(favorite.user_admin_id) === parseInt(user.id)
                      )
                    ) {
                      deleteFavorite(
                        userId,
                        favorites?.find(
                          (favorite) =>
                            parseInt(favorite.user_admin_id) ===
                            parseInt(user.id)
                        ).user_admin_id
                      );
                    }
                  }}
                  profession={
                    jobs?.find((job) => job.id === user.job_id)?.title
                  }
                  onClick={() =>
                    navigate(
                      `/categories/${user.job_id}/profesional/${user.id}`
                    )
                  }
                />
              );
            })
        ) : (
          <FavoriteLayout.NoResults>
            <NoResults msg="No tienes ningun profesional agregado a favoritos." />
          </FavoriteLayout.NoResults>
        )}
      </FavoriteLayout.Content>
    </FavoriteLayout>
  );
};

export default FavoritePage;
