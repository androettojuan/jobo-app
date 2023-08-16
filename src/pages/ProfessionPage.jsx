import React, { useEffect, useState } from "react";
import ProfessionLayout from "../components/ProfessionLayout/ProfessionLayout";
import ProfesionalCard from "../components/ProfesionalCard/ProfesionalCard";
import { useParams } from "react-router";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useNavigate } from "react-router";

const ProfessionPage = () => {
  const { id } = useParams();
  const userIdFavorites = parseInt(localStorage.getItem("userId"));
  const [workers, setWorkers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  async function getFavorites(id) {
    const response = await fetch("http://localhost:8080/favorites/" + id);
    const data = await response.json();
    setFavorites(data);
  }

  async function addFavorite(userId, userAdminId) {
    await fetch("http://localhost:8080/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        user_admin_id: userAdminId,
        is_favorite: 1,
      }),
    }).then(() => getFavorites(userIdFavorites));
  }

  async function deleteFavorite(id, adminId) {
    await fetch("http://localhost:8080/favorites/" + id + "/" + adminId, {
      method: "DELETE",
    }).then(() => getFavorites(userIdFavorites));
  }

  useEffect(() => {
    async function getWorkers() {
      const response = await fetch("http://localhost:8080/workers/" + id);
      const data = await response.json();
      setWorkers(data);
    }
    getJobs();
    getWorkers();
    getFavorites(userIdFavorites);
  }, [id, userIdFavorites]);

  async function getJobs() {
    const response = await fetch("http://localhost:8080/jobs");
    const data = await response.json();
    setJobs(data);
  }

  const nameProfession = () => {
    return jobs?.find((job) => job.id === parseInt(id))?.title;
  };

  return (
    <ProfessionLayout>
      <Breadcrumb
        pages={[
          { label: "Inicio", url: "/", name: "home" },
          { label: nameProfession(), name: "profession" },
        ]}
      ></Breadcrumb>
      <ProfessionLayout.ContainerWorkers>
        {workers
          .filter(
            (worker) => worker.job_id === parseInt(id) && worker.is_active
          )
          .map((worker) => (
            <ProfesionalCard
              key={worker.id}
              name={worker.name + " " + worker.lastname}
              lastname={worker.lastname}
              photo={worker.photo}
              favorite={
                favorites.find(
                  (favorite) => favorite.user_admin_id === worker.id
                )
                  ? true
                  : false
              }
              isFavorite={(e) => {
                e.stopPropagation();
                if (
                  favorites.find(
                    (favorite) =>
                      parseInt(favorite.user_admin_id) === parseInt(worker.id)
                  )
                ) {
                  deleteFavorite(
                    userIdFavorites,
                    favorites.find(
                      (favorite) =>
                        parseInt(favorite.user_admin_id) === parseInt(worker.id)
                    ).user_admin_id
                  );
                } else {
                  addFavorite(userIdFavorites, worker.id);
                }
              }}
              profession={jobs.find((job) => job.id === worker.job_id).title}
              onClick={() =>
                navigate(`/categories/${id}/profesional/${worker.id}}`)
              }
            />
          ))}
      </ProfessionLayout.ContainerWorkers>
    </ProfessionLayout>
  );
};

export default ProfessionPage;
