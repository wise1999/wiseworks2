import React from "react"
import GlobalStyle from "../components/globalStyles"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import About from "../components/About/about"
import Skills from "../components/Skills/skills"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <GlobalStyle />
      <Banner />
      <About
        id="about"
        title="Who am I?"
        subtitle="Hi, what’s up? My name is Dominik, and I’m a web developer. My passion is coding and web designing aswell. "
        title2="A little bit about me"
        subtitle2="In my work I’m trying to be as much accurate and as I could be.  I always repeat myself to push the limits. I’d love to learn something new, so that’s why I’m here to help with your purposes.  I’ve learned HTML, CSS3, SCSS, JS, WP Backend so far. "
      />
      <Skills
        id="skills"
        title="My Skills"
        subtitle="I made lots of projects in my entire web developer & designer career. My experience allows me to combine different types of technologies in particular project."
        subtitle2="Do you a have project that you want me to get through? Don’t debate, just hit me up!"
        html5="95"
        scss="95"
        js="80"
        wp="95"
      />
    </Layout>
  </>
)
