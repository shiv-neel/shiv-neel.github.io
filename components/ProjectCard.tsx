import { Badge, Box, Button, Divider, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsFillEyeFill, BsGithub } from "react-icons/bs";

import { ProjectCardType } from "../data/project_data";

const ProjectCard: React.FC<ProjectCardType> = ({
  title,
  description,
  dates,
  stack,
  github,
  demo,
}) => {
  const BadgeColors = {
    React: "cyan",
    Node: "green",
    Redux: "purple",
    Graphql: "pink",
    PostgreSQL: "blue",
    Firebase: "orange",
    Python: "yellow",
    Typescript: "blue",
    Supabase: "green",
    Javascript: "yellow",
    Tensorflow: "red",
    "Jupyter Notebook": "orange",
    Go: "blue",
    "Next.js": "red",
    AWS: "orange",
    MongoDB: "green",
  };

  return (
    <Box>
      <Box className="flex items-center gap-10 w-full">
        <p className="text-2xl font-semibold">{title}</p>
        <Box className="flex gap-3 my-5 ml-auto flex-wrap justify-end">
          {stack.map((s, index) => (
            <Badge
              colorScheme={BadgeColors[s]}
              key={index}
              px={2}
              py={1}
              rounded="full"
            >
              {s}
            </Badge>
          ))}
        </Box>
      </Box>
      <p className="text-gray-400 mb-3">{dates}</p>
      <p className="text-md">{description}</p>
      <Box className="flex mt-5 gap-5">
        {github && (
          <Button colorScheme={"messenger"}>
            <a
              target="_blank"
              rel="noreferrer"
              href={github}
              className="flex gap-3 items-center"
            >
              <BsGithub />
              View Repository
            </a>
          </Button>
        )}
        {demo && (
          <Button variant="outline" colorScheme={"messenger"}>
            <a
              target="_blank"
              rel="noreferrer"
              href={demo}
              className="flex gap-3 items-center"
            >
              <BsFillEyeFill />
              Live Demo
            </a>
          </Button>
        )}
		{!github && !demo && (<Box className="flex mt-5 gap-5 items-center">
			<Button colorScheme={"messenger"} disabled>
            <a
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 items-center"
            >
              <BsGithub />
              View Repository
            </a>
          </Button>
		  <Button variant='outline' colorScheme={"messenger"} disabled>
            <a
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 items-center"
            >
              <BsFillEyeFill />
              Live Demo
            </a>
          </Button>
		  <p className="font-bold text-blue-500">Work in progress... stay tuned!</p>
		</Box>)}
      </Box>
      <Divider my={8} />
    </Box>
  );
};

export default ProjectCard;
