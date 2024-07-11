// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import imagage from "../assets/bookCover.jpg";

// function Cards() {
//   return (
//     <div className="">
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={imagage} alt="" className="h-[300px] w-fit" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </div>
//   );
// }

// export default Cards;

import React from 'react'

const Cards = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={imagage}
        alt="Mountain"
      />
      <div className="p-2">
        <h5 className="text-lg font-bold mb-2">Lorem Ipsum</h5>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deleniti odit perspiciatis nemo iste error illo labore voluptate.
        </p>
        <div className="flex justify-end mt-4">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Button 1
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Button 2
          </button>
        </div>
      </div>
    </div>

  )
}

export default Cards