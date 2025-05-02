
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-metamart-yellow-dark">404</h1>
          <p className="mb-8 text-2xl font-medium">Page Not Found</p>
          <p className="mb-8 max-w-md text-gray-600">
            We couldn't find the page you're looking for. It might have been removed, renamed, or doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-metamart-yellow text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white">
              Go Back Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
