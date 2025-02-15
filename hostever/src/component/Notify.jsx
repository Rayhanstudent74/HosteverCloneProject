import React, { useState, useEffect } from "react";
import mess from "../assets/Images/mess.png";

const Notify = ({ message = "🔔 Chat live with an agent now!", duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      <button
        onClick={() => setVisible(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        <img src={mess} alt="Notification Icon" className="w-30 h-14" />
      </button>

      {visible && (
        <div className="mt-2 bg-blue-500 text-white text-sm px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 opacity-100 transition-opacity duration-300">
          <span>{message}</span>
          <button
            onClick={() => setVisible(false)}
            className="ml-auto text-white font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Notify;
