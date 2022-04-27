import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div class="container-xl">
      <div class="row">
        <div class="col"></div>
        <div class="col-8">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperbat.com/img/417900-pharmacist-wallpaper.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First  Slide</h3>
                                <p>
                                FSD .NET Capstone Project Problem Statement - E-Healthcare.
                                </p>
                            </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperbat.com/img/181993-why-amazon-bought-pillpack-for-753-million-and-what-happens-next.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide - Alien</h3>
                                <p>FSD .NET Capstone Project Problem Statement - E-Healthcare </p>
                            </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperbat.com/img/370715-pills-pharmacy-wallpaper-hd-desktop-and-mobile-background.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide</h3>
                                <p>
                                FSD .NET Capstone Project Problem Statement - E-Healthcare
                                </p>
                            </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperbat.com/img/417900-pharmacist-wallpaper.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First  Slide</h3>
                                <p>
                                FSD .NET Capstone Project Problem Statement - E-Healthcare.
                                </p>
                            </Carousel.Caption>
                            </Carousel.Item>

                            

                        </Carousel>
        </div>
        <div class="col"></div>

        <div class="row">
          <div class="col"></div>
          <div class="col-8">

            <p class="lead">
                  <h5>DESCRIPTION :FSD .NET Capstone Project Problem Statement - Online E-Health Care Management System.</h5>
            </p>
            
            
            <p class="lead">
            Create a dynamic and responsive e-healthcare web application for ordering medicines of different categories..

            </p>
            <p class="lead">
            As a result, the team decided to hire a Full Stack developer to develop a healthcare web application with a rich and user-friendly interface.
You are hired as the Full Stack Developer and are asked to develop the web application. The management team has provided you with the requirements and their business model so that you can easily arrange different components of the application.
            </p>

            <p class="lead">
            The customer selects the required medicines and orders them by a single click. Before it, the customer needs to create a login account and fill all the details like name, address, any id no…Etc.  The client can able to view the status of the medicines. The business goal for the application is to provide the medicines to all the people & admin will provide the supplier details.
            </p>

            <p class="lead">
            You are hired as one of the Full Stack .Net developer and have been asked to develop 
the web application. The management team has provided you the requirements and 
their business model so that you can easily arrange different components of the 
application.
            </p>

          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;