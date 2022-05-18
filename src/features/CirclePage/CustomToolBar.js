import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Navigate as navigate } from 'react-big-calendar';

function ViewNamesGroup({ views: viewNames, view, messages, onView }) {
  return viewNames.map((name) => (
    <button
      type="button"
      key={name}
      className={clsx({ 'rbc-active': view === name })}
      onClick={() => onView(name)}
    >
      {messages[name]}
    </button>
  ))
}
ViewNamesGroup.propTypes = {
  messages: PropTypes.object,
  onView: PropTypes.func,
  view: PropTypes.string,
  views: PropTypes.array,
}


export default function CustomToolbar({
  // date, // available, but not used here
  label,
  localizer: { messages },
  onNavigate,
  onView,
  view,
  views,
}) {
  return (
    <div className="rbc-toolbar">

      <span className="rbc-btn-group" style={{
        display:'flex',
        justifyContent:'space-around',
        width:'100%'
      }}>
        <button
          type="button"
          onClick={() => onNavigate(navigate.PREVIOUS)}
          aria-label={messages.previous}
          style={{
            borderRadius:'50%',
            boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'
          }}
        >
          <i className="fa fa-fw fa-chevron-left"></i>
        </button>

        <span className="rbc-toolbar-label" style={{
          fontSize:'1.8rem',
          fontWeight:'bold'
        }}>{label}</span>
        
        <button
          type="button"
          onClick={() => onNavigate(navigate.NEXT)}
          aria-label={messages.next}
          style={{
            borderRadius:'50%',
            boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'
          }}
        >
          <i className="fa fa-fw fa-chevron-right"></i>
        </button>
      </span>
    </div>
  )
}
CustomToolbar.propTypes = {
  date: PropTypes.instanceOf(Date),
  label: PropTypes.string,
  localizer: PropTypes.object,
  messages: PropTypes.object,
  onNavigate: PropTypes.func,
  onView: PropTypes.func,
  view: PropTypes.string,
  views: PropTypes.array,
}