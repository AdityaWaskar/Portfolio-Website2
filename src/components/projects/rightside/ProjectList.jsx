import React from "react";
import "./projectList.css";
import { motion } from "framer-motion";

const ProjectList = (props) => {
  const handleOnClick = (id) => {
    props.setSelect(id);
  };
  return (
    <div className="rightSideContainer">
      <div className="list">
        {props.project_list?.map((project, id) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            key={id}
            className={props.select.id === project.id ? "row active" : "row"}
            onClick={() => handleOnClick(project)}
          >
            <div className="name">{project.name}</div>
            <div className="desc">{project.desc}</div>
            <hr />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
