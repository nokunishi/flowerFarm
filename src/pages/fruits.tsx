import {Col, Row} from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export function Fruits() {
  return (
    <>
      <h1 style={{ fontFamily: "Book Antiqua" }}> Fruits </h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            {" "}
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

