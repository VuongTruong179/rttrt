import React from "react";
import { Container, Carousel } from 'react-bootstrap';
import Content from "./Content/content_top/content_top";
import ContentBottom from "./Content/content_bottom/content_bottom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './home.css'

class Home extends React.Component {

    state = {
        listTrending: [],
        allCategory: [],
        imgslier: [
            {
                id: "1", imgSlide: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xHrp2pq73oi9D64xigPjWW1wcz1.jpg"
            },
            {
                id: "2", imgSlide: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg"
            },
            {
                id: "3", imgSlide: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
            }
        ]
    };

    componentDidMount = () => {
        const requestOne = axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=2b1e2eb027ec24b8670a9da2666c0617")
        const requestAllCategory = axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US")


        axios.all([requestOne, requestAllCategory]).then(
            axios.spread((...res) => {
                this.setState(
                    {
                        listTrending: res[0] && res[0].data && res[0].data.results ? res[0].data.results : [],
                        allCategory: res[1].data.genres
                    });
            }))
    }

    render() {
        let { listTrending, allCategory, imgslier } = this.state

        return (
            <>
                <Carousel>
                    {imgslier && imgslier.length > 0 &&
                        imgslier.map((item, index) => {
                            let linkImg = item.imgSlide
                            return (
                                <Carousel.Item key={item.id}>
                                    < img
                                        className="container-slier d-block w-100"
                                        src={linkImg}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Welcome to web</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                </Carousel>
                <Container className="container-title" style={{
                    "overflow": "hidden",
                    "height": "25rem",
                    "margin-top": "1rem",
                    "padding-right": "0px",
                    "padding-left": "0px",
                }}>
                    <div className="releases">
                        <div className="releases-container">
                            <h3 className="title">Popular Today</h3>
                        </div>
                    </div>
                    <Content listTrending={listTrending} />
                </Container>

                <Container style={{ "margin-top": "1rem" }}>
                    <ContentBottom listMovies={listTrending}
                        allCategory={allCategory} />
                </Container>

            </>
        )
    }
}

export default Home