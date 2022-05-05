import styled from "styled-components"
import { FcStackOfPhotos, FcVideoCall } from "react-icons/fc"
import PostSection from "./PostSection"
import { useState, useEffect } from "react"
import { Modal, Button } from "react-bootstrap"

const NewsFeedPost = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [sendPost, setSendPost] = useState({
    text: "",
  })

  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPost()
  }, [])

  const getPost = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZThkZjE3YzRlMDAwMTVkN2EwODYiLCJpYXQiOjE2NTE1MDEyODAsImV4cCI6MTY1MjcxMDg4MH0.BHHzfw3iAtpCQMfwrq8GQMzEPn91MUE6-VDBzBtHR_I",
        },
      }
    )
    let postData = await response.json()
    console.log(postData)
    setPosts(postData)
  }

  const handlePost = async (e) => {
    e.preventDefault()

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(sendPost),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZThkZjE3YzRlMDAwMTVkN2EwODYiLCJpYXQiOjE2NTE1MDEyODAsImV4cCI6MTY1MjcxMDg4MH0.BHHzfw3iAtpCQMfwrq8GQMzEPn91MUE6-VDBzBtHR_I",
            "Content-Type": "application/json",
          },
        }
      )
      if (response.ok) {
        let postData = await response.json()
        console.log(postData)
        alert("success")
        setShow(false)
        setSendPost({
          text: "",
        })
      } else {
        alert("error else")
      }
    } catch (error) {
      alert("error")
    }
  }

  return (
    <>
      <Wrapper>
        <Header>
          <img src="https://placekitten.com/100/100" alt="profile-avatar" />
          <Input type="text" placeholder="Start a post" onClick={handleShow} />
        </Header>
        <Footer>
          <Section>
            <FcStackOfPhotos size="1.5rem" />
            <span className="ml-2">Photo</span>
          </Section>
          <Section>
            <FcVideoCall size="1.5rem" />
            <span className="ml-2">Video</span>
          </Section>
          <Section>
            <img
              src="https://img.icons8.com/color/48/000000/clock--v4.png"
              alt="event"
            />
            Event
          </Section>
          <Section>
            <img
              src="https://img.icons8.com/color/48/000000/scroll.png"
              alt="article"
            />
            Write article
          </Section>
        </Footer>
      </Wrapper>

      <hr />
      {posts
        .splice(-12)
        .reverse()

        .map((post) => (
          <div key={post._id}>
            <PostSection post={post} />
          </div>
        ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            className="font-weight-normal"
            style={{ fontSize: "20px" }}
          >
            Create a post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handlePost}>
            <textarea
              rows={4}
              className="w-100"
              placeholder="What do you want to talk about?"
              style={{ border: "none", borderRadius: "10px" }}
              value={sendPost.text}
              onChange={(e) => setSendPost({ sendPost, text: e.target.value })}
            />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              POST
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NewsFeedPost

const Wrapper = styled.div`
  padding: 1rem 1rem;
  min-height: 5rem;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  background-color: white;
  margin-bottom: 1rem;
`

const Header = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`

const Input = styled.input`
  flex-grow: 1;
  height: 100%;
  border-radius: 25px;
  border: 1px solid #adadad;
  padding: 0 1rem;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  margin-top: 1rem;
`

const Section = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  padding: 0.7rem 0.5rem;
  border-radius: 4px;

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #dddddd;
  }
`
