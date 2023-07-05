import React, { useEffect, useState } from "react";
import ProfessionLayout from "../components/ProfessionLayout/ProfessionLayout";
import ProfesionalCard from "../components/ProfesionalCard/ProfesionalCard";
import { useParams } from "react-router";

const ProfessionPage = () => {
  const { id } = useParams();
  const [workers, setWorkers] = useState([]);
  const [jobs, setJobs] = useState([]);

  async function getWorkers() {
    const response = await fetch("http://localhost:8080/workers/1");
    const data = await response.json();
    setWorkers(data);
  }

  async function getJobs() {
    const response = await fetch("http://localhost:8080/jobs");
    const data = await response.json();
    setJobs(data);
  }

  useEffect(() => {
    getJobs();
    getWorkers();
  }, []);

  return (
    <ProfessionLayout>
      <ProfessionLayout.Title>
        {jobs?.find((job) => job.id === parseInt(id))?.title}
      </ProfessionLayout.Title>
      <ProfessionLayout.ContainerWorkers>
        {workers.map((worker) => (
          <ProfessionLayout.ContainerWorkers key={worker.id}>
            <ProfesionalCard
              name={worker.name}
              profession={jobs.find((job) => job.id === worker.job_id).title}
              photo={worker.photo}
            ></ProfesionalCard>
          </ProfessionLayout.ContainerWorkers>
        ))}
      </ProfessionLayout.ContainerWorkers>
    </ProfessionLayout>
  );
};

export default ProfessionPage;
