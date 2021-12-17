import React, { useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import MemesData from "../Components/memesData";
import Draggable from "react-draggable";
import{Button} from "@mui/material" 
import "./Meme.css"
function Meme() {
  const [memeimage, setmemeimage] = useState("");

  function getMemeImage() {
    const memesArray = MemesData.data.meme;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setmemeimage(memesArray[randomNumber].url);
  }

  const [text, settext] = React.useState({
    first: "",
    last: "",
  });
  function handelchange(event) {
    const { name, value } = event.target;
    settext((prevtext) => ({
      ...prevtext,
      [name]: value,
    }));
  }

  return (
    <div>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="enter text"
            name="first"
            value={text.first}
            onChange={handelchange}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="enter text"
            name="last"
            value={text.last}
            onChange={handelchange}
          />
        </Col>
        <br />
        <br />
        <br />
      </Row>

      <Card
        style={{ alignItems: "center", border: "black", borderWidth: "20" }}
      >
        <Card.Img variant="top" src={memeimage} />
        <Card.Body>
          <Button variant="contained" color="success"
            onClick={getMemeImage}
            type="submit"
          >
            Load a new meme pic{" "}
          </Button>
        </Card.Body>
      </Card>
      <p>drag text</p>

      <Draggable>
        <div className="box">
          <div>{text.first}</div>
        </div>
      </Draggable>
      <Draggable>
        <div className="box">
          <div>{text.last}</div>
        </div>
      </Draggable>
    </div>
  );
}

export default Meme;
