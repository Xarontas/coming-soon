import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Topbar() {
    return (
        <>
            <Navbar className="topbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="logo.svg"
                            width="100"
                            height="30"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}