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

const PostSection = () => {
  return (
    <div>
      <>
        <Wrapper>
          <Header>
            <img
              src="https://placekitten.com/100/100"
              className="skeleton-profile-pic skeleton"
            />
            <div>
              <h6 className="skeleton-name skeleton font-weight-bold">
                James Arnold
              </h6>
              <p>500 followers</p>
              <p className="d-inline mr-1 text-muted ">5d. Edited .</p>
              <IoMdGlobe size="1rem" className="text-muted " />
            </div>
            <RiMoreFill size="1.2rem" className="float-right mb-5" />
          </Header>
          <Body>
            <p className="skeleton-text mb-2 skeleton">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
              qui veritatis. Doloribus fugiat blanditiis nihil praesentium
              dolores earum accusamus quia dolorum repellat sint.
            </p>

            <img
              src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="cat pic"
              className="mb-4 w-100"
            />

            <div>
              <AiFillLike />
              <span>9</span>
              <span>129 comments</span>
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
        <Wrapper>
          <Header>
            <img
              src="https://placekitten.com/130/130"
              className="skeleton-profile-pic skeleton"
            />
            <div>
              <h6 className="skeleton-name skeleton font-weight-bold">
                Emilian Kasemi
              </h6>
              <p>Full-Stack (MERN) Javascript,Reactjs</p>
              <p className="d-inline mr-1 text-muted ">1w.</p>
              <IoMdGlobe size="1rem" className="text-muted " />
            </div>
            <RiMoreFill size="1.2rem" className="float-right mb-5" />
          </Header>
          <Body>
            <p className="skeleton-text mb-2 skeleton">Very Beautiful Day</p>

            <img
              src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="cat pic"
              className="mb-4 w-100"
            />
            <div>
              <AiFillLike />
              <span>100</span>
              <span>21 comments</span>
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
      <>
        <Wrapper>
          <Header>
            <img src="https://placekitten.com/120/120" alt="img" />
            <div>
              <h6 className="skeleton-name skeleton font-weight-bold">
                Sarah Awolowo
              </h6>
              <p>Hamburger Ceo.</p>
              <p className="d-inline mr-1 text-muted ">1min ago</p>
              <IoMdGlobe size="1rem" className="text-muted " />
            </div>
            <RiMoreFill size="1.2rem" className="float-right mb-5" />
          </Header>
          <Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ut expedita sint culpa non nihil placeat asperiores numquam,
              eligendi earum velit neque quos. Dolores impedit provident quasi,
              quia accusamus distinctio.
            </p>
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              className="w-100 mb-4"
            />
            <div>
              <AiFillLike />
              <span>19</span>
              <span>10 comments</span>
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
        <>
          <Wrapper>
            <Header>
              <img
                src="https://placekitten.com/125/125"
                className="skeleton-profile-pic skeleton"
              />
              <div>
                <h6 className="skeleton-name skeleton font-weight-bold">
                  Hassan Al-muntairi
                </h6>
                <p>Promoted</p>
                <p className="d-inline mr-1 text-muted ">2h.</p>
                <IoMdGlobe size="1rem" className="text-muted " />
              </div>
              <RiMoreFill
                size="1.2rem"
                className="float-right mb-5 text-mute"
              />
            </Header>
            <Body>
              <p className="skeleton-text mb-2 skeleton">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                placeat iusto, facere explicabo commodi, minima modi vitae
                atque, distinctio alias architecto sequi quam consequatur
                corrupti porro blanditiis magni voluptas saepe.
              </p>

              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt="cat pic"
                className="mb-4 w-100"
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
