import React from 'react'

import formatAMPM from '../lib/format-ampm'

const EventItem = (event) => {
  const { id, name, start, url } = event
  const eventStr = `${formatAMPM(start)} ${name}`

  return (
    <div className='event' key={id} title={name}>
      {url ? <a href={url} target='_blank'>{eventStr}</a> : eventStr}
      <style jsx>{`
        a:hover {
          background: white;
          color: red;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default ({ date, events }) => (
  <div className='cell'>

    <div className='date'>{date}</div>

    <div className='events'>
      {events.map(event => EventItem(event))}
    </div>

    <style jsx>{`
      .cell {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        height: 150px;
        width: 150px;
        margin: 0 -2px -5px 0;
        border: 2px solid white;
        overflow: hidden;
      }
      .date {
        position: absolute;
        right: 2px;
      }
      .events {
        position: absolute;
        overflow: auto;
        width: 100%;
        height: 134px;
        line-height: 1;
        top: 12px;
        left: 2px;
        white-space: nowrap;
      }
    `}</style>

  </div>
)
