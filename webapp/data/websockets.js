// This file helps integrate the WebSockets connection to the server with the Redux data store.
// It is based off https://medium.com/@ianovenden/redux-websocket-integration-c1a0d22d3189

import io from 'socket.io-client';

const socket = io.connect(window.SERVER_URI);

export const WS_EVENT_TYPES = {
  PUBLISH_ROS_MESSAGE: 'publishROSMessage',
};

export const ROS_TOPICS = {
  HEADING: '/boat/heading',
  POSITION: '/boat/position',
  HEADING_CONTROL_KI: '/control/heading/ki',
  HEADING_CONTROL_KP: '/control/heading/kp',
  HEADING_CONTROL_ERROR_DESIRED_RUDDER_POS: '/control/heading/error_desired_rudder_pos',
  TARGET_HEADING: '/control/heading/target'
};

export const ROS_MSG_TYPES = {
  Float32: 'Float32',
  Float64: 'Float64',
  Float32MultiArray: 'Float32MultiArray',
  Float64MultiArray: 'Float64MultiArray',
  GridMap: 'GridMap',
  Image: 'Image',
  Pose2D: 'Pose2D',
  String: 'String',
};

export const init = ( store ) => {

  Object.keys(ROS_TOPICS).forEach(topic => socket.on(ROS_TOPICS[topic], (payload) =>
        store.dispatch({ type: ROS_TOPICS[topic], data: payload.data })
      )
    );
};

export const emit = ( type, payload ) => socket.emit( type, payload );