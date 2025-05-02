
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold">About Meta Mart</h1>
          
          <div className="mb-8 rounded-lg bg-metamart-yellow-light p-8">
            <h2 className="mb-4 text-xl font-semibold text-metamart-yellow-dark">Our Story</h2>
            <p className="mb-4">
              Meta Mart was founded in 2023 with a simple mission: to make grocery shopping easier, faster, and more convenient for everyone.
            </p>
            <p>
              What started as a small local delivery service has grown into a beloved online grocery platform, serving thousands of customers with fresh, quality products.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Our Vision</h2>
            <p className="mb-4">
              At Meta Mart, we envision a world where everyone has access to fresh, healthy food without the hassle of traditional grocery shopping. We're committed to making this vision a reality through our convenient online platform and reliable delivery service.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Our Values</h2>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 shadow-sm">
                <h3 className="mb-2 font-medium text-metamart-yellow-dark">Quality</h3>
                <p className="text-sm">
                  We carefully select all our products to ensure they meet our high standards of quality and freshness.
                </p>
              </div>
              
              <div className="rounded-lg border p-4 shadow-sm">
                <h3 className="mb-2 font-medium text-metamart-yellow-dark">Convenience</h3>
                <p className="text-sm">
                  We're dedicated to making grocery shopping as easy and convenient as possible for our customers.
                </p>
              </div>
              
              <div className="rounded-lg border p-4 shadow-sm">
                <h3 className="mb-2 font-medium text-metamart-yellow-dark">Community</h3>
                <p className="text-sm">
                  We support local farmers and suppliers, contributing to the growth of our community.
                </p>
              </div>
              
              <div className="rounded-lg border p-4 shadow-sm">
                <h3 className="mb-2 font-medium text-metamart-yellow-dark">Sustainability</h3>
                <p className="text-sm">
                  We're committed to reducing our environmental impact through sustainable practices.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="mb-4 text-xl font-semibold">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border p-4 text-center shadow-sm">
                <div className="mb-3 h-24 w-24 overflow-hidden rounded-full bg-gray-200 mx-auto">
                  {/* Avatar placeholder */}
                </div>
                <h3 className="font-medium">Jane Smith</h3>
                <p className="text-sm text-gray-600">Founder & CEO</p>
              </div>
              
              <div className="rounded-lg border p-4 text-center shadow-sm">
                <div className="mb-3 h-24 w-24 overflow-hidden rounded-full bg-gray-200 mx-auto">
                  {/* Avatar placeholder */}
                </div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-gray-600">Operations Manager</p>
              </div>
              
              <div className="rounded-lg border p-4 text-center shadow-sm">
                <div className="mb-3 h-24 w-24 overflow-hidden rounded-full bg-gray-200 mx-auto">
                  {/* Avatar placeholder */}
                </div>
                <h3 className="font-medium">Emily Johnson</h3>
                <p className="text-sm text-gray-600">Customer Service Lead</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
