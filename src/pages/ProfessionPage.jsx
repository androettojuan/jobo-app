import React, { useEffect, useState } from "react";
import ProfessionLayout from "../components/ProfessionLayout/ProfessionLayout";
import ProfesionalCard from "../components/ProfesionalCard/ProfesionalCard";
import { useParams } from "react-router";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useNavigate } from "react-router";

const ProfessionPage = () => {
  const { id } = useParams();
  const [workers, setWorkers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getWorkers() {
      const response = await fetch("http://localhost:8080/workers/" + id);
      const data = await response.json();
      setWorkers(data);
    }
    getJobs();
    getWorkers();
  }, [id]);

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
          { label: "Categorias", url: "/categories", name: "categories" },
          { label: nameProfession(), name: "profession" },
        ]}
      ></Breadcrumb>
      <ProfessionLayout.ContainerWorkers>
        {workers
          .filter((worker) => worker.job_id === parseInt(id) && worker.is_active)
          .map((worker) => (
            <ProfesionalCard
              key={worker.id}
              name={worker.name + " " + worker.lastname}
              lastname={worker.lastname}
              photo={worker.photo}
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
