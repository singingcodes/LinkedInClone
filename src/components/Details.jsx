import { Container, Row, Col } from "react-bootstrap"
import React from "react"
import styled from "styled-components"
import { BiPencil } from "react-icons/bi"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MySideBar from "./MySideBar"
import MyExperience from "./MyExperience"

const Details = () => {
  const [profile, setProfile] = useState("")
  const params = useParams()
  // const [experiences, setUserExperiences] = useState([])

  useEffect(() => {
    profileData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.Id])

  const profileData = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + params.Id,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZThkZjE3YzRlMDAwMTVkN2EwODYiLCJpYXQiOjE2NTE1MDEyODAsImV4cCI6MTY1MjcxMDg4MH0.BHHzfw3iAtpCQMfwrq8GQMzEPn91MUE6-VDBzBtHR_I",
        },
      }
    )
    let profileData = await response.json()
    // console.log(profileData);
    setProfile(profileData)
  }
  // const fetchUserExperience = async () => {
  //   let response = await fetch(
  //     "https://striveschool-api.herokuapp.com/api/profile/" +
  //       params.Id +
  //       "/experiences",
  //     {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZDY1NjE3YzRlMDAwMTVkN2EwODMiLCJpYXQiOjE2NTE0OTY1MzUsImV4cCI6MTY1MjcwNjEzNX0.8KY63vz_cG51-fBlBKeyzC8NE1kgqbjKuVVMCqVTllA",
  //       },
  //     }
  //   )
  //   let responseData = await response.json()
  //   console.log("user experience data is", responseData)
  //   setUserExperiences(responseData)
  // }

  return (
    <>
      <Container>
        <Row className="my-3">
          <Col md={8}>
            <Wrapper>
              <Header>
                <Container>
                  <Row>
                    <Col></Col>
                    <Col>
                      <div className=" d-flex justify-content-end mt-3">
                        <BiPencil size="1.3rem" color="white" />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Header>
              <AvatarLogo>
                <img
                  className="jumbotron-img"
                  src={profile.image}
                  alt="avatar"
                />
              </AvatarLogo>
              <Body>
                <Container>
                  <Row>
                    <Col md={8}>
                      <div className="jumbotron-body">
                        <h3>{profile.name}</h3>
                        <p>{profile.bio}</p>
                        <p>
                          <span className="text-muted"> {profile.area}</span>
                          <b>
                            <a href="asd#" target="_blank" className="ml-2">
                              {profile.username}
                            </a>
                          </b>
                        </p>

                        <p className="my-2">
                          <b>
                            <a href="asd#" target="_blank">
                              100 Connections
                            </a>
                          </b>
                        </p>
                      </div>
                    </Col>
                    <Col md={4}>
                      {/* <div className=" d-flex justify-content-end mb-3 text-muted">
                  <BiPencil size="1.5rem" onClick={handleShow} />
                </div> */}
                      <h6>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </h6>
                      <p>
                        Facilis odit mollitia aliquam harum corporis quibusdam
                      </p>
                    </Col>
                  </Row>
                  <ButtonsClick className="mb-3">
                    <button className="jumbotron-btn mr-2  rounded-pill bg-primary text-white text-center px-4 py-2">
                      Open to
                    </button>
                    <button className="jumbotron-btn  mr-2 rounded-pill bg-light border-primary text-primary text-center px-4">
                      Add profile section
                    </button>
                    <button className="jumbotron-btn mr-2 rounded-pill text-center px-4">
                      More
                    </button>
                  </ButtonsClick>
                </Container>
              </Body>
            </Wrapper>
            <MyExperience />
          </Col>
          <Col md={4}>
            <MySideBar />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Details

const Wrapper = styled.div`
  position: relative;
  min-height: 65vh;
  background-color: rgb(255, 255, 255);
  border: 0.1px solid #e0dfdc;
  border-radius: 15px;
  overflow: hidden;
`

const Header = styled.div`
  min-height: 10rem;
  background-color: blue;
  background-image: url("https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29yayUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
`

const Body = styled.div`
  background-color: white;
  margin-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
`

const AvatarLogo = styled.div`
  position: absolute;
  width: 142px;
  height: 142px;
  border-radius: 50%;
  margin-top: -6rem;
  margin-left: 1.5rem;
  overflow: hidden;
`

const ButtonsClick = styled.div`
  display: inline-flex;
  margin-right: 4.5rem;
`
