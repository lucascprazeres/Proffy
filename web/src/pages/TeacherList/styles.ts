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

    #search-teachers .select-block + .select-block {
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