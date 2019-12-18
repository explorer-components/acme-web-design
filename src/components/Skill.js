import React from "react"

const Skill = ({ image, title, details }) => {
  return (
    <div className="flex flex-col items-center text-center py-6 px-8">
      <img
        src={image}
        width="90px"
        height="90px"
        alt="html5 logo"
        className="mb-4"
      />
      <h4 className="font-semibold text-lg pb-4">{title}</h4>
      <p>{details}</p>
    </div>
  )
}

export default Skill
