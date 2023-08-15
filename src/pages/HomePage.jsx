import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import {
  StyledHomeLogo,
  StyledHomeUser,
} from "../components/HomeLayout/HomeLayout.styles";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";
import Title from "../components/Title/Title";

const HomePage = () => {
  const navigate = useNavigate();
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
      <ScrollLayout.ScrollPart>
        <HomeLayout>
          <HomeLayout.Header>
            <StyledHomeLogo src="/img/JOBO.png" alt="logo" />
            <StyledHomeUser onClick={() => navigate("/account")} />
          </HomeLayout.Header>
          <ScrollLayout.ScrollPart>
            <HomeLayout.Title>
              <Title size={"xl"}>Categorias</Title>
            </HomeLayout.Title>
            <HomeLayout.Content>
              {jobs.map((category) => (
                <CategoryButton
                  key={category.id}
                  profession={category?.title}
                  color={
                    category.id % 2 === 0 ? "tertiary" : "secondary"
                  }
                  onClick={() => {
                    navigate("/categories/" + category.id);
                  }}
                />
              ))}
            </HomeLayout.Content>
          </ScrollLayout.ScrollPart>
        </HomeLayout>
      </ScrollLayout.ScrollPart>
    </ScrollLayout>
  );
};

export default HomePage;
