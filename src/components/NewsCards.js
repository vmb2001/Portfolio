import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

const NewsCards = ({ articles }) => {
  console.log(articles);

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {articles.map((article, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {article.description}
                </Card.Subtitle>
                <Card.Text>{article.content}</Card.Text>
                <Card.Link href={article.url}>View article</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsCards;
