import React, { useState, useEffect } from 'react'

export default function FncClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => {
      tick()
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function tick() {
    setDate(new Date())
  }

  return (
    <div>Time is: {date.toLocaleTimeString()}</div>
  )
}