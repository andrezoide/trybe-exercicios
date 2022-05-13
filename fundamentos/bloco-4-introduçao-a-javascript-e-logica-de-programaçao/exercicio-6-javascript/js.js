let pessoaCandidata = 'lista';


switch(pessoaCandidata){
    case 'aprovada':
        console.log('parabens, aprovada.');
        break;

    case 'reprovada':
        console.log('infelizmente, reprovada.');
        break;

    case 'lista':
        console.log('esta na lista de espera.');
        break;

        default:
            console.log('não se aplica');
}