import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomSelect } from "@/components/ui/custom-select";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement form submission
  };

  const serviceOptions = [
    { value: "Architecture Design", label: "Architecture Design" },
    { value: "Interior Design", label: "Interior Design" },
    { value: "3D Visualization", label: "3D Visualization" },
    { value: "Project Management", label: "Project Management" },
    { value: "Consultation", label: "Consultation" },
  ];

  const budgetOptions = [
    { value: "Under $10k", label: "Under $10k" },
    { value: "$10k - $25k", label: "$10k - $25k" },
    { value: "$25k - $50k", label: "$25k - $50k" },
    { value: "$50k - $100k", label: "$50k - $100k" },
    { value: "Over $100k", label: "Over $100k" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white ">
      <div>
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hey! Tell us about your project
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Tell us a bit about your project, or jump straight into a call. We
            reply within one business day.
          </p>

          {/* Contact Information */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center text-gray-900">
              <Mail className="w-5 h-5 mr-3 text-amber-400" />
              <span>info@capex.com</span>
            </div>
            <div className="flex items-center text-gray-900">
              <Phone className="w-5 h-5 mr-3 text-amber-400" />
              <span>+1-202-555-0177</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="bg-white overflow-hidden shadow-sm w-full max-w-[640px] aspect-[640/575] rounded-3xl"
              style={{
                opacity: 1,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1509719267!2d-77.0427936846742!3d38.89767627957129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7a8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sWashington%2C%20DC%2020005%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Capex Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="bg-white shadow-sm w-full max-w-[648px] min-h-[576px] rounded-3xl border border-gray-200 p-6 sm:p-8 lg:p-12 overflow-hidden"
              style={{
                opacity: 1,
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Write down your quote here...
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <CustomInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <CustomSelect
                  label="Services"
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                  options={serviceOptions}
                  containerClassName="w-full"
                  placeholder="What are looking for:"
                />

                <CustomSelect
                  label="Budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  options={budgetOptions}
                  containerClassName="w-full"
                  placeholder="Project budget (USD)"
                />

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg"
                >
                  Request A Quote
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
