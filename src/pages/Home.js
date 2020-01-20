import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleShow = (isShowed) => {
        this.setState({show: isShowed})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <h1 style={{fontWeight:"bold"}}>Todo</h1> <br></br>

                    <table border="2" >
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td style={{ width: 100, height: 100 }}>1</td>
                            <td style={{ width: 100, height: 100 }}>Data</td>
                            <td style={{ width: 300, height: 100 }}>
                                <button style={{ backgroundColor: "#2ecc71", color: "white" }}>Update</button> || <button style={{ backgroundColor: "#e74c3c", color: "white" }}>Delete</button>
                            </td>
                        </tr>
                    </table>

                    <br></br>

                    <button style={{ backgroundColor: "#0984e3", color: "white" }} onClick={() => this.handleShow(true)} >Add Data</button>


                    {/* Modal Add Data */}
                    <Modal show={this.state.show} onHide={() => this.handleShow(false)} animation={false}>

                        <Modal.Header closeButton>
                            <Modal.Title>Add Data</Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <form>
                                <input type="text" style={{width: "100%", marginBottom: 10}} placeholder="Title"></input>

                                <Button variant="primary" style={{marginLeft: "73%"}}>
                                Save Changes
                                </Button>
                            </form>
                        </Modal.Body>

                    </Modal>

                    {/* Modal Update Data */}
                    <Modal show={this.state.show} onHide={() => this.handleShow(false)} animation={false}>

                        <Modal.Header closeButton>
                            <Modal.Title>Add Data</Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <form>
                                <input type="text" style={{width: "100%", marginBottom: 10}} placeholder="Title"></input>

                                <Button variant="primary" style={{marginLeft: "73%"}}>
                                Save Changes
                                </Button>
                            </form>
                        </Modal.Body>

                    </Modal>

                </header>
            </div>
        )
    }
}

export default Home;


