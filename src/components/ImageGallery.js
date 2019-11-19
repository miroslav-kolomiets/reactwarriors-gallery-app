import React from "react";
import _ from "underscore";
import ImageCard from "./ImageCard";
import Loader from "./Loader";
import RangeInput from "./RangeInput";
import { Button } from "reactstrap";

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      range: 0,
      maxRange: null,
      intervalId: null,
      refreshing: false
    };
  }

  getData = () => {
    const link = `https://www.reddit.com/r/reactjs.json?limit=100`;

    fetch(link)
      .then(response => response.json())
      .then(data => {
        let rawData = data.data.children.map(item => item.data);
        let sortedData = _.sortBy(rawData, "num_comments");
        let reversedSortedData = sortedData.reverse();
        this.setState({
          data: reversedSortedData,
          maxRange: reversedSortedData[0].num_comments
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  filterData = (range) => {
    const data = this.state.data;
    const filteredData = data.filter(item => {
      if (item.num_comments > range) {
        return item;
      }
    });

    this.setState({
      filteredData: filteredData
    });
  };

  handleChange = event => {
    const range = event.target.value;
    this.filterData(range);
    this.setState({
      range: event.target.value,
    });
  };

  handleClick = () => {
    if (!this.state.refreshing) {
      const intervalId = setInterval(() => {
        this.setState({
          data: [],
          filteredData: [],
          range: 0,
        });
        this.getData();
      }, 3000);
      this.setState({
        refreshing: true,
        intervalId: intervalId
      });
    } else if (this.state.refreshing) {
      clearInterval(this.state.intervalId);
      this.setState({
        refreshing: false
      });
    }
  };

  render() {
    const cards =
      this.state.filteredData.length > 0
        ? this.state.filteredData
        : this.state.data;
    return (
      <div>
        <Button color="primary" onClick={this.handleClick}>
          {!this.state.refreshing ? "Start auto-refresh" : "Stop auto-refresh"}
        </Button>
        <RangeInput
          value={this.state.range}
          handleChange={this.handleChange}
          max={this.state.maxRange}
        />
        <Loader cards={cards} />
        <div className="gallery-wrapper">
          {cards.map(card => {
            return <ImageCard card={card} key={card.id} />;
          })}
        </div>
      </div>
    );
  }
}
