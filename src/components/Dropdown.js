import React, { Component } from 'react';
import Store from "../stores/Store";
import '../App.css';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities:[]
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

    render() {
        return (
            <div className="dropdown">
                    <input type="text"/>
                    <h1>test</h1>
                    <ul>
                        <li>

                        </li>
                    </ul>
            </div>
        );
    }
}
