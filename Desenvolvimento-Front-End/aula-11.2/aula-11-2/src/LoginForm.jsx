import React, {Component} from 'react';
import './App.css';
import TextArea from './TextArea';
import Nome from './Nome';

class LoginForm extends Component {

    //outra forma de criar estado sem precisar do constructor.
    state = {
        estadoFavorito: '',
        nome: '',
        buttonDisabled: true
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            const { nome, estadoFavorito} = this.state;
            const buttonIsDisabled = nome.length === 0 || estadoFavorito.length === 0;

            this.setState({
                buttonDisabled: buttonIsDisabled
            })
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { nome, estadoFavorito } = this.state;
        alert(`foi inserido isso no nome ${nome} e isso no estado ${estadoFavorito}`);
    }

    render() {
        const { nome, estadoFavorito, buttonDisabled } = this.state;

        return (
            <section>
                <Nome nome={nome} handleChange={this.handleChange} />
                <TextArea estado={estadoFavorito} handleChange={this.handleChange} />
                <button disabled={buttonDisabled} >clica ai</button>
            </section>
            
        )
    }
}

export default LoginForm;
