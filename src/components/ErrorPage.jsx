/*
If an error occurs when a page is requested to the server, the user is notified of the situation here.

Sunil Park
*/

import React from "react";
import styled from "styled-components";

const StyledErrorPage = styled.section`
  display: flex;
  margin: auto;
  box-shadow: 0px 5px 10px -5px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.mild};
  padding: 2rem;
  flex-direction: column;
  flex: 1 1 100%;
  text-align: center;

  span {
    color: red;
  }
`;

const ErrorPage = ({ status }) => {
  if (status === 404) {
    /* Client Page Error */
    return (
      <StyledErrorPage>
        <p>Sorry we couldn't find the page</p>
        <p>
          ERROR CODE - <span>{status}</span>
        </p>
      </StyledErrorPage>
    );
  } else if (500 <= status) {
    /* Server Error */
    return (
      <StyledErrorPage>
        <p>Sorry! Something wrong with the SERVER side...</p>
        <p>
          ERROR CODE - <span>{status}</span>
        </p>
      </StyledErrorPage>
    );
  } else if (400 <= status && status <= 499) {
    /* Client Error */
    return (
      <StyledErrorPage>
        <p>Oops...? Something wrong with the Client side...</p>
        <p>
          ERROR CODE - <span>{status}</span>
        </p>
      </StyledErrorPage>
    );
  } else {
    /* Other Errors */
    return (
      <StyledErrorPage>
        <p>Uh oh... Something is wrong...</p>
        <p>
          ERROR CODE - <span>{status}</span>
        </p>
      </StyledErrorPage>
    );
  }
};

export default ErrorPage;
