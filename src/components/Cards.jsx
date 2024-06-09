import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imagage from "../assets/bookCover.jpg";

function Cards() {
  return (
    <div className="">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagage} alt="" className="h-[300px] w-fit" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;
