import styled from '@emotion/styled';
import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';

const ImageBackground = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 580px) / 2) 2rem;
  width: 100%;
  margin-top: 0;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "dan-novac-bp.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Frontend Masters + Gatsby &hearts;</h1>
        <p>
          Hello Hungary <Link to="/about/">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
