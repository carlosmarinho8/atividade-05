import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS
} from "./types";
import ClientDataService from "../services/client.service";
export const createClient = (name, description) => async (dispatch) => {
  try {
    const res = await ClientDataService.create({ name, description });
    dispatch({
      type: CREATE_TUTORIAL,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveClients = () => async (dispatch) => {
  try {
    const res = await ClientDataService.getAll();
    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateClient = (id, data) => async (dispatch) => {
  try {
    const res = await ClientDataService.update(id, data);
    dispatch({
      type: UPDATE_TUTORIAL,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const deleteClient = (id) => async (dispatch) => {
  try {
    await ClientDataService.delete(id);
    dispatch({
      type: DELETE_TUTORIAL,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteAllClients = () => async (dispatch) => {
  try {
    const res = await ClientDataService.deleteAll();
    dispatch({
      type: DELETE_ALL_TUTORIALS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const findClientsByName = (name) => async (dispatch) => {
  try {
    const res = await ClientDataService.findByName(name);
    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};