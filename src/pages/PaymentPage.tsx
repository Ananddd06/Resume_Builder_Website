import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import jsPDF from "jspdf";

export function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = new URLSearchParams(location.search).get("plan") || "Premium";

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [selectedEmi, setSelectedEmi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const emiOptions = [
    { tenure: "3 months", rate: "2%", installment: "8.49" },
    { tenure: "6 months", rate: "3.5%", installment: "4.37" },
    { tenure: "12 months", rate: "6%", installment: "2.20" },
  ];

  const premiumTemplates = [
    "Modern-Deedy",
    "Modern",
    "Full Stack Developer",
    "Data Science Engineer",
  ];

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", cardNumber: "", expiry: "", cvv: "" };

    if (!formData.name) {
      newErrors.name = "Name on Card is required.";
      valid = false;
    }

    const cardNumberPattern = /^[0-9]{16}$/;
    if (!formData.cardNumber || !cardNumberPattern.test(formData.cardNumber)) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number.";
      valid = false;
    }

    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!formData.expiry || !expiryPattern.test(formData.expiry)) {
      newErrors.expiry = "Please enter a valid expiry date (MM/YY).";
      valid = false;
    }

    const cvvPattern = /^[0-9]{3}$/;
    if (!formData.cvv || !cvvPattern.test(formData.cvv)) {
      newErrors.cvv = "Please enter a valid 3-digit CVV.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handlePayment = async () => {
    if (!validateForm()) {
      alert("Please fix the errors in the form before proceeding.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate payment process
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Generate PDF Receipt
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.text("💳 Premium Payment Receipt", 15, 20);
      doc.setFontSize(14);
      doc.text(`Plan: ${selectedPlan}`, 15, 40);
      doc.text("Templates Unlocked:", 15, 60);

      premiumTemplates.forEach((template, index) => {
        doc.text(`- ${template}`, 20, 70 + index * 10);
      });

      doc.setTextColor(100);
      doc.text("Thank you for your payment!", 15, 110);
      doc.save("Premium_Receipt.pdf");

      // Redirect to the template page after successful payment
      navigate(`/templates`);
    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-800 opacity-20"></div>
      </div>

      {/* Payment Form */}
      <div className="relative bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-2xl max-w-3xl w-full">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          Complete Your Payment
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          You're subscribing to the{" "}
          <span className="font-medium">{selectedPlan}</span> plan.
        </p>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="loader border-t-4 border-indigo-600 w-12 h-12 rounded-full animate-spin"></div>
            <p className="mt-4 text-indigo-200">Processing your payment...</p>
          </div>
        ) : (
          <>
            {/* Payment Methods */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Select Payment Method
              </h3>
              <div className="flex gap-4">
                {["card", "upi", "emi"].map((method) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`px-6 py-2 rounded-lg border transition ${
                      paymentMethod === method
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-gray-800 text-gray-300 border-gray-700"
                    }`}
                  >
                    {method === "card" ? "Debit/Credit Card" : method.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* EMI Options */}
            {paymentMethod === "emi" && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Choose EMI Plan
                </h3>
                <div className="space-y-4">
                  {emiOptions.map((emi, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border cursor-pointer transition ${
                        selectedEmi === index
                          ? "bg-indigo-400 border-indigo-600"
                          : "bg-gray-800 border-gray-600"
                      }`}
                      onClick={() => setSelectedEmi(index)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white">{emi.tenure}</span>
                        <span className="text-gray-300">Interest: {emi.rate}</span>
                        <span className="text-indigo-200 font-semibold">
                          ${emi.installment} / month
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Card Details Form */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Card Details</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 font-medium">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cardNumber"
                    className="block text-gray-300 font-medium"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    required
                  />
                  {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label htmlFor="expiry" className="block text-gray-300 font-medium">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      required
                    />
                    {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="cvv" className="block text-gray-300 font-medium">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      required
                    />
                    {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-between items-center">
                  <Button variant="outline" onClick={() => navigate(-1)}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handlePayment}
                    disabled={paymentMethod === "emi" && selectedEmi === null}
                  >
                    {paymentMethod === "emi" && selectedEmi !== null
                      ? `Pay $${emiOptions[selectedEmi].installment} / month`
                      : `Pay ${selectedPlan === "Premium" ? "$24.99" : "$0.00"}`}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
