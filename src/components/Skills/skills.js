import React from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import Button from "../Button/button"
import { Link } from "react-scroll"

const Skills = ({ title, subtitle, subtitle2, html5, scss, js, wp }) => {
  return (
    <SkillsWrapper>
      <div className="content-container">
        <div className="row">
          <div className="skills-col">
            <div class="skill_box">
              <span>Technology Stack</span>
              <div class="skills_holder">
                <div class="single-skill">
                  <div class="type_name">HTML5</div>
                  <div class="progress-bar">
                    <div style={{ width: html5 + "%" }} class="completed"></div>
                    <strong>{html5}%</strong>
                  </div>
                </div>
                <div class="single-skill">
                  <div class="type_name">CSS + SCSS</div>
                  <div class="progress-bar">
                    <div style={{ width: scss + "%" }} class="completed"></div>
                    <strong>{scss}%</strong>
                  </div>
                </div>
                <div class="single-skill">
                  <div class="type_name">Javascript</div>
                  <div class="progress-bar">
                    <div style={{ width: js + "%" }} class="completed"></div>
                    <strong>{js}%</strong>
                  </div>
                </div>
                <div class="single-skill">
                  <div class="type_name">PHP + Wordpress DEV</div>
                  <div class="progress-bar">
                    <div style={{ width: wp + "%" }} class="completed"></div>
                    <strong>{wp}%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-col">
            <h2 class="main-title">{title}</h2>
            <p>{subtitle}</p>
            <p>{subtitle2}</p>
            <Link
              className="recent_work"
              to="perks"
              smooth={true}
              duration={500}
            >
              <motion.span
                initial="hidden"
                animate="visible"
                className="button_cta"
                transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
              >
                Conctact me
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </SkillsWrapper>
  )
}

const SkillsWrapper = styled.section`
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

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    padding-left: 0;
    margin: 55px 0 0;

    li {
      margin: 0 25px;
      height: 50px;
      width: 50px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      &:first-child {
        margin-left: 0;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xNi4wNzMzIDE1Ljg5NjJMNy41OTM0OCAyNC4zNzZDNy4wMjE0MSAyNC45NDggNy4wMjE0MSAyNS44NzU1IDcuNTkzNDggMjYuNDQ3NUwxNS4yNDk3IDM0LjEwMzhDMTUuODIxNyAzNC42NzU5IDE2Ljc0OTIgMzQuNjc2IDE3LjMyMTMgMzQuMTAzOEMxNy44OTM0IDMzLjUzMTcgMTcuODkzNCAzMi42MDQzIDE3LjMyMTMgMzIuMDMyMkwxMC43MDA5IDI1LjQxMTdMMTguMTQ0OCAxNy45Njc3QzE4LjcxNjkgMTcuMzk1NiAxOC43MTY5IDE2LjQ2ODIgMTguMTQ0OCAxNS44OTYxQzE3LjU3MjggMTUuMzI0IDE2LjY0NTIgMTUuMzI0IDE2LjA3MzMgMTUuODk2MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNC43NDk3IDE1Ljg5NjFDMzQuMTc3NyAxNS4zMjQgMzMuMjUwMiAxNS4zMjQgMzIuNjc4MSAxNS44OTYxQzMyLjEwNjEgMTYuNDY4MiAzMi4xMDYxIDE3LjM5NTYgMzIuNjc4MSAxNy45Njc3TDM5LjI5ODYgMjQuNTg4MkwzMS44NTQ2IDMyLjAzMjJDMzEuMjgyNSAzMi42MDQzIDMxLjI4MjUgMzMuNTMxNyAzMS44NTQ2IDM0LjEwMzhDMzIuNDI2NiAzNC42NzU4IDMzLjM1NDEgMzQuNjc1OSAzMy45MjYyIDM0LjEwMzhMNDIuNDA2IDI1LjYyNEM0Mi45NzgxIDI1LjA1MTkgNDIuOTc4MSAyNC4xMjQ1IDQyLjQwNiAyMy41NTI0TDM0Ljc0OTcgMTUuODk2MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yOS4zMzQ3IDEyLjY1MjJDMjguNTcxNiAxMi4zODI2IDI3LjczNTEgMTIuNzgyOCAyNy40NjU2IDEzLjU0NTZMMTkuNzE5NyAzNS40Nzg5QzE5LjQ1MDQgMzYuMjQxOCAxOS44NTAzIDM3LjA3ODYgMjAuNjEzMiAzNy4zNDhDMjEuMzc1OCAzNy42MTczIDIyLjIxMjggMzcuMjE3NSAyMi40ODIyIDM2LjQ1NDVMMzAuMjI4MSAxNC41MjEyQzMwLjQ5NzUgMTMuNzU4MyAzMC4wOTc1IDEyLjkyMTUgMjkuMzM0NyAxMi42NTIyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQyLjkyMzIgNi43MDg5OEg3LjA3NjMyQzMuMTc0MjcgNi43MDg5OCAtMC4wMDAyNDQxNDEgOS44ODM1IC0wLjAwMDI0NDE0MSAxMy43ODU1VjM2LjIxNDNDLTAuMDAwMjQ0MTQxIDQwLjExNjMgMy4xNzQyNyA0My4yOTA4IDcuMDc2MzIgNDMuMjkwOEg0Mi45MjMyQzQ2LjgyNTIgNDMuMjkwOCA0OS45OTk4IDQwLjExNjMgNDkuOTk5OCAzNi4yMTQzVjEzLjc4NTVDNDkuOTk5OCA5Ljg4MzUgNDYuODI1MiA2LjcwODk4IDQyLjkyMzIgNi43MDg5OFpNNDcuMDcwMSAzNi4yMTQzQzQ3LjA3MDEgMzguNTAwOSA0NS4yMDk4IDQwLjM2MTEgNDIuOTIzMiA0MC4zNjExSDcuMDc2MzJDNC43ODk3IDQwLjM2MTEgMi45Mjk0NCAzOC41MDA5IDIuOTI5NDQgMzYuMjE0M1YxMy43ODU1QzIuOTI5NDQgMTEuNDk4OSA0Ljc4OTcgOS42Mzg2NyA3LjA3NjMyIDkuNjM4NjdINDIuOTIzMkM0NS4yMDk4IDkuNjM4NjcgNDcuMDcwMSAxMS40OTg5IDQ3LjA3MDEgMTMuNzg1NVYzNi4yMTQzWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwMDI0NDE0MSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K");
      }

      &:nth-child(2) {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik00OS45OTk3IDI0Ljk5NjlDNDkuOTk4NiAyNC40ODk3IDQ5LjczNTIgMjQuMDE5MiA0OS4zMDM1IDIzLjc1M0w0NC4yMjIgMjAuNjIwNkw0OS4zMDg4IDE3LjQ1NDVDNDkuNzM3OCAxNy4xODc1IDQ5Ljk5ODkgMTYuNzE4MyA0OS45OTk3IDE2LjIxMzFDNTAuMDAwNCAxNS43MDc4IDQ5Ljc0MDggMTUuMjM3OCA0OS4zMTI2IDE0Ljk2OTZMMjUuNzc3NSAwLjIyMzUzNEMyNS4zMDE4IC0wLjA3NDUxMTQgMjQuNjk3NiAtMC4wNzQ1MTE0IDI0LjIyMTkgMC4yMjM1MzRMMC42ODY4NjQgMTQuOTY5NkMwLjI1ODc0MSAxNS4yMzc4IC0wLjAwMDkyNjM4NSAxNS43MDc4IC0wLjAwMDI0Mjc5NCAxNi4yMTMxQzAuMDAwNTM4NDUzIDE2LjcxODQgMC4yNjE1NzMgMTcuMTg3NiAwLjY5MDU3NSAxNy40NTQ1TDUuNzQyNTEgMjAuNTk4OEwwLjY4ODMyOSAyMy43NTc5QzAuMjU5NjE5IDI0LjAyNTkgLTAuMDAwNjMzNDE4IDI0LjQ5NTkgLTAuMDAwMTQ1MTM4IDI1LjAwMTVDMC4wMDAzNDMxNDEgMjUuNTA3IDAuMjYxNDc1IDI1Ljk3NjYgMC42OTA2NzIgMjYuMjQzN0w1Ljc0MjYxIDI5LjM4ODFMMC42ODgzMjkgMzIuNTQ2OUMwLjI2MDMwMyAzMi44MTQ1IDAuMDAwMTQ3ODI5IDMzLjI4MzYgLTAuMDAwMTQ1MTM4IDMzLjc4ODNDLTAuMDAwNDM4MTA2IDM0LjI5MzEgMC4yNTkyMjkgMzQuNzYyNSAwLjY4Njk2MiAzNS4wMzA0TDI0LjIyMiA0OS43NzY1QzI0LjQ1OTkgNDkuOTI1NSAyNC43Mjk4IDUwIDI0Ljk5OTggNTBDMjUuMjY5NyA1MCAyNS41Mzk3IDQ5LjkyNTUgMjUuNzc3NSA0OS43NzY1TDQ5LjMxMjYgMzUuMDMwNEM0OS43NDE3IDM0Ljc2MTYgNTAuMDAxNSAzNC4yOTAxIDQ5Ljk5OTcgMzMuNzgzOEM0OS45OTc4IDMzLjI3NzQgNDkuNzM0NSAzMi44MDc5IDQ5LjMwMzUgMzIuNTQyMkw0NC4yMjIgMjkuNDA5N0w0OS4zMDg4IDI2LjI0MzZDNDkuNzM5NCAyNS45NzU3IDUwLjAwMDcgMjUuNTA0IDQ5Ljk5OTcgMjQuOTk2OVpNNC4yMzAyMSAxNi4yMDdMMjQuOTk5OCAzLjE5MzY0TDQ1Ljc2OTMgMTYuMjA3QzQ1LjU2OTcgMTYuMzMxMiAyNS41OTUgMjguNzYzNiAyNC45OTk4IDI5LjEzNDFMNC4yMzAyMSAxNi4yMDdaTTQ1Ljc1OTcgMzMuNzk5M0wyNC45OTk4IDQ2LjgwNjZMNC4yMjYxMSAzMy43OTA3TDguNTEyMTMgMzEuMTExOUwyNC4yMjU3IDQwLjg5MjFDMjQuNDYyNyA0MS4wMzk2IDI0LjczMTIgNDEuMTEzMyAyNC45OTk4IDQxLjExMzNDMjUuMjY4MyA0MS4xMTMzIDI1LjUzNjkgNDEuMDM5NiAyNS43NzM4IDQwLjg5MjFMNDEuNDQ0IDMxLjEzODhMNDUuNzU5NyAzMy43OTkzWk0yNC45OTk4IDM3LjkyMzFMNC4yMzI2NSAyNC45OTc2TDguNTEyMTMgMjIuMzIyOUwyNC4yMjU3IDMyLjEwMzFDMjQuNDYyNyAzMi4yNTA2IDI0LjczMTIgMzIuMzI0MyAyNC45OTk4IDMyLjMyNDNDMjUuMjY4MyAzMi4zMjQzIDI1LjUzNjkgMzIuMjUwNiAyNS43NzM4IDMyLjEwMzFMNDEuNDQ0IDIyLjM0OThMNDUuNzUzMSAyNS4wMDYxQzQ1LjYzNDEgMjUuMDgwMiAyNS41NDk2IDM3LjU4MDggMjQuOTk5OCAzNy45MjMxWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwMDI0NDE0MSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K");
      }
      &:last-child {
        margin-right: 0;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik00OS45OTk4IDE0LjcwNTlMNDQuNDg1MSA3LjM1Mjk0TDQ5Ljk5OTggMEgzMC44ODIxVjI2LjQ3MDZIMjYuNDcwM1YyOS40MTE4SDE3LjY0NjhWMzIuMzUyOUg4LjgyMzI5VjM1LjI5NDFILTAuMDAwMjQ0MTQxVjUwSDM4LjIzNTFWMjYuNDcwNkgzMy44MjMzVjE0LjcwNTlINDkuOTk5OFpNMjAuNTg4IDMyLjM1MjlIMjYuNDcwM1Y0Ny4wNTg4SDIwLjU4OEMyMC41ODggNDUuMjE0OCAyMC41ODggMzQuMTc0MyAyMC41ODggMzIuMzUyOVpNMTEuNzY0NSAzNS4yOTQxSDE3LjY0NjhWNDcuMDU4OEgxMS43NjQ1QzExLjc2NDUgNDYuMDA0NCAxMS43NjQ1IDM2Ljk0MzIgMTEuNzY0NSAzNS4yOTQxWk0yLjk0MDkzIDM4LjIzNTNIOC44MjMyOVY0Ny4wNTg4SDIuOTQwOTNWMzguMjM1M1pNMzUuMjkzOSA0Ny4wNTg4SDI5LjQxMTVDMjkuNDExNSA0Ni4yNzQxIDI5LjQxMTUgMzAuMTgxIDI5LjQxMTUgMjkuNDExOEgzNS4yOTM5VjQ3LjA1ODhaTTMzLjgyMzMgMi45NDExOEg0NC4xMTc0TDQwLjgwODYgNy4zNTI5NEw0NC4xMTc0IDExLjc2NDdIMzMuODIzM1YyLjk0MTE4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0LjkwNTcgMTcuNTczM0wxOC4wMTc1IDIwLjY4NTFMMjQuOTk5OCAxMy44MDdWMTYuNjU5NUgyNy45NDA5VjguODIzNjFIMjAuMTA1MVYxMS43NjQ4SDIyLjg4MTlMMTguMDMzMSAxNi41NDEyTDE0LjkwNTcgMTMuNDEzOEwyLjM5NDg3IDI1LjkyNDZMNC40NzQ1NyAyOC4wMDQzTDE0LjkwNTcgMTcuNTczM1oiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wMDAyNDQxNDEpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==");
      }
    }
  }

  .text-col {
    width: 40%;

    @media (max-width: 1024px) {
      width: 100%;
      margin-bottom: 150px;
    }
  }

  .button_cta {
    width: max-content;
    margin-right: auto;
    display: block;
    background: linear-gradient(
      -22deg,
      rgba(90, 27, 238, 1),
      rgba(90, 27, 238, 0.65)
    );
    box-shadow: 0px 0px 25px 3px rgba(90, 27, 238, 0.35);
    border-radius: 10px;
    font-weight: 700;
    font-size: 22px;
    padding: 15px 35px;
    transition: all 0.3s ease-in-out;
    background-size: 150% 150%;
    font-weight: 700;
    font-size: 22px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      animation: Gradient 5s ease infinite;
      background-size: 400% 400%;
      color: #fff;
    }

    @keyframes Gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

  .skills-col {
    width: 50%;
    z-index: 9;

    @media (max-width: 1024px) {
      width: 100%;
    }

    .skill_box {
      background: rgba(22, 21, 26, 0.98);
      border-radius: 10px;
      padding: 30px;
      position: relative;

      span {
        font-size: 25px;
        color: #ffffff;
        display: block;
        margin-bottom: 25px;
        text-align: left;
      }

      .single-skill {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 40px;

        .type_name {
          font-size: 15px;
          padding: 15px;
          text-align: center;
          text-transform: uppercase;
          color: #75737b;
          background: #ffffff;
          border-radius: 10px;
          font-weight: 700;
          max-width: max-content;
          width: 100%;
          margin-right: auto;

          @media (max-width: 768px) {
            margin-bottom: 25px;
          }
        }

        &:last-child {
          margin-bottom: 0%;
        }

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }

      .progress-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 400px;
        width: 100%;
        height: 30px;
        border-radius: 20px;
        background-color: #ffffff;
        position: relative;
        z-index: 1;
        margin-left: 20px;
        .completed {
          border-radius: 20px;
          height: 30px;
          z-index: 2;
          position: absolute;
          left: -1px;
          top: 0;
          background: rgba(90, 27, 238, 1);
        }

        @media (max-width: 768px) {
          max-width: 100%;
          margin-left: 0;
        }
      }

      strong {
        z-index: 3;
        display: block;
        margin: 0;
        font-size: 18px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: lowercase;
        color: #ffffff;
        font-weight: 700;
      }

      &:after {
        z-index: -1;
        border-radius: 10px;
        content: "";
        position: absolute;
        right: 0;
        top: -70px;
        width: 95%;
        height: 100%;
        background: #5a1bee;
        box-shadow: 0px 0px 25px 3px rgba(90, 27, 238, 0.25);
        border-radius: 20px;
        transform: rotate(7.5deg);
      }
    }
  }
`

export default Skills
