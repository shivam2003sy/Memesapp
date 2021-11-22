import Button from '@restart/ui/esm/Button'
import React, {useState} from 'react'
import { Form , Row,Col, Card} from 'react-bootstrap'
import MemesData from '../Components/memesData'




function Meme() {
    
    const [memeimage, setmemeimage] = useState("")


    function getMemeImage() {
        const memesArray = MemesData.data.meme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setmemeimage(memesArray[randomNumber].url)
    }







    return (
        <div>
           
            <Row>
                <Col>
            <Form.Control type="text" placeholder="enter text" />
            </Col>
            <Col>
            <Form.Control type="text" placeholder="enter text" />
            </Col>
            <br/>
            <br/>
            <br/>
            </Row>
            
               <Card style={{alignItems :'center'  , border : 'black' , borderWidth :'20'} } >
                    <Card.Img variant="top" src={memeimage} />
                    <Card.Body>
                    <Button onClick={getMemeImage}   style={{background:'black', color:'white' , border:'2',boxSizing:'content-box'}} type="submit">
                Load  a new meme pic </Button>

                </Card.Body>
                </Card>




        </div>
    )
}

export default Meme
