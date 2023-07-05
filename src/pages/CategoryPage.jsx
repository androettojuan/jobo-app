import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import CategoryLayout from "../components/CategoryLayout/CategoryLayout";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";
import { useNavigate } from "react-router";

const CategoryPage = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

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
              onClick={() => {
                navigate("/categories/" + category.id);
              }}
            />
          ))}
        </CategoryLayout>
      </ScrollLayout.ScrollPart>
    </ScrollLayout>
  );
};

export default CategoryPage;
