import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

const NewsCards = ({ articles }) => {
  const truncatedContent = (article, maxLen) => {
    if (article.length <= maxLen) {
      return article;
    } else {
      return article.slice(0, maxLen);
    }
  };

  console.log(articles);
  const maxLen = 100;
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {articles.map((article, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={article.urlToImage}
                style={{ maxHeight: "10rem" }}
              />
              <Card.Body style={{ minHeight: "15rem" }}>
                <Card.Title>{article.title}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">
                  {article.description}
                </Card.Subtitle> */}
                <Card.Text>
                  {/* {article.description} */}
                  {truncatedContent(article.description, maxLen)}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href={article.url}>
                  <button>VIEW ARTICLE</button>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsCards;
