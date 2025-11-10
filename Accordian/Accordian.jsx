import React, { useState } from "react";
import "./accordian.css";

function Accordian() {
  // “Initially, I set the state to null so that no accordion item is open by default.”
  const [selected, setSelected] = useState(null);

  // This is the fake data here !
  const data = [
    {
      title: "What is React?",
      description:
        "React is a JavaScript library used to build fast and interactive user interfaces for web applications.",
    },
    {
      title: "Why use React?",
      description:
        "React allows developers to create reusable UI components, improving efficiency and code maintainability.",
    },
    {
      title: "What are components in React?",
      description:
        "Components are independent and reusable pieces of UI that help organize the structure of your app.",
    },
    {
      title: "What is JSX?",
      description:
        "JSX is a syntax extension for JavaScript that looks like HTML and is used to describe UI elements in React.",
    },
  ];

  // This function toggles the accordion item. If the same item is clicked again, it closes; otherwise, it opens the clicked item

  function toggle(index) {
    if (selected === index) return setSelected(null);
    // Otherwise, it updates the state to the new selected index.
    setSelected(index);
  }

  return (
    <div className="container">
      <h2 className="heading">React Accordion UI</h2>
      <div className="accordion">
        {data.map((item, index) => (
          // The key helps React efficiently re-render only the changed accordion items
          <div key={index} className="accordion-item">
            {/* In this one we gave onClick to both icon and title it is also same it works same for both elements */}
            <div className="accordion-title" onClick={() => toggle(index)}>
              <h4>{item.title}</h4>
              <span className="icon">{selected === index ? "-" : "+"}</span>
            </div>
            {/* it dsplays on the selected is true otherwise it Hides the content */}
            {selected === index && (
              <div className="accordion-content">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordian;
