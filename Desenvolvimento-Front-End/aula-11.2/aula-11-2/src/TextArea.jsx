import React, { Component } from 'react';

class TextArea extends Component {

    render() {
    

        return (
            <section>
                <h1>Estados e React: ferramenta foda</h1>
                <form>
                    <label>
                        Diga qual é o seu estado favorito! Do brasil ou do react
                        <br />
                        <textarea name="estadoFavorito" />
                    </label>
                </form>
            </section>
        )
    }
}

export default TextArea;