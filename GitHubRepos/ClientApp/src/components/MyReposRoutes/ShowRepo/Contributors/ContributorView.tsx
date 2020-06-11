import React from "react";
import { Contributor } from "../../../../contracts/responses";
import { CardImg, Card, CardTitle, CardBody } from "reactstrap";

interface Props {
  contributor: Contributor;
}

const image = {
  width: 270 + "px",
  height: 270 + "px",
};

const ContributorView: React.FC<Props> = ({ contributor }) => {
  return (
    <div className="p-2 col-md-12 col-lg-4 d-flex justify-content-center">
      <a href={contributor.html_url} about="_blank" rel="noopener noreferrer">
        <Card style={{ maxWidth: image.width }}>
          <CardImg
            top
            width={image.width}
            height={image.height}
            src={contributor.avatar_url}
            alt="Avatar"
          />
          <CardBody>
            <CardTitle>{contributor.login}</CardTitle>
          </CardBody>
        </Card>
      </a>
    </div>
  );
};

export default ContributorView;
