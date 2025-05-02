
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do I place an order?",
    answer: "Browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or log in to complete your purchase."
  },
  {
    question: "What are your delivery hours?",
    answer: "We deliver from Monday to Saturday, 9 AM to 8 PM. You can select your preferred delivery time during checkout."
  },
  {
    question: "Do you have a minimum order value?",
    answer: "Yes, our minimum order value is $20. Orders below this amount will incur a small delivery fee."
  },
  {
    question: "Can I modify my order after placing it?",
    answer: "You can modify your order up to 2 hours before the scheduled delivery time. Simply log in to your account and go to 'My Orders'."
  },
  {
    question: "What if I'm not home during delivery?",
    answer: "Please provide delivery instructions during checkout. If no one is available to receive the order, we'll follow your instructions or contact you for guidance."
  },
  {
    question: "How do I return a product?",
    answer: "If you're not satisfied with a product, you can report it within 24 hours of delivery, and we'll arrange for a refund or replacement."
  },
  {
    question: "Are your products organic?",
    answer: "We offer both organic and conventional products. Look for the 'Organic' label on product descriptions."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is confirmed, you can track its status in real-time through the 'My Orders' section in your account."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h1>
          
          <div className="mb-8 rounded-lg bg-metamart-yellow-light p-6">
            <p className="text-center text-lg">
              Have questions about Meta Mart? We've got answers!
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="rounded-lg border shadow-sm"
              >
                <button
                  className="flex w-full items-center justify-between p-4 text-left font-medium"
                  onClick={() => toggleItem(index)}
                >
                  {item.question}
                  {openItems[index] ? (
                    <ChevronUp className="h-5 w-5 text-metamart-yellow-dark" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-metamart-yellow-dark" />
                  )}
                </button>
                
                {openItems[index] && (
                  <div className="border-t p-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold">Still have questions?</h2>
            <p className="mb-4">
              If you couldn't find the answer to your question, please contact our customer support.
            </p>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a 
                href="mailto:support@metamart.com" 
                className="rounded-md bg-metamart-yellow px-4 py-2 text-center font-medium text-metamart-yellow-dark hover:bg-metamart-yellow-dark hover:text-white"
              >
                Email Support
              </a>
              <a 
                href="tel:+1555-123-4567" 
                className="rounded-md border border-metamart-yellow px-4 py-2 text-center font-medium text-metamart-yellow-dark hover:bg-metamart-yellow-light"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
