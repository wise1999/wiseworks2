import React, { useState, useEffect } from "react"
import links from "../../constants/links"
import styled from "styled-components"
import Logo from "../../images/logo.svg"
import { Link, animateScroll as scroll } from "react-scroll"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
  }, [])

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavWrapper className={scroll ? "scrolled" : ""}>
      <div className="masthead flex-container">
        <div className="inner-wrapper wrapper-nav">
          <img src={Logo} alt="Startup Logo" />
          <button
            className={
              isOpen
                ? `${"toggle-btn"} ${"toggle-btn-active"}`
                : `${"toggle-btn"}`
            }
            type="button"
            onClick={toggleNav}
            aria-label="Menu Button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            className={
              isOpen ? `${"nav-links"} ${"show-nav"}` : `${"nav-links"}`
            }
          >
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    activeClass="active"
                    to={item.text}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  padding: 2rem 0;
  &.scrolled {
    background-color: #03000b;
  }

  @media (max-width: 992px) {
    background: #03000b;
    padding: 1.5rem 0;
  }

  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;

    img {
      height: 35px;
      z-index: 1;

      @media (max-width: 492px) {
        height: 35px !important;
      }
    }

    .inner-wrapper {
      max-width: 80vw;
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      justify-content: space-between;
      width: 100%;

      &.wrapper-nav {
        align-items: center;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: linear-gradient(
      90deg,
      #03000b 19.51%,
      rgba(3, 0, 11, 1) 48.32%,
      rgba(3, 0, 11, 1)
    );
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;

    li {
      list-style: none;
      font-weight: 400;
      margin-left: 0;
      padding: 0.75rem 0;
      margin-left: 1rem;

      a {
        text-decoration: none;
        text-transform: capitalize;
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        transition: 0.3s;
        padding: 15px 35px;

        &.active {
          color: #75737b;
          background: #16151a;
          box-shadow: 0px 0px 25px 3px rgba(22, 21, 26, 0.25);
          border-radius: 10px;
        }
      }
      &:hover {
        cursor: pointer;
        a {
          color: #5a1bee;
        }
      }

      &:last-child {
        a {
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
          background-size: 400% 400%;
          animation: Gradient 5s ease infinite;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-size: 150% 150%;
            color: #fff;
          }
        }
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-left: 1.5rem;
      }
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

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 55px;
    height: 45px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    z-index: 1;
    background-color: transparent;
    border: none;

    span {
      display: block;
      position: absolute;
      height: 9px;
      width: 100%;
      background: #fff;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 0px;
      }

      &:nth-child(2) {
        top: 18px;
        background-color: #5a1bee;
      }

      &:nth-child(3) {
        top: 36px;
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          top: 18px;
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          -o-transform: rotate(135deg);
          transform: rotate(135deg);
        }

        &:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        &:nth-child(3) {
          top: 18px;
          -webkit-transform: rotate(-135deg);
          -moz-transform: rotate(-135deg);
          -o-transform: rotate(-135deg);
          transform: rotate(-135deg);
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .nav-links li {
      margin-left: 0;

      &:last-child {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 992px) {
    .nav-links li {
      margin: 15px 0;
    }

    .nav-links li a {
      font-size: 30px;
    }

    .masthead img {
      height: 45px;
    }
    .inner-wrapper.wrapper-nav {
      max-width: 90vw;
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;
    }
  }
`

export default Navbar
