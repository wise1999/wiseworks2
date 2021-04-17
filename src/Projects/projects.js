import React from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { Link } from "react-scroll"

const Projects = ({
  title,
  item1_title,
  item1_subtitle,
  item1_bg,
  item2_title,
  item2_subtitle,
  item2_bg,
  item3_title,
  item3_subtitle,
  item3_bg,
  item4_title,
  item4_subtitle,
  item4_bg,
  item5_title,
  item5_subtitle,
  item5_bg,
  item6_title,
  item6_subtitle,
  item6_bg,
}) => {
  return (
    <ProjectsWrapper>
      <div className="content-container">
        <div className="row"></div>
      </div>
    </ProjectsWrapper>
  )
}

const ProjectsWrapper = styled.section`
  background-color: #03000b;
  text-align: center;
  padding: 120px 0 75px 0;
  position: relative;
  overflow: hidden;

  .content-container {
    max-width: 80vw;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media (max-width: 1024px) {
        flex-direction: column-reverse;
      }
    }
  }

  h2 {
    font-weight: bold;
    font-size: 40px;
    line-height: 46px;
    color: #ffffff;
    text-align: left;

    &.main-title {
      position: relative;

      &:before {
        position: absolute;
        width: 150px;
        height: 30px;
        content: "";
        top: -40px;
        left: 0;
        background: linear-gradient(
          90deg,
          rgba(22, 21, 26, 0) -3.19%,
          #16151a 100%
        );
      }
    }
  }

  p {
    text-align: left;
    font-size: 22px;
    color: #75737b;
    margin-bottom: 75px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default Projects
