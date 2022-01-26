
import React, { useState, useRef } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import QRCode from "react-qr-code";
import ReactToPrint from 'react-to-print';

function App() {

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    e.persist();
    setData(e.target.value.split('\n'));
    console.log(data);
 };

 const componentRef = useRef();

  return (
    <Container fluid style={{ margin: "0px" }}>
            <Card>
                <Card.Header>
                    <h5 className="pb-1">
                    <i className="fas fa-qrcode"></i> {"  "}
                    Print QRCode
                    </h5>
                </Card.Header>
                <Card.Body>
                    <div style={{minHeight: '300px', minWidth: '300px'}}>
                      <Row>
                        <Col>
                        
                          <Card>
                              <Card.Header>
                                  <h5 className="pb-1">List of codes</h5>
                              </Card.Header>
                              <Card.Body>
                              <div style={{minHeight: '300px', minWidth: '300px'}}>
                                    <Form.Group controlId="codes">
                                        <Form.Control
                                            
                                            as="textarea" rows={10}
                                            name="codes"
                                            onChange={handleChange}
                                        />
                                    </Form.Group> 
                              </div>
                              </Card.Body>
                              <Card.Footer>
                                <Form.Group controlId="button" className="float-end">
                                    <ReactToPrint
                                          trigger={() => <Button color="secondary">Print</Button>}
                                          content={() => componentRef.current}
                                        />
                                    </Form.Group>
                              </Card.Footer>
                          </Card>
                        
                        </Col>
                        <Col>
                          <Container style={{ overflowY: "scroll", maxHeight: '400px' }} >
                            <div ref={componentRef}>
                          {data.map((val, index) => {
                              return (val&&
                                        <Row key={index} className="d-flex justify-content-center text-center">
                                          
                                          <Col>
                                            <QRCode value={val} size={100}></QRCode><br/> {val} <br/>&nbsp;<br/>
                                          </Col>
                                
                                        </Row>
                                        
                                        )
                            })}
                            </div>
                          </Container>
                        </Col>
                      </Row>
                    </div>
                </Card.Body>
            </Card>
        </Container>
  );
}

export default App;
