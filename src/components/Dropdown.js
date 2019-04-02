import React, { Component } from 'react';
import Store from "../stores/Store";
import * as Actions from "../actions/Actions";
import '../styles/Dropdown.scss';

let searchString = "";

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities:[],
            value: '',
        };
        this.storeChanged = this.storeChanged.bind(this);
    }

    componentDidMount() {
        Store.on("change", this.storeChanged);
        this.storeChanged();
    }

    componentWillUnmount() {
        Store.removeListener("change", this.storeChanged);
    }

    storeChanged() {
        let cities = Store.getCities();
        console.log("StoreChanged", cities);
        this.setState({
            cities,
        });
    }

    _handleKeyPress = (event) => {
        let RegExpression = /^[a-zA-Z\s]*$/;

        if (RegExpression.test(event.key) && event.key.length === 1) {
            searchString+=event.key;
        }else if(event.key === 'Backspace'){
            searchString = searchString.slice(0,-1);
        }
        Actions.GetAll(searchString);

        if (searchString === ''){
            this.setState({
                cities: []
            });
        }
    };

    _setValue(name) {
        searchString = name;
        Actions.GetAll(searchString)
    }
    render() {
        let cities = this.state.cities;
        return (
            <div className="container">
                <br/>
                <br/>
                <h1>Typeahead Dropdown</h1>
                <br/>
                <br/>
                <div className="dropdown">
                    <input placeholder="Search for Cities"
                           type="text" pattern="[A-Za-z]"
                           value={searchString} onKeyDown={this._handleKeyPress} />
                    <ul className="auto-suggest">{
                        cities.map((city) => {
                            return (
                                <li key={city.id} className="suggestion-box" onClick={() => {this._setValue(city.name)}}>
                                    <span>
                                        {city.name}
                                    </span>
                                </li>
                            )
                        })
                    }</ul>
                </div>
            </div>
        );
    }
}
