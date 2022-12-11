import React, { useContext } from 'react';
import styled from "styled-components"
import { TimetableContext } from '../../contexts/TimetableContext';
import {
  translucify,
  toneColor
} from '/imports/tools/utilities.js'





const StyledSession = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;

  height: ${props => (props.height * 100 + "%")};

  // Colours depend on whether session is scheduled
  background-color: ${props => (
    props.unscheduled
    ? translucify(props.bg_colour, 0.33)
    : props.bg_colour
  )};
  color: ${props => (
    props.unscheduled
    ? translucify(props.bg_colour, 0.5)
    : "inherit"
  )};

  ${props => props.dated
           ? `border: inset 2px #999};`
           : "border: none;"
  }
  pointer-events: all;
  cursor: grab;

  &.dragged {
    opacity: 0.3333;
  }
`

export const Session = (props) => {
  if (!props.height) {
    return ""
  }


  const {
    dragStart,
  } = useContext(TimetableContext)


  return (
    <StyledSession
      { ...props }
      draggable
      onDragStart={dragStart}
      className="session"
    >
      {props.name}
    </StyledSession>
  );
};
