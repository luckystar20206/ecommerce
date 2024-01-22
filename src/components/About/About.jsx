import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about mt-[200px]">
      <section>
        <h2>Introduction</h2>
        <p>Hello everyone,</p>
        <p>
          I am excited to present the Ema-john e-commerce project. Created this
          website while I was learning Firebase authentication. Ema-john is
          designed to be like Amazon. Whether you're I am fascinated to see a
          nice website you have arrived here, Ema-John is crafted to be
          Responsive, secure, and Real-time changeable.
        </p>
      </section>
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>[Authentication]: Firebase authentication</li>
          <li>Responsive: Done</li>
          <li>Payment gateway: ssl commerz</li>
        </ul>
      </section>
      <section>
        <h2>Technologies Used</h2>
        <p>REACT, FIREBASE, TAILWIND CSS</p>
      </section>
      <section>
        <h2>Architecture</h2>
        <p>
          The layout of this website is taken from Fitma, This website's Figma
          file was not responsive, I have made this website responsive according
          to my idea with great difficulty.
        </p>
      </section>
      <section>
        <h2>User Interface (UI)</h2>
        <p>This website is fully real-time dynamic Changeable.</p>
      </section>
      <section>
        <h2>Security Measures</h2>
        <p>
          This website uses Firebase for authentication, and Firebase maintains
          a lot of security.
        </p>
      </section>
      <section>
        <h2>Challenges Faced</h2>
        <p>
          The most difficult part of building the website was when I worked with
          local storage via the context API, and the most difficult part of
          using Firebase's building functions was looking at their
          documentation.
        </p>
      </section>
      <section>
        <h2>Testing and Quality Assurance</h2>
        <p>
        This website is tested with Jest library
        </p>
      </section>
      <section>
        <h2>Future Enhancements</h2>
        <p>Payment system will be added</p>
      </section>
      <section>
        <h2>Live Demonstration</h2>
        <p>
          In the following presentation, we will delve deeper into each aspect
          of Ema-john, including a live demonstration to showcase its
          capabilities. I encourage you to ask questions and engage in
          discussions as we explore the exciting journey of Ema-john.
        </p>
        <Link to={"/"} className="cta-button mt-3">
          Explore Ema-john
        </Link>
      </section>
    </div>
  );
};

export default About;
