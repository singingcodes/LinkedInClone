import {
  Navbar,
  Nav,
  Container,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap"
import { Link } from "react-router-dom"
const MyNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRALyVA0K3z9C2yeZhRpUG7LGbVzLJD8ZmcZReeui69NRx2xonJ3JR5MhTfdFdE-NFSE&usqp=CAU"
            alt="logo"
            height="34"
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text
                    id="basic-addon1"
                    style={{ backgroundColor: "#EEF3F8" }}
                  >
                    {" "}
                    <i className="bi bi-search search-class"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={{ backgroundColor: "#EEF3F8" }}
                />
              </InputGroup>
            </Form>
          </Nav>
          <Nav>
            <Link to="/feed" className="nav-link">
              <div className="nav-network">
                <i className="bi bi-house-door-fill text-muted"></i>
              </div>
              <p className="m-0">Home</p>
            </Link>
            <Nav.Link href="#">
              <div className="nav-network">
                <i className=" nav-network bi bi-people-fill mr-2 text-muted"></i>
              </div>
              <p className="m-0">My Network</p>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nav-network">
                <i className="bi bi-bag-fill text-muted"></i>
              </div>
              <p className="m-0">Jobs</p>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nav-network">
                <i className="bi bi-chat-dots-fill text-muted"></i>
              </div>

              <p className="m-0">Messaging</p>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nav-network">
                <i className="bi bi-bell-fill text-muted"></i>
                <span className="badge badge-danger">3</span>
              </div>

              <p className="m-0">Notifications</p>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nav-network">
                <i className="bi bi-person-circle text-muted"></i>
              </div>

              <p className="m-0">Me</p>
            </Nav.Link>

            {/* <Nav.Link href="#">
              <hr width="1" size="100" style={{ color: "#000" }} />
            </Nav.Link> */}

            <Nav.Link id="meme" href="#memes">
              <div className="nav-network">
                <i className="bi bi-grid-3x3-gap-fill text-muted"></i>
              </div>
              <p className="m-0">Work</p>
            </Nav.Link>
            <Nav.Link href="#memes">
              Reactivate <br /> Premium{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNavBar
