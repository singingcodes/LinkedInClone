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

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const PostSection = ({ post }) => {
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
                <ReactTimeAgo date={post.user.createdAt} locale="en-US" />
              </p>
              <IoMdGlobe size="1rem" className="text-muted " />
            </div>
            <RiMoreFill size="1.2rem" className="float-right mb-5 text-mute" />
          </Header>
          <Body>
            <p className="skeleton-text mb-2 skeleton">
              {post.user.bio}
              {post.text}
            </p>

            <img src={post.user.image} alt="cat pic" className="mb-4 w-100" />
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
