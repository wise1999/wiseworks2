import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import tiles from "../../images/about-tiles.svg"
import { motion, useAnimation } from "framer-motion"

const About = ({ title, subtitle, title2, subtitle2, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <TextBlockImgWrapper>
      <div className="dot dot_big" />
      <div className="dot dot_small" />
      <div className="right-circle_gray" />
      <div className="content-container">
        <div className="inner-wrapper">
          <h2 class="main-title">{title}</h2>
          <p>{subtitle}</p>
          <h2>{title2}</h2>
          <p>{subtitle2}</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </TextBlockImgWrapper>
  )
}

const TextBlockImgWrapper = styled.section`
  background-image: url(${tiles});
  background-color: #03000b;
  background-size: 1000px 800px;
  background-position: right top;
  background-repeat: no-repeat;
  text-align: center;
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    background-image: none;
  }

  .dot {
    border-radius: 100%;
    background-color: #3a3636;
    position: absolute;
    box-shadow: 0px 0px 25px 3px rgba(90, 27, 238, 0.25);

    &.dot_big {
      height: 15px;
      width: 15px;
      top: 50vh;
      right: 20vw;

      &:after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        height: 10px;
        width: 10px;
        border-radius: 100%;
        animation: pulse 2s infinite;
        transform-origin: center center;
        background-color: #3a3636;

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          25% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      }
      @media (max-width: 992px) {
        bottom: 5vh;
        top: unset;
      }
    }
    &.dot_small {
      height: 10px;
      width: 10px;
      top: 52vh;
      right: 17vw;
      &:after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        height: 5px;
        width: 5px;
        border-radius: 100%;
        animation: pulse 1.5s infinite;
        transform-origin: center center;
        background-color: #3a3636;

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          25% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(4.5);
            opacity: 0;
          }
        }
      }

      @media (max-width: 992px) {
        bottom: 2.5vh;
        top: unset;
      }
    }
  }

  .right-circle_gray {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 100%;
    border: 2px solid #373738;
    right: -175px;
    top: 25vh;
    transform: translateY(-50%);
    animation: 17s spinner2 infinite alternate;

    &:after {
      content: "";
      border-radius: 100%;
      position: absolute;
      left: -7.5px;
      width: 15px;
      top: 50%;
      transform: translateY(-50%);
      height: 15px;
      background: #373738;
      box-shadow: 0px 0px 25px 3px #373738;
    }

    @keyframes spinner2 {
      0% {
        transform: rotate(88deg);
      }

      100% {
        transform: rotate(-88deg);
      }
    }

    @media (max-width: 992px) {
      right: -225px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  .content-container {
    max-width: 80vw;
  }

  .inner-wrapper {
    max-width: 50vw;

    @media (max-width: 992px) {
      max-width: 100%;
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
`

export default About
