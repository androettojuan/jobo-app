import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import CategoryLayout from "../components/CategoryLayout/CategoryLayout";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";

const CategoryPage = () => {
  const [jobs, setJobs] = useState([]);

  async function getJobs() {
    const response = await fetch("http://localhost:8080/jobs");
    const data = await response.json();
    setJobs(data);
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <ScrollLayout>
      <CategoryLayout>
        <Breadcrumb
          pages={[
            { label: "Categorias", url: "/categories", name: "categories" },
          ]}
        ></Breadcrumb>
      </CategoryLayout>
      <ScrollLayout.ScrollPart>
        <CategoryLayout>
          {jobs.map((category) => (
            <CategoryButton
              key={category.id}
              profession={category.title}
              icon={category.icon}
            />
          ))}
        </CategoryLayout>
      </ScrollLayout.ScrollPart>
    </ScrollLayout>
  );
};

export default CategoryPage;
