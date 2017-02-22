/**
 * Created by jozeanne on 22/02/17.
 */
import React, { Component } from 'react'

const inputForm = field => {
  return (
      <div>
        <label>{field.input.label }</label>
        < select {...field.input}/>
        {field.touched && field.error && <div className="error">{field.error}</div>}
      </div>
  )
}
export default inputForm;