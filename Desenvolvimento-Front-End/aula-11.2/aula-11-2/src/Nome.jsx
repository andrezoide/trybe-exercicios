import React, { Component } from 'react';

class Nome extends Component {
    render() {


        return (
            <section>
                <h1>Nome</h1>
                <form>
                    <label>
                        Nome
                        <input name='nome' type='text' ></input>
                    </label>
                </form>
            </section>
        )
    }
}

export default Nome;