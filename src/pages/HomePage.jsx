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
                  icon={category?.icon}
                  color={
                    category?.id % 5 === 0
                      ? "primary"
                      : category?.id % 5 === 1
                      ? "secondary"
                      : category?.id % 5 === 2
                      ? "tertiary"
                      : category?.id % 5 === 3
                      ? "quaternary"
                      : "quinary"
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
