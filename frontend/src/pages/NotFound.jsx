import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">404</h1>
        <p className="text-lg text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="inline-flex items-center justify-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover-90 focus-none focus-2 focus-ring focus-offset-2">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
