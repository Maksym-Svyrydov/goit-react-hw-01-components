import styled from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = styled.div`
  body {

    j
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
export const Container = styled.div`
  align-items: center;
  color: #010101;
  display: flex;
  flex-direction: column;
  font-size: 40;
  justify-content: center;
`;

// export const Container = styled.div`
//   justify-content: center;
//   align-items: center;
//   margin-left: auto;
//   margin-right: auto;
// `;
