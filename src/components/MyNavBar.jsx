import {
  Navbar,
  Nav,
  Dropdown,
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
                    <i class="bi bi-search search-class"></i>
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
              <p>Home</p>
            </Link>
            <Nav.Link href="#">
              <div className="nav-network">
                <i className="bi bi-people-fill mr-2 text-muted"></i>
              </div>
              <p>My Network</p>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-bag-fill text-muted"></i>
              <p>Jobs</p>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nav-network">
                <i className="bi bi-chat-dots-fill text-muted"></i>
              </div>

              <p>Messaging</p>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nav-network">
                <i className="bi bi-bell-fill text-muted"></i>
                <span className="badge badge-danger">3</span>
              </div>

              <p>Notifications</p>
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "white",
                  borderColor: "1px solid white !important",
                  outline: "1px solid white !important",
                }}
                id="dropdown-basic"
                className="p-1"
              >
                {" "}
                <i className="bi bi-person-circle text-muted"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#">
              <hr width="1" size="100" style={{ color: "#000" }} />
            </Nav.Link>

            <Nav.Link href="#memes">
              <i className="bi bi-plus-square-dotted text-muted"></i>
              <p>Work</p>
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
