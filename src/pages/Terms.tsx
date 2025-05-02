
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold">Terms & Conditions</h1>
          
          <div className="prose max-w-none">
            <p>Last updated: May 1, 2025</p>
            
            <h2 className="mt-8 text-xl font-semibold">1. Introduction</h2>
            <p>
              Welcome to Meta Mart. These Terms & Conditions govern your use of our website and services. By accessing or using Meta Mart, you agree to be bound by these terms.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">2. Definitions</h2>
            <p>
              "Meta Mart" refers to our grocery e-commerce platform.
              "User," "You," and "Your" refer to the individual or entity accessing or using our services.
              "Products" refers to the items available for purchase on our platform.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">3. Account Registration</h2>
            <p>
              To use certain features of our service, you must register for an account. You agree to provide accurate information and to update it as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">4. Orders & Payments</h2>
            <p>
              By placing an order, you make an offer to purchase the selected products. We reserve the right to accept or reject any order. Payment must be made at the time of placing the order. We accept various payment methods as displayed on our platform.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">5. Delivery</h2>
            <p>
              Delivery times are estimates and are not guaranteed. We are not responsible for delays caused by factors outside our control. You agree to provide accurate delivery information and to ensure someone is available to receive the order during the delivery window.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">6. Returns & Refunds</h2>
            <p>
              If you are not satisfied with a product, you can request a refund or replacement within 24 hours of delivery. We reserve the right to inspect returned items before processing refunds. Refunds will be made to the original payment method.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">7. Privacy Policy</h2>
            <p>
              Our Privacy Policy, which outlines how we collect, use, and protect your personal information, is incorporated into these Terms & Conditions by reference.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">8. Limitation of Liability</h2>
            <p>
              Meta Mart is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the service. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">9. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Your continued use of our service after any changes indicates your acceptance of the new terms.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at legal@metamart.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
