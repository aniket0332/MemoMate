import React from "react";
// import { Container, Row } from "react-bootstrap";
import { Container, TableRow } from "@mui/material";

function MainScreen({ children, title }) {
  return (
    <div className="mainback">
      <Container>
        <TableRow >
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </TableRow>
      </Container>
    </div>
  );
}

export default MainScreen;
