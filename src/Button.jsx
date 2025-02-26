import { useState } from "react";

const Button = () => {
  const [activeButton, setActiveButton] = useState(null);

  const buttonData = [
    {
      id: 1,
      label: "Person",
      hoverLabel: "Name",
      content: "John Doe",
    },
    {
      id: 2,
      label: "Contact",
      hoverLabel: "Number",
      content: "+1 234 567 890",
    },
    {
      id: 3,
      label: "Email",
      hoverLabel: "Address",
      content: "john@example.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative w-96">
        {/* Content Display */}
        <div className="mb-8 h-20 text-center">
          <div className="text-2xl font-semibold text-gray-800">
            {buttonData.find((b) => b.id === activeButton)?.content ||
              "John Doe"}
          </div>
        </div>

        {/* Buttons Container */}
        <div className="flex justify-center space-x-4">
          {buttonData.map((button) => (
            <button
              key={button.id}
              className="relative h-12 w-32 bg-white rounded-lg shadow-md
                         transition-all duration-300 hover:shadow-lg
                         hover:-translate-y-2 overflow-hidden"
              onMouseEnter={() => setActiveButton(button.id)}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center
                                transition-all duration-300 ${
                                  activeButton === button.id
                                    ? "-translate-y-full opacity-0"
                                    : "opacity-100"
                                }`}
              >
                {button.label}
              </div>
              <div
                className={`absolute inset-0 flex items-center justify-center
                                transition-all duration-300 ${
                                  activeButton === button.id
                                    ? "opacity-100 bg-blue-500 text-white"
                                    : "translate-y-full opacity-0"
                                }`}
              >
                {button.hoverLabel}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Button;
