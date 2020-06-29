export default class AgirarRepository {
    // private apiBaseUrl(): URL {
    //   const url = new URL(process.env.REACT_APP_API_BASE!)
    //   if (!url.pathname.endsWith('/')) url.pathname += '/'
    //   return url
    // }

   getMainCards = () => {
        return(new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [{
                        title: "Excepteur sint occaecat cupidatat",
                        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
                        img: "https://media.rtp.pt/praca/wp-content/uploads/sites/37/2020/06/82423054_1100426620337228_3397187975719682048_n-860x507.jpg",
                        shareLink: ""
                    },
                    {
                        title: "Excepteur sint occaecat cupidatat",
                        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
                        img: "https://media.rtp.pt/praca/wp-content/uploads/sites/37/2020/06/82423054_1100426620337228_3397187975719682048_n-860x507.jpg",
                        shareLink: ""
                    },
                    {
                        title: "Excepteur sint occaecat cupidatat",
                        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
                        img: "https://media.rtp.pt/praca/wp-content/uploads/sites/37/2020/06/82423054_1100426620337228_3397187975719682048_n-860x507.jpg",
                        shareLink: ""
                    },
                    {
                        title: "Excepteur sint occaecat cupidatat",
                        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
                        img: "https://media.rtp.pt/praca/wp-content/uploads/sites/37/2020/06/82423054_1100426620337228_3397187975719682048_n-860x507.jpg",
                        shareLink: ""
                    },
                    {
                        title: "Excepteur sint occaecat cupidatat",
                        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
                        img: "https://media.rtp.pt/praca/wp-content/uploads/sites/37/2020/06/82423054_1100426620337228_3397187975719682048_n-860x507.jpg",
                        shareLink: ""
                    }
                    ])
            }, 3000);
        })))
    }

    getSliderCards = () => {
        return(new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            url: "https://images.pexels.com/photos/951290/pexels-photo-951290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
                            title: "LOREM IPSUM",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada libero vel erat elementum, sed dictum nunc tempor. Nullam auctor lobortis aliquet"
                        }, 
                        {
                            url: "https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
                            title: "LOREM IPSUM",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada libero vel erat elementum, sed dictum nunc tempor. Nullam auctor lobortis aliquet"
                        },
                        {
                            url: "https://images.pexels.com/photos/786799/pexels-photo-786799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
                            title: "LOREM IPSUM",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada libero vel erat elementum, sed dictum nunc tempor. Nullam auctor lobortis aliquet"
                        },
                        {
                            url: "https://images.pexels.com/photos/2549572/pexels-photo-2549572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
                            title: "LOREM IPSUM",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada libero vel erat elementum, sed dictum nunc tempor. Nullam auctor lobortis aliquet"
                        },
                        {
                            url: "https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
                            title: "LOREM IPSUM",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada libero vel erat elementum, sed dictum nunc tempor. Nullam auctor lobortis aliquet"
                        }
                    ])
            }, 3000);
        })))
    }

    getHistory = ()=>{
        return(new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            url: "https://res.cloudinary.com/agirar/image/upload/v1513460965/historia/hist1.jpg", 
                            title: "Nasce um sonho",
                            description: "A AGIRAR surgiu a 8 de Julho de 2013 através do esforço de um grupo de familiares e amigos com o apoio de uma equipa multidisciplinar de profissionais do Serviço de Psiquiatria e Saúde Mental do Centro Hospitalar de Vila Nova de Gaia/Espinho que, em regime de voluntariado se uniu para criar uma resposta na área de saúde mental até ao momento inexistente no concelho de Vila Nova de Gaia", 
                            date: "08/07/2013"
                        }, 
                        {
                            url: "https://res.cloudinary.com/agirar/image/upload/v1513460954/historia/hist3.png", 
                            title: "Participação no Flea Market",
                            description: "A AGIRAR tem vindo a participar nestas iniciativas no sentido de angariar pequenas verbas para ajudar a desenvolver a sua atividade. Os associados têm aderido tanto na divulgação junto dos seus familiares e amigos como na oferta de produtos (roupa, livros, bibelots, brinquedos, …) para venda.",
                            date: "17/10/2014"
                        },
                        {
                            url: "https://res.cloudinary.com/agirar/image/upload/v1513460960/historia/hist4.png", 
                            title: "Aniversário da AGIRAR",
                            description: "Realizou-se no passado mês de Junho um passeio a Arouca para celebrarmos o aniversário da AGIRAR. O programa incluía além de atividades recreativas a visita às Pedras Parideiras e à Torre do IPMA.",
                            date: "08/06/2015"
                        },
                        {
                            url: "https://scontent.fopo3-2.fna.fbcdn.net/v/t1.0-9/15590189_841344229339316_157937394886175968_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=Xl_2z57uoikAX9FLB03&_nc_ht=scontent.fopo3-2.fna&oh=fe0f8f0cbd7bbe9a71ab9c181a051b90&oe=5F193B20", 
                            title: "Jantar de Natal da AGIRAR",
                            description: "E foi assim o Jantar de Natal da AGIRAR! Muita alegria, conversas e boa companhia!",
                            date: "17/12/2016"
                        }, 
                        {
                            url: "https://scontent.fopo3-1.fna.fbcdn.net/v/t31.0-8/22424376_1015559125251158_8760204618740373330_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=omv4g2IU48IAX-IHgKC&_nc_ht=scontent.fopo3-1.fna&oh=e1bcbbfd3f7099b9d676b2030ea9e94e&oe=5F18A95C", 
                            title: "Um Passo pela Saúde Mental",
                            description: 'Decorreu hoje a Caminhada " Um Passo pela Saúde Mental"! Esteve uma bonita manhã de Outono com um sol radiante e uma temperatura amena.',
                            date: "14/10/2017"
                        }, 
                        {
                            url: "https://scontent.fopo3-1.fna.fbcdn.net/v/t31.0-0/p526x395/27982643_1085061851634218_2543651628299712834_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=Yb6qVHl_kUAAX9PcfGE&_nc_ht=scontent.fopo3-1.fna&_nc_tp=6&oh=f96f6892b9a3228ce82b31653f1a7809&oe=5F1C01D6", 
                            title: "Na Minha Mente",
                            description: "E foi assim o Jantar de Natal da AGIRAR! Muita alegria, conversas e boa companhia!",
                            date: "17/02/2018"
                        }, 
                        {
                            url: "https://scontent.fopo3-1.fna.fbcdn.net/v/t1.0-9/73513659_1570877916385940_5061275674484932608_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=KFUBRpX0PIQAX_mzj9s&_nc_ht=scontent.fopo3-1.fna&oh=29888ff94dab032af2d7de97217ad967&oe=5F19F21D", 
                            title: "Um Passo pela Saúde Mental",
                            description: "Este ano demos mais “ Um Passo pela Saúde Mental”! IV Caminhada - se não conseguiu participar inscreva-se para o ano e venha caminhar connosco!",
                            date: "28/10/2019"
                        }, 
                        {
                            url: "https://media.rtp.pt/praca/wp-content/uploads/sites/37/2020/06/82423054_1100426620337228_3397187975719682048_n-860x507.jpg", 
                            title: "Praça da Alegria",
                            description: "A AGIRAR foi convidada para amanhã às 11,15h estar presente na rubrica Consultório de Saúde Mental no Programa Praça da Alegria. O tema a abordar será A Psicose e irá estar presente o Psiquiatra Dr Jorge Bouça e a Enfermeira Fernanda Castro em representação da AGIRAR. Vamos dar Voz à Saúde Mental e ao papel importante que a AGiRAR tem vindo a desenvolver na comunidade onde está inserida.",
                            date: "03/06/2020"
                        }
                    ])
            }, 3000);
        })))
    }

    getAteliers = ()=>{
        return(new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            img: "https://res.cloudinary.com/agirar/image/upload/v1525371649/grupo_de_Ajuda_m%C3%BAtua_d58o8b.jpg", 
                            title: "Grupo de Ajuda Mútua", 
                            date: "1ª SEG DO MÊS", 
                            time: "18:00 - 19:00", 
                            desc: "Este grupo tem como principal objetivo promover a aproximação e partilha de experiências, conhecimentos e preocupações em relação à doença identificando estratégias que permitam ganhos de saúde e melhoria da qualidade de vida de cuidadores e pessoas com psicose"
                        }, 
                        {
                            img: "https://res.cloudinary.com/agirar/image/upload/v1525371649/Consultas_de_Psicologia_dkrw2b.jpg", 
                            title: "Consultas de Psicologia", 
                            date: "Por marcação", 
                            time: "Por marcação", 
                            desc: "Acompanhamento psicológico em consulta individual, com marcação prévia para associados e utentes a frequentar os ateliers"
                        }, 
                        {
                            img: "http://res.cloudinary.com/agirar/image/upload/v1519034961/fuf24ch1h9oj5zthqatr.jpg", 
                            title: "Atelier de Artes Plástica e de Lavores", 
                            date: "SEG", 
                            time: "14:30 - 16:30", 
                            desc: "Promover através da pintura, colagens e cerâmica um espaço onde possam utilizar as atividades como uma forma de expressão não-verbal. Criar oportunidade para conhecer novas formas de lazer, promovendo a partilha de conhecimentos entre si, através da realização de trabalhos manuais, artes decorativas, bijuterias"
                        }, 
                        {
                            img: "http://res.cloudinary.com/agirar/image/upload/v1513460991/ateliers/at1.jpg", 
                            title: "Atelier de Informática", 
                            date: "QUA", 
                            time: "11:00 - 13h00", 
                            desc: "Espaço lúdico, mas também de aprendizagem, que permite explorar e desenvolver competências na área da informática"
                        }, 
                        {
                            img: "http://res.cloudinary.com/agirar/image/upload/v1519035015/dvq9csutvubruocok2s0.jpg", 
                            title: "Clube Social", 
                            date: "TODOS OS DIAS", 
                            time: " A definir", 
                            desc: "Espaço lúdico, de encontro, onde se promove uma melhor forma de gerir os tempos livres e de lazer organizando visitas na comunidade para melhor conhecer as estruturas culturais e recreativas existentes na área metropolitana do Porto, nomeadamente museus, jardins, teatros, etc."
                        } ,
                        {
                            img: "http://res.cloudinary.com/agirar/image/upload/v1519035112/enngeyfuevfcszc1wm0f.jpg", 
                            title: "Atelier de Movimento e Expressão Corporal", 
                            date: "QUI", 
                            time: "14h30 - 15h45", 
                            desc: "Espaço criado para valorizar a comunicação não verbal, permitindo observar o modo como cada pessoa se relaciona com o seu corpo, com o seu espaço e com os restantes elementos do grupo. Processo criativo onde se trabalha com o corpo e com a sua linguagem própria"
                        }, 
                        {
                            img: "http://res.cloudinary.com/agirar/image/upload/v1519035133/he9kdivbrlwphyzoi942.jpg", 
                            title: "Atelier de Relaxamento", 
                            date: "QUI", 
                            time: "16h00 - 17h00", 
                            desc: "Através de algumas técnicas específicas trabalhar a diminuição das tensões corporais e a auto-consciencialização das várias partes do corpo, permitindo lidar com algumas tensões, angústias e receios, assim como, aprender a controlar o corpo e as emoções em determinadas situações concretas"
                        }, 
                        {
                            img: "http://res.cloudinary.com/agirar/image/upload/v1513460989/ateliers/at5.jpg", 
                            title: "Atelier de Artesanato", 
                            date: "QUA", 
                            time: "14:30 - 16.30", 
                            desc: "É dirigido aos familiares/associados e pretende-se através da realização de trabalhos manuais artesanais promover o convívio entre os mesmos diminuindo o isolamento social de muitas famílias quando têm de lidar com um familiar doente"
                        } ,
                        {
                            img: "http://res.cloudinary.com/agirar/image/upload/v1519035401/xq5ddyp1efywaci30yjh.jpg", 
                            title: "Atelier de Estimulação Cognitiva", 
                            date: "TER", 
                            time: "14h30 - 16h00", 
                            desc: "As sessões de Estimulação Cognitiva pretendem preservar ou melhorar o desempenho ou as funções cognitivas das pessoas, como sejam a memória, a atenção, o raciocínio, a capacidade de resolução de problemas, entre outras."
                        } ,
                        {
                            img: "http://res.cloudinary.com/agirar/image/upload/v1519035676/yvfoltyfh6xv2138i1a6.jpg", 
                            title: "Grupo Terapêutico", 
                            date: "TER", 
                            time: "16h15 - 17h15", 
                            desc: "O grupo terapêutico é um sistema de ajuda mútua que assenta em princípios de respeito, responsabilidade partilhada e compreensão da situação do outro. Baseia-se na crença de que alguém que enfrentou e superou alguma adversidade pode oferecer apoio, encorajamento, e orientação, a outros que enfrentam situações similares"
                        } ,
                        {
                            img: "http://res.cloudinary.com/agirar/image/upload/v1519035824/s8qtqz6arbggapvxw83h.jpg", 
                            title: "Piscina", 
                            date: "QUA", 
                            time: "10h - 11h30", 
                            desc: "A piscina ajuda a diminuir problemas de postura e transmite sensação de bem-estar, melhorando a imagem corporal dos indivíduos e aumentando a autoestima."
                        }
                    ])
            }, 3000);
        })))
    }

    submitAssociateData = data =>{
        return(new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    {
                        error: false
                    }
                   )
            }, 3000);
        })))
    }
}