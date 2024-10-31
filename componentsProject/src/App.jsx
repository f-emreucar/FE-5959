import NavbarComponent from "./Sections/NavbarComponent";
import HeaderComponent from "./Sections/HeaderComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CarsComponent from "./components/CarsComponent";
import { FaRegFolder } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { IoCodeSharp } from "react-icons/io5";
// import { FcApproval } from "react-icons/fc";
import { BsBootstrap } from "react-icons/bs";
import { BsCardHeading } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
// import CardComp from "./components/Card";
import { Container, Row } from "react-bootstrap";
import Footer from "./Sections/Footer";

const cardData = [
  {
    id: "1",
    icon: FaRegFolder,
    title: "Fresh new Layout",
    content:
      "With Bootstrap 5, we've created a fresh new layout for this template!",
  },
  {
    id: "2",
    icon: IoIosCloudDownload,
    title: "Free to download",
    content:
      "As always, Start Bootstrap has a powerful collectin of free templates!",
  },
  {
    id: "3",
    icon: BsCardHeading,
    title: "Jumbotron hero header",
    content: "The heroic part of this template is the jumbotron hero header!",
  },
  {
    id: "4",
    icon: BsBootstrap,
    title: "Feature boxes",
    content: "We've created some custom feature boxes using Bootstrap icons!",
  },
  {
    id: "5",
    icon: IoCodeSharp,
    title: "Simple Clean Code",
    content:
      "We keep our dependencies up to date and squash bugs as they come!",
  },
  {
    id: "6",
    icon: MdOutlineVerified,
    title: "A name you trust",
    content:
      "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
  },
];

function App() {
  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      <Container className="card-container">
        <Row className="row-gap-5">
          {cardData.map(({ icon, content, title, id }) => (
            <CarsComponent
              key={id}
              content={content}
              icon={icon}
              title={title}
            />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
