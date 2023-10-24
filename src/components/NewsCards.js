import React, { useState, useEffect, createRef } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import "./NewsCard.css";
import phone from "../images/phone.jpg";

const NewsCards = ({ articles, activeArticles }) => {
  const [articleRefs, setArticleRefs] = useState([]);

  //Function to truncate the card content to fit to the card
  const truncatedContent = (article, maxLen) => {
    let title = article.title;
    let description = article.description;

    //If description is empty set it to a default value
    if (!description) description = "Not Available";

    if (title.length + description.length <= maxLen) {
      return description;
    } else {
      maxLen = maxLen - title.length;
      return `${description.slice(0, maxLen)}...`;
    }
  };

  //Function to scroll the screen to active card
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  //Creating refs to all cards
  useEffect(() => {
    console.log("Article useeffect");
    setArticleRefs((refs) =>
      Array(articles.length)
        .fill()
        .map((_, index) => refs[index] || createRef())
    );
  }, [articles]);

  //Scroll to active card ref
  useEffect(() => {
    console.log("Active useeffect");
    if (articleRefs[activeArticles]) {
      scrollToRef(articleRefs[activeArticles]);
      console.log(" INSIDE Active useeffect");
    }
  }, [activeArticles, articleRefs]);

  const maxLen = 150;

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {articles.map((article, idx) => (
          <Col key={idx}>
            <div
              className={`title ${
                activeArticles === idx ? "article-active" : ""
              }`}
            >
              <Card ref={articleRefs[idx]}>
                <Card.Img
                  variant="top"
                  src={article.urlToImage || phone}
                  style={{ height: "10rem" }}
                />
                <Card.Body style={{ minHeight: "15rem" }}>
                  <Card.Title>
                    <div>
                      <h5>{article.title}</h5>
                    </div>
                  </Card.Title>
                  {/* <Card.Subtitle>{Date(article.publishedAt)}</Card.Subtitle> */}
                  <Card.Text>{truncatedContent(article, maxLen)}</Card.Text>
                </Card.Body>

                <Card.Footer>
                  <div className="footer-grp">
                    <Card.Link href={article.url} target="_blank">
                      <button>VIEW ARTICLE</button>
                    </Card.Link>
                    <h6>{idx + 1}</h6>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsCards;
