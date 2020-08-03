import styled from 'styled-components';

export const PageContainer = styled.div`
  #page-content {
    width: 100vw;
    height: 100vh;
  }

  #search-teachers {
  margin-top: 3.2rem;
  }

  #search-teachers label {
    color: var(--color-text-in-primary);
  }

  #search-teachers .input-block {
    position: relative;
  }

  #search-teachers .input-block + .input-block {
    margin-top: 1.4rem;
  }

  #search-teachers .input-block label {
    font-size: 1.4rem;
  }

  #search-teachers .input-block input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  #search-teachers .input-block:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background-color: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  #page-content main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media(min-width: 700px) {
    #page-content {
      max-width: 100%;
    }

    #search-teachers {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }

    #search-teachers .input-block + .input-block {
    margin-top: 0;
    }

    #page-content main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }

    #page-content main header,
    #page-content main footer {
      padding: 3.2rem;
    }

    
  }
`;