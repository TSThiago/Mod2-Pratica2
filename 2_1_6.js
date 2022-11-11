// Desafio Escopo:

// function confirmarDados(nome){
//     var nomeCompleto = nome + ' da Silva';
//     var idade = 20;
//     function getAnoNascimento(){
//         var ano = 2022 - idade;
//         return ano
//     }

//     console.log('nome completo', nomeCompleto);
//     console.log('ano de nascimento', getAnoNascimento());
//     console.log('idade', idade)
// }

// confirmarDados('Marcos');

// Desafio var, let e const:

// function confirmarDados(nome){
//     const nomeCompleto = nome + ' da Silva'
//     let geracao = 'millenium';
//     function getAnoNascimento(){
//         let idade = 40;
//         const ano = 2022 - idade;
//         return ano;
//     }

//     let anoDeNascimento = getAnoNascimento();
//     if(anoDeNascimento <= 1995){
//         geracao = 'geração X';
//     }
//     console.log('nome completo', nomeCompleto);
//     console.log('ano de nascimento', anoDeNascimento);
//     console.log('geração', geracao)
// }
// confirmarDados('Marcos')

// Desafio Try...catch:

// function confirmarDados(nome) {
//     try {
//         const nomeCompleto = nome + ' da Silva';
//         function getAnoNascimento() {
//             const idade = 20;
//             const ano = 2022 - idade;
//             return ano
//         }
//         console.log('nome completo', nomeCompleto);
//         console.log('ano de nascimento', getAnoNascimento());
//         console.log('idade', idade)
//     }catch{
//         console.log('um erro foi encontrado e não foi possível concluir a operação')
//     }
// }

// confirmarDados('Marcos');

// Desafio Funções:

function confirmarDados(nome){
    const nomeCompleto = nome + ' da Silva'
    let geracao = 'millenium';
    function getAnoNascimento(){
        const idade = 40;
        const ano = 2022 - idade;
        return ano;
    }

    const anoDeNascimento = getAnoNascimento();
    function geracaoPertence(idade){
        if(idade <= 1995){
            geracao = 'geração X';
            return geracao
        }
    }
    geracao = geracaoPertence(anoDeNascimento)
    console.log('nome completo', nomeCompleto);
    console.log('ano de nascimento', anoDeNascimento);
    console.log('geração', geracao)
}
confirmarDados('Marcos')