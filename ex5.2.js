let armazenarUser = [];
let _listaPrivada = [];
export function user() {
    menu:
    while (true) {

        const menu = `
    selecione uma opção:
    1 - Adicinar Usúario.
    2 - Remover Usúario.
    3 - Atualizar Dados de Usúarios.
    0 - Encerrar programa.
    : `

        const opcao = parseInt(prompt(menu));
        switch (opcao) {
            case 1:
                addUser();
                break;
            case 2:
                removUser();
                break;
            case 3:
                atualizaUser();
                break
            case 0:
                console.log('Sistema encerrado.');
                break menu;
            default:
                console.log('Error: opção invalida.');
        };
    };

    function addUser() {
        const nome = prompt('Digite seu nome de Usúario.').toLocaleUpperCase();
        const email = prompt('Digite seu email de Usúario.').toLocaleUpperCase();
        const senha = prompt('Digite sua senha de Usúario.').toLocaleUpperCase();

        armazenarUser.push({ nome });
        _listaPrivada.push({ email, senha });
        console.log('Usúario adicionado.');
    };

    function removUser() {
        console.log('Para remover seu usúario forneça as seguintes informações.');
        const email = prompt('Digite seu email: ').toLocaleUpperCase();
        const senha = prompt('Digite sua senha: ').toLocaleUpperCase();
        const dados = _listaPrivada.findIndex((remov) => remov.email === email && remov.senha === senha);

        if (dados !== -1) {
            _listaPrivada.splice(dados, 1);
            armazenarUser.splice(dados, 1);
            console.log('Usúario removido.');
        } else {
            console.log('Email ou senha inválida.');
        };
    };

    function atualizaUser() {
        console.log('Para atualizar seu usúario forneça as seguintes informações.');
        const email = prompt('Digite seu email: ').toLocaleUpperCase();
        const senha = prompt('Digite sua senha: ').toLocaleUpperCase();
        const index = _listaPrivada.findIndex((a) => a.email === email && a.senha === senha);

        if (index !== -1) {
            console.log('Agora fornaça seus dados que deseja atualizar: ');
            const nomeNovo = prompt('Digite seu nome: ').toLocaleUpperCase();
            const emailNovo = prompt('Digite seu email: ').toLocaleUpperCase();
            const senhaNovo = prompt('Digite sua senha: ').toLocaleUpperCase();

            _listaPrivada[index].email = emailNovo;
            _listaPrivada[index].senha = senhaNovo;
            armazenarUser[index].nome = nomeNovo;

            console.log('Dados atualizados com sucesso.');
        } else {
            console.log('Email ou senha inválida.');
        };
    };
};
