import { useRouteError } from "react-router-dom";
// useRouteError is a Hook provided by react-router-dom
// which gaves an object that contains the error info like the : err.status, err.statusText and much more which we can use to show the error detials to the end-user.

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>Something Went Wrong!!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;