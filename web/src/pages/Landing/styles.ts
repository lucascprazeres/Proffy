import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  .hero-image {
    width: 100%;
  }

  .logo-container {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  .logo-container img {
    height: 10rem;
  }

  .logo-container h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;
  }

  .buttons-container a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;

    font: 700 2.0rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  .buttons-container a:first-child {
    margin-right: 1.6rem;
  }

  .buttons-container a img {
    margin-right: 2.4rem
  }

  .buttons-container img {
    width: 4rem;
  }

  .buttons-container a.study {
    background: var(--color-primary-lighter);
  }

  .buttons-container a.study:hover {
    background: var(--color-primary-light);
  }

  .buttons-container a.give-classes {
    background: var(--color-secundary);
  }

  .buttons-container a.give-classes:hover {
    background: var(--color-secundary-dark);
  }

  .total-connections {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total-connections img {
    margin-left: 0.8rem;
  }

  @media(min-width: 1100px) {
    #page-content {
      max-width: 1100px;

      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas: 
        "logo hero hero"
        "buttons buttons total"
      ;
    }
  }

  .logo-container {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;
  }

  .logo-container h2 {
    text-align: initial;
    font-size: 3.6rem;
  }

  .logo-container img {
    height: 100%;
  }

  .hero-image {
    grid-area: hero;
    justify-self: end;
  }

  .buttons-container {
    grid-area: buttons;
    justify-content: flex-start; 
  }

  .buttons-container a {
    font-siZe: 2.4rem;
  }

  .total-connections {
    grid-area: total;
    justify-self: end;
  }
`