import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

export const Error = (): JSX.Element => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleClick = (): void | Promise<void> => {
    return navigate(-1);
  };
  
  return (
    <main>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {
            isRouteErrorResponse(error)
              ? error.statusText
              : error instanceof Error
              ? error.message
              : "Unknow Error"
          }
        </i>
      </p>
      
      <button onClick={handleClick}>
        Go Back
      </button>
    </main>
  );
};
