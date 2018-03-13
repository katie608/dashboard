// This file contains a bunch of Redux reducers

import { ActionTypes } from './actions';
import { ROS_TOPICS } from "./websockets";
import SidebarModes from '../data/sidebar-modes';

export function general(state = {}, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case ActionTypes.SET_VIEW_MODE:
            newState.viewMode = action.data;
            return newState;
        case ActionTypes.SET_FOCUSED_DATE:
            newState.currentlyViewingDate = action.data;
            return newState;
        case ActionTypes.DISPLAY_MESSAGE:
            alert(action.message);
            return state;
        case ActionTypes.DISPLAY_ERROR:
            alert((action.message) ? action.message : action.error);
            console.error(action.error);
            return state;
        case ActionTypes.SET_PAGE_TITLE_PREFIX:
            window.document.title = action.title;
            newState.general = Object.assign({}, newState.general, { pageTitlePrefix: action.title });
            return newState;
        default:
            return state;
    }
}

export function boat(state = {}, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ROS_TOPICS.POSITION:
      newState.longitude = action.data.x;
      newState.latitude = action.data.y;
      return newState;
    case ROS_TOPICS.HEADING:
      newState.heading = action.data;
      return newState;
    default:
      return state;
  }
}

export function control(state = {}, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case ActionTypes.SET_HEADING_CONTROLLER_KI:
      newState.heading.ki = action.data;
      return newState;
    case ActionTypes.SET_HEADING_CONTROLLER_KP:
      newState.heading.kp = action.data;
      return newState;
    case ActionTypes.SET_HEADING_CONTROLLER_TARGET_HEADING:
      newState.heading.targetHeading = action.data;
      return newState;
    case ROS_TOPICS.HEADING_CONTROL_ERROR_DESIRED_RUDDER_POS:
      newState.heading.error = action.data.error;
      newState.heading.desiredRudderPos = action.data.desiredRudderPos;
      return newState;
    default:
      return state;
  }
}

export function environment(state = {}, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    default:
      return state;
  }
}
