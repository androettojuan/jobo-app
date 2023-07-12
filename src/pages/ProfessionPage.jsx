import React, { useEffect, useState } from "react";
import ProfessionLayout from "../components/ProfessionLayout/ProfessionLayout";
import ProfesionalCard from "../components/ProfesionalCard/ProfesionalCard";
import { useParams } from "react-router";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const ProfessionPage = () => {
  const { id } = useParams();
  const [workers, setWorkers] = useState([]);
  const [jobs, setJobs] = useState([]);

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
          .filter((worker) => worker.job_id === parseInt(id))
          .map((worker) => (
            <ProfesionalCard
              key={worker.id}
              name={worker.name + " " + worker.lastname}
              lastname={worker.lastname}
              photo={worker.photo}
              profession={jobs.find((job) => job.id === worker.job_id).title}
            />
          ))}
      </ProfessionLayout.ContainerWorkers>
    </ProfessionLayout>
  );
};

export default ProfessionPage;
