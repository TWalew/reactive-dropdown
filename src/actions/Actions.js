import dispatcher from '../dispatchers/Dispatcher';
import {GetCities} from "./ActionCreators";
import Service from "../services/Service";

export function GetAll(name) {
    Service.GetAllCities(name).then(response => {
        if (response) {
            dispatcher.dispatch(GetCities(response));
        }
    });
}