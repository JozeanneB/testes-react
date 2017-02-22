/**
 * Created by jozeanne on 20/02/17.
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
//import { connect } from 'react-redux';


//import { connect } from 'react-redux'
/*
const helloWorld = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  return errors;
  }
*/

let SimpleForm = (props) => {
  return (
      <form>
        <div>
          <label>Nome Completo</label>
          <div>
            <Field name="nomeCompleto" component="input" type="text" placeholder="Digite seu nome"/>
            <Field name="responsavel" component="input" type="text" placeholder="Digite o nome do seu responsavel"/>
          </div>
        </div>
        <div>
          <button type="enviar" >Enviar</button>
          <button type="limpar">Limpar</button>
        </div>
        <h1>Hello,{props.initialValues.nomeCompleto}</h1>
        <pre>{JSON.stringify(props,0,2)}</pre>
      </form>
  )
}

//Funciona
//let mapStateToProps = (state) => (state);
//<h1>Hello, {props.form.simple.values.nomeCompleto}</h1>
let mapStateToProps = (state) => {text: {state.form.simple.values.nomeCompleto}};
SimpleForm = connect(mapStateToProps)(SimpleForm)

export default reduxForm({
  form: 'simple',  // a unique identifier for this form
  initialValues: {nomeCompleto: 'fafd'}
})(SimpleForm)

//onClick={dispatch({type:'ENVIAR', data:'enviado'})}

//<Filder name="nomeCompleto" component="input" type="text" placeholder="Digite seu nome"/>