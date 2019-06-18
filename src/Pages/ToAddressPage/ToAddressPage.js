import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import "./ToAddressPage.scss";
import FormDefaultAddress from "./FormDefaultAddress";
import { withRouter } from "react-router-dom";
class ToAddresspage extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.changeLocation(latLng);
        localStorage.setItem("toAddress", this.state.address);
        this.props.history.push("./confirmpage");
      })
      .catch(error => console.error("Error", error));
  };

  render() {
    const { history } = this.props;
    const value = this.state.address;
    console.log(value);
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onSubmit={this.handleSubmit}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="modal-search-location">
            <div className="inputForm">
              <label>
                <i class="fas fa-square-full" />
              </label>
              <input
                {...getInputProps({
                  placeholder: "Where would you like to go?",
                  className: "location-search-input"
                })}
              />
              <button
                className="search-button"
                type="submit"
                onClick={event => this.handleSubmit(history, event)}
              >
                <i class="fas fa-search" />
              </button>
            </div>
            {value ? (
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {console.log(this.state.address)}
                {}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <div className="show-item-suggestion">
                        <i class="fas fa-map-marker-alt" />
                        <div>
                          <h5>{suggestion.formattedSuggestion.mainText}</h5>
                          <p>{suggestion.formattedSuggestion.secondaryText}</p>
                        </div>
                      </div>
                      {/* {console.log(suggestion)} */}
                    </div>
                  );
                })}
              </div>
            ) : (
              <FormDefaultAddress />
            )}
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

const SearchDestinationWithRouter = withRouter(ToAddresspage);
export default SearchDestinationWithRouter;
