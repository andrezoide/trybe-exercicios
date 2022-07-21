const { getGitUserInfos, getUserReposUrl } = require('./aula');

describe('Quando chamada, a função getGithubUserInfos...', () => {
  it('deve retornar um objeto contendo name, company, twitter e location', async () => {
    expect.assertions(1); //testes que a gente espera, apenas um que esta abaixo.
    //cenario esperado
    const expectValue = {
        name: 'Gabriel Oliva',
        company: '@betrybe',
        twitter: 'gfpoliva',
        location: 'Belo Horizonte',
    }

    const result = await getGitUserInfos('gfpoliva');

    expect(result).toEqual(expectValue);
  });
});