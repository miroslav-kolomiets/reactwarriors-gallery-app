import React from "react";
import ImageCard from "./ImageCard";
import Loader from "./Loader";
import RangeInput from "./RangeInput";

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      range: 0
    };
  }

  getData = (filters, pagination) => {
    const link = `https://www.reddit.com/r/reactjs.json?limit=100`;

    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data.children
        });
        console.log(this.state);
      });
  };

  componentDidMount() {
    this.getData();
  }

  handleChange = event => {
    this.setState({ range: event.target.value });
  };

  render() {
    const cards = this.state.data;
    console.log(cards);
    return (
      <div>
        <RangeInput value={this.state.range} handleChange={this.handleChange} />
        <Loader cards={this.state.data} />
        <div className="gallery-wrapper">
          {cards.map(card => {
            return <ImageCard card={card} />;
          })}
        </div>
      </div>
    );
  }
}
