/* eslint-disable jsx-a11y/alt-text */

import styled from "styled-components";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import {
  RiShareForwardLine,
  RiSendPlaneFill,
  RiMoreFill,
} from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { IoMdGlobe } from "react-icons/io";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import { useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import en from "javascript-time-ago/locale/en.json";
import { AiFillDelete } from "react-icons/ai";

TimeAgo.addDefaultLocale(en);

const PostSection = ({ post }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [editPost, setEditPost] = useState(post);

  const fetchEditPost = async (e) => {
    e.preventDefault();
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/" + post._id,
      {
        method: "PUT",
        body: JSON.stringify(editPost),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZThkZjE3YzRlMDAwMTVkN2EwODYiLCJpYXQiOjE2NTE1MDEyODAsImV4cCI6MTY1MjcxMDg4MH0.BHHzfw3iAtpCQMfwrq8GQMzEPn91MUE6-VDBzBtHR_I",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("Post Edited Succesfully");
    }
  };

  const deletePost = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + post._id,
        {
          method: "DELETE",
          body: JSON.stringify(editPost),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZThkZjE3YzRlMDAwMTVkN2EwODYiLCJpYXQiOjE2NTE1MDEyODAsImV4cCI6MTY1MjcxMDg4MH0.BHHzfw3iAtpCQMfwrq8GQMzEPn91MUE6-VDBzBtHR_I",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Deleted Succesfully");
      }
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <div>
      <>
        <Wrapper>
          <Header>
            <img
              src={post.user.image}
              className="skeleton-profile-pic skeleton"
            />
            <div>
              <h6 className="skeleton-name skeleton font-weight-bold">
                {post.user.name} {post.user.surname}
              </h6>
              <p>{post.user.title}</p>
              <p className="d-inline mr-1 text-muted ">
                <ReactTimeAgo date={post.updatedAt} locale="en-US" />
              </p>
              <IoMdGlobe size="1rem" className="text-muted " />
            </div>
            <RiMoreFill
              size="1.2rem"
              className="float-right mb-5 text-mute"
              onClick={handleShow2}
            />
          </Header>
          <Body>
            <p className="skeleton-text mb-2 skeleton">{post.text}</p>

            <img
              src={post.user.image}
              alt="cat pic"
              className="mb-4 w-100"
              onClick={handleShow}
            />
            <div>
              <span>
                <AiFillLike />
                <FcLike />
              </span>
              <span>45</span>
              <span>300 comments</span>
            </div>
          </Body>

          <Footer>
            <Section>
              <BiLike size="1.3rem" />
              <div className="ml-1">Like</div>
            </Section>
            <Section>
              <AiOutlineComment size="1.3rem" />
              <div className="ml-1">Comment</div>
            </Section>
            <Section>
              <RiShareForwardLine size="1.3rem" />
              <div className="ml-1">Share</div>
            </Section>
            <Section>
              <RiSendPlaneFill size="1.3rem" />
              <div className="ml-1">Send</div>
            </Section>
          </Footer>
        </Wrapper>
      </>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6}>
                <img src={post.user.image} alt="img" className="w-100" />
              </Col>
              <Col md={6}>
                <Header>
                  <img
                    src={post.user.image}
                    className="skeleton-profile-pic skeleton"
                  />
                  <div>
                    <h6 className="skeleton-name skeleton font-weight-bold">
                      {post.user.name} {post.user.surname}
                    </h6>
                    <p>{post.user.title}</p>
                    <p className="d-inline mr-1 text-muted ">
                      <ReactTimeAgo date={post.updatedAt} locale="en-US" />
                    </p>
                    <IoMdGlobe size="1rem" className="text-muted " />
                  </div>
                  <RiMoreFill
                    size="1.2rem"
                    className="float-right mb-5 text-mute"
                  />
                </Header>
                {/* <h5 className=" text-truncate">
                  {post.text} - {post.user.bio}
                </h5> */}
                <Body>
                  <p className="skeleton-text mb-2 skeleton">{post.text}</p>
                  <div>
                    <span>
                      <AiFillLike />
                      <FcLike />
                    </span>
                    <span>45</span>
                    <span>300 comments</span>
                  </div>
                </Body>

                <Footer>
                  {/* <Section> */}
                  <BiLike />
                  <div style={{ fontSize: "12px" }} className="mx-1">
                    Like
                  </div>
                  {/* </Section> */}
                  {/* <Section> */}
                  <AiOutlineComment />
                  <div style={{ fontSize: "12px" }} className="mx-1">
                    Comment
                  </div>
                  {/* </Section>
                  <Section> */}
                  <RiShareForwardLine />
                  <div style={{ fontSize: "12px" }} className="mx-1">
                    Share
                  </div>
                  {/* </Section> */}
                  {/* <Section className="text-truncate"> */}
                  <RiSendPlaneFill />
                  <div style={{ fontSize: "12px" }} className="mx-1">
                    Send
                  </div>
                  {/* </Section> */}
                </Footer>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={fetchEditPost}>
              <textarea
                rows={4}
                className="w-100"
                placeholder="What do you want to talk about?"
                style={{ border: "none", borderRadius: "10px" }}
                value={editPost.text}
                onChange={(e) =>
                  setEditPost({ editPost, text: e.target.value })
                }
              />
              <Button variant="danger" onClick={deletePost}>
                <AiFillDelete />
              </Button>
              <Button
                variant="primary"
                onClick={handleClose2}
                type="submit"
                className="float-right"
              >
                Edit Post
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default PostSection;

const Wrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  width: 100%;
  min-height: 5rem;
  padding: 1rem 1rem;
  margin-bottom: 0.4rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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

  div {
    p {
      margin: 0;
      font-size: 12px;
      color: gray;
      margin-bottom: 0;
      margin-top: 0;
    }
    h6 {
      margin: 0;
    }
    margin-right: auto;
  }
`;

const Body = styled.div`
  margin-top: 1rem;
  font-size: 14px;
  font-weight: 400;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
    }
    span {
      color: gray;
      font-size: 12px;
      font-weight: 400;
      margin-left: 2px;
    }

    span:nth-child(3) {
      margin-left: auto;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e6e6e6;
`;

const Section = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  padding: 0.7rem 0.5rem;
  border-radius: 4px;
  color: gray;
  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #dddddd;
  }
`;
