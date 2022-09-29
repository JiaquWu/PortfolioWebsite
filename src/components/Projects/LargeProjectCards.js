import React from "react";
import Card from "react-bootstrap/Card";


function LargeProjectCards(props) {
    return (
      <Card className="project-card-view">
        <iframe title={props.videoTitle} src={props.videoLink} 
        height={props.videoHeight} width={props.videoWidth} frameborder="0" allowfullscreen="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {/* <Card.Link>
            <a href="https://store.steampowered.com/news/app/1129310/view/3019092467758679460">??</a>
          </Card.Link> */}
          {/* <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button> */}
          {"\n"}
          {"\n"}
  
          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
  
          {/* {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )} */}
        </Card.Body>
      </Card>
    );
  }
  export default LargeProjectCards;