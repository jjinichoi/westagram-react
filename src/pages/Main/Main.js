import React from "react";
import "./Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEllipsis,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

const Main = () => {
  return (
    <div className="Main">
      <header>
        <nav>
          <div className="containar">
            <div className="mainLogo">
              <a href="./main.html">
                <img src="/images/instagram.png" alt="westagram" />
              </a>
              <span className="bar"></span>
              <a href="./main.html" className="logoText">
                <h1>Westagram</h1>
              </a>
            </div>

            <div className="searchBox">
              <div className="searchBorder">
                <div className="search">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="MagnifyingGlass"
                  />
                  <input type="text" placeholder="검색" />
                </div>
              </div>
              {/* <div className="searchUserList">
                        <span className="arrow"></span>
                        <ul>
                            <li>
                                <div className="UserListImg"></div>
                                <div className="UserListId">jungminimanimo</div>
                            </li>
                            <li>
                                <div className="UserListImg"></div>
                                <div className="UserListId">dainzzl</div>
                            </li>
                            <li>
                                <div className="UserListImg"></div>
                                <div className="UserListId">gongjooim</div>
                            </li>
                        </ul>
                    </div> */}
            </div>

            <div className="utilMenu">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="탐색하기"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="활동"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="마이페이지"
              />
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="containar">
          <section className="feeds">
            <article>
              <div className="feedsMenu">
                <div className="user">
                  <div className="userImg"></div>
                  <div className="userId">navi</div>
                </div>
                <FontAwesomeIcon icon={faEllipsis} className="more" />
              </div>

              <div className="feedMainContents">
                <div className="feedImg">
                  <img src="./images/feed1.png" alt="" />
                </div>

                <div className="feedUtilMenu">
                  <div className="left">
                    <FontAwesomeIcon icon={faHeart} className="UtilMenuLike" />
                    <FontAwesomeIcon
                      icon={faComment}
                      className="UtilMenuComment"
                    />
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="UtilMenuShare"
                    />
                  </div>
                  <div className="right">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className="UtilMenuBookmark"
                    />
                  </div>
                </div>

                <div className="feedLikes">
                  <div className="feedLikesImg"></div>
                  <div className="feedLikesText">
                    <span>sagong</span>님 외 <span>10명</span>이 좋아합니다.
                  </div>
                </div>

                <div className="commentsBox">
                  <ul>
                    <li className="commentBox">
                      <div className="left">
                        <div className="commentId">abc</div>
                        <div className="comment">너어무 기여워</div>
                      </div>

                      <div className="right">
                        <button className="commentRemoveBtn">X</button>
                        <button className="commentlikeBtn">
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="commentlike"
                          />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>

                <form className="commentPost">
                  <input
                    required
                    type="text"
                    placeholder="댓글 달기..."
                    className="inputText"
                  />
                  <button type="submit" className="submitBtn">
                    게시
                  </button>
                </form>
              </div>
            </article>
          </section>

          <aside className="mainRight">
            <div className="myProfil">
              <div className="myProfilImg"></div>
              <div className="myProfilText">
                <div className="myProfilId">genie</div>
                <div className="myProfilName">WeCode | 위코드</div>
              </div>
            </div>

            <div className="story">
              <div className="title">
                <h3>스토리</h3>
                <span className="more">모두 보기</span>
              </div>
              <ul>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg"></div>
                  </div>

                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg"></div>
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg"></div>
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg"></div>
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg"></div>
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg"></div>
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="recommendation">
              <div className="title">
                <h3>회원님을 위한 추천</h3>
                <span className="more">모두 보기</span>
              </div>
              <ul>
                <li>
                  <div className="recommendationImg"></div>
                  <div className="recommendationText">
                    <div className="recommendationId">jieunnnn</div>
                    <div className="recommendationFollow">
                      dainzzl님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                  <button type="submit" className="followBtn">
                    팔로우
                  </button>
                </li>
                <li>
                  <div className="recommendationImg"></div>
                  <div className="recommendationText">
                    <div className="recommendationId">gongjooim</div>
                    <div className="recommendationFollow">
                      dainzzl님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                  <button type="submit" className="followBtn">
                    팔로우
                  </button>
                </li>
                <li>
                  <div className="recommendationImg"></div>
                  <div className="recommendationText">
                    <div className="recommendationId">jungminimanimo</div>
                    <div className="recommendationFollow">
                      dainzzl님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                  <button type="submit" className="followBtn">
                    팔로우
                  </button>
                </li>
              </ul>
            </div>

            <footer>
              <p>
                Instagram 정보 · 지원 · 홍보센터 · API ·<br />
                채용 정보 · 개인정보처리방침 · 약관 ·<br />
                디렉터리 · 프로필 · 해시태그 · 언어
              </p>
              <span>© 2023 WESTAGRAM</span>
            </footer>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Main;
