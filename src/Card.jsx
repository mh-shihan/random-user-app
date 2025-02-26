import { useState } from "react";

const Card = ({ user, darkMode }) => {
  const [activeButton, setActiveButton] = useState(null);

  const {
    name = { title: "", first: "", last: "" },
    phone = "",
    email = "",
    picture = { large: "" },
    dob = { date: "" },
    location = { city: "" },
  } = user || {};

  const fullName = `${name.title} ${name.first} ${name.last}`.trim();
  const birthday = dob.date.split("T")[0];

  const buttonData = [
    {
      id: 1,
      label: "Person",
      hoverLabel: "Name",
      subContent: "My name is",
      content: fullName,
    },

    {
      id: 2,
      label: "Email",
      hoverLabel: "Email",
      subContent: "My email address is",
      content: email,
    },
    {
      id: 3,
      label: "birthday",
      hoverLabel: "Birthday",
      subContent: "My birthday is",
      content: birthday,
    },
    {
      id: 4,
      label: "Location",
      hoverLabel: "Location",
      subContent: "My address is",
      content: location.city,
    },
    {
      id: 5,
      label: "Phone",
      hoverLabel: "Phone",
      subContent: "My phone number is",
      content: phone,
    },
  ];
  const content = buttonData.find((b) => b.id === activeButton)?.content;
  const subContent = buttonData.find((b) => b.id === activeButton)?.subContent;

  return (
    <div
      className={`w-1/3 rounded-xl p-6 shadow-lg relative overflow-hidden transition-all duration-300 ${
        darkMode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <img
        src={picture?.large}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-400"
      />

      {/* Content Display */}
      <div className="mb-8 h-20 text-center">
        <div
          className={`text-2xl font-semibold text-gray-800 ${
            darkMode ? "text-white " : "text-black"
          }`}
        >
          {subContent && content ? (
            <>
              <p className="text-base font-light">{subContent}</p>
              <h3>{content}</h3>
            </>
          ) : (
            <>
              <p className="text-base font-light">My name is</p>
              <h3>{fullName}</h3>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons with Hover Effect */}
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
  );
};

export default Card;
