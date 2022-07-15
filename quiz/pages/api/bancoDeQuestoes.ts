import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(201, 'Qual dos nomes citados não representa um continente?', [
        RespostaModel.errada('América'),
        RespostaModel.errada('Europa'),
        RespostaModel.errada('Ásia'),
        RespostaModel.certa('Brasil')
    ]),
    new QuestaoModel(202, 'Onde está o memorial Padre Cícero?', [
        RespostaModel.errada('Ilhéus'),
        RespostaModel.errada('Canudos'),
        RespostaModel.errada('Maceió'),
        RespostaModel.certa('Juazeiro do Norte')
    ]),
    new QuestaoModel(203, 'Qual o nome da representação do globo terrestre em um plano?', [
        RespostaModel.errada('Atlas'),
        RespostaModel.errada('Hemisfério'),
        RespostaModel.errada('Mapa'),
        RespostaModel.certa('Planisfério')
    ]),
    new QuestaoModel(204, 'Em qual Região brasileira localiza-se o estado do Amapá?', [
        RespostaModel.errada('Suldeste'),
        RespostaModel.errada('Nordeste'),
        RespostaModel.errada('Sul'),
        RespostaModel.certa('Norte')
    ]),
    new QuestaoModel(205, 'Qual país não faz parte da América do sul?', [
        RespostaModel.errada('Colômbia'),
        RespostaModel.errada('chile'),
        RespostaModel.errada('Equador'),
        RespostaModel.certa('México')
    ]),
    new QuestaoModel(206, 'Como é chamada uma porção de terra cercada de água?', [
        RespostaModel.errada('Ponta'),
        RespostaModel.errada('Continente'),
        RespostaModel.errada('Território'),
        RespostaModel.certa('Ilha')
    ]),
    new QuestaoModel(207, 'A região Brasileira mais populosa é?', [
        RespostaModel.errada('Sul'),
        RespostaModel.errada('Centro-oeste'),
        RespostaModel.errada('nordeste'),
        RespostaModel.certa('Suldeste')
    ]),
    new QuestaoModel(208, 'O Brasil é banhado por quantos oceanos?', [
        RespostaModel.errada('2'),
        RespostaModel.errada('3'),
        RespostaModel.errada('4'),
        RespostaModel.certa('1')
    ]),
    new QuestaoModel(209, 'Em que continente se localiza a Grécia?', [
        RespostaModel.errada('América'),
        RespostaModel.errada('Ásia'),
        RespostaModel.errada('África'),
        RespostaModel.certa('Europa')
    ]),
    new QuestaoModel(210, 'A que país da América do sul pertecem as ilhas de Trindade e Martim Vaz?', [
        RespostaModel.errada('Peru'),
        RespostaModel.errada('Uruguai'),
        RespostaModel.errada('Argentina'),
        RespostaModel.certa('Brasil')
    ]),
]

export default questoes