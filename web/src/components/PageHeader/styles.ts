import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--color-primary);

  .top-bar-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--color-text-in-primary);
    padding: 1.6rem 0;
  }

  .top-bar-container a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }

  .top-bar-container a:hover {
    opacity: 0.6;
  }

  .top-bar-container > img {
    height: 1.6rem;
  }

  .header-content {
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;
  }

  .header-content strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }
`