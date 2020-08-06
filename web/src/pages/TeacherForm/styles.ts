import styled from 'styled-components';

export const PageContainer = styled.div`
  #page-content {
    width: 100vw;
    height: 100vh;
  }

  #page-content .page-header .header-content {
    margin-bottom: 6.4rem;
  }

  #page-content main {
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;
  }

  #page-content main fieldset {
    border: 0;
    padding: 0 2.4rem;
  }

  #page-content main fieldset + fieldset {
    margin-top: 6.4rem;
  }

  #page-content main fieldset legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }

  #page-content main fieldset legend button {
    background: none;
    border: 0;
    color: var(--color-primary);
    font: 700 1.6rem Archivo;
    cursor: pointer;
    transition: color 0.2s;
  }

  #page-content main fieldset legend button:hover {
    color: var(--color-primary-dark);
  }

  #page-content main fieldset .input-block + .textarea-block,
  #page-content main fieldset .select-block + .input-block {
    margin-top: 2.4rem;
  }

  #page-content main label {
    color: var(--color-text-complement);
  }

  #page-content main footer {
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;
  }

  #page-content main footer p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  #page-content main footer p img {
    margin-right: 2rem;
  }

  #page-content main footer button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;
  }

  #page-content main footer button:hover {
    background: var(--color-secundary-dark);
  }

  @media(min-width: 700px) {
    #page-content {
      max-width: 100vw;
    }

    #page-content .page-header .header-content {
      margin-bottom: 0;
    }

    #page-content main fieldset {
      padding: 0 6.4rem;
    }

    #page-content main fieldset .schedule-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      grid-gap: 1.6rem;
    }

    #page-content main fieldset .schedule-item .input-block {
      margin-top: 0 !important;
    }

    #page-content main footer {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    #page-content main footer p {
      justify-content: space-between;
    }

    #page-content main footer button {
      width: 20rem;
    }
  } 
`;