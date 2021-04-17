import React from "react"
import styled from "styled-components"

const Button = props => {
  return (
    <>
      {props.anchor ? (
        <ButtonWrapper
          aria-label={props.label}
          className="anchor"
          as="a"
          href={props.href}
        >
          {props.cta}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper aria-label={props.label} type={props.type}>
          {props.cta}
        </ButtonWrapper>
      )}
    </>
  )
}

const ButtonWrapper = styled.button`
          background: linear-gradient(-22deg, rgba(90, 27, 238, 1), rgba(90, 27, 238, .65));
          box-shadow: 0px 0px 25px 3px rgba(90, 27, 238, 0.35);
          border-radius: 10px;
          font-weight: 700;
          font-size: 22px;
          padding: 15px 35px;
          transition: all .3s ease-in-out;
          background-size: 150% 150%;
          font-weight: 700;
          font-size: 22px;
          color: #fff;
          text-decoration: none;
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
`

export default Button
