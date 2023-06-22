import React from "react";
import {
    AiOutlineDatabase,
    AiOutlineFire,
    AiOutlineFormatPainter,
} from "react-icons/ai";
import { BsGear, BsKey, BsTranslate, BsTree } from "react-icons/bs";
import { GiElectric, GiPipes } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";
import {
    MdConstruction,
    MdElderly,
    MdOutlineCarpenter,
    MdOutlineCleaningServices,
    MdOutlineComputer,
    MdOutlineDraw,
} from "react-icons/md";
import { TbMoodBoy } from "react-icons/tb";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import CategoryLayout from "../components/CategoryLayout/CategoryLayout";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";

const categories = [
  {
    id: 1,
    name: "Cerrajero",
    image: <BsKey />,
  },
  {
    id: 2,
    name: "Gasista",
    image: <AiOutlineFire />,
  },
  {
    id: 3,
    name: "Electricista",
    image: <GiElectric />,
  },
  {
    id: 4,
    name: "Plomero",
    image: <GiPipes />,
  },
  {
    id: 5,
    name: "Carpintero",
    image: <MdOutlineCarpenter />,
  },
  {
    id: 6,
    name: "Albañil",
    image: <MdConstruction />,
  },
  {
    id: 7,
    name: "Pintor",
    image: <AiOutlineFormatPainter />,
  },
  {
    id: 8,
    name: "Jardinero",
    image: <BsTree />,
  },
  {
    id: 9,
    name: "Limpieza",
    image: <MdOutlineCleaningServices />,
  },
  {
    id: 10,
    name: "Cuidado de niños",
    image: <TbMoodBoy />,
  },
  {
    id: 11,
    name: "Cuidado de adultos mayores",
    image: <MdElderly />,
  },
  {
    id: 12,
    name: "Cocinero",
    image: <LuChefHat />,
  },
  {
    id: 13,
    name: "Mecánico",
    image: <BsGear />,
  },
  {
    id: 14,
    name: "Diseñador gráfico",
    image: <MdOutlineDraw />,
  },
  {
    id: 15,
    name: "Traductor",
    image: <BsTranslate />,
  },
  {
    id: 16,
    name: "Programador",
    image: <AiOutlineDatabase />,
  },
  {
    id: 17,
    name: "Reparacion de PC",
    image: <MdOutlineComputer />,
  },
];

const CategoryPage = () => {
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
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              icon={category.image}
              profession={category.name}
            />
          ))}
        </CategoryLayout>
      </ScrollLayout.ScrollPart>
    </ScrollLayout>
  );
};

export default CategoryPage;
