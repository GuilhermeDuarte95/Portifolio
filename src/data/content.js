const content = {
    heroSection: {
        initial: 'Olá, sou',
        title: 'GUILHERME DUARTE',
        subtitle: 'Especialista de projetos de TI para logística',
        text: 'Da estratégia à execução, transformo dados e tecnologia em soluções eficientes para operações logísticas. <br />Vamos acelerar o seu próximo projeto?',
        catchphrase: '"Liderança é o desejo apaixonado de fazer a diferença". (John Maxwell)',
        buttonTextCv: 'Baixar CV',
        buttonTextLinkedin: 'Conectar no Linkedin',
        buttonTextContato: 'Entre em contato',
    },

    aboutSection: {
        title: 'Sobre mim',
        description: (
            <>
                Iniciei minha jornada profissional na <span className="light">logística</span>, começando no <span className="light">chão de fábrica</span> com controle de inventário e movimentação de containers. Com o tempo, evoluí para <span className="light">atendimento de transporte rodoviário</span>, passando por diversos modais como <span className="light">DI</span>, <span className="light">DTA</span>, <span className="light">exportação</span> e <span className="light">cabotagem</span>. Esse contato direto com as operações me permitiu desenvolver tanto a visão <span className="light">administrativa</span> quanto a <span className="light">operacional</span>, tornando-me um ponto focal para melhorias e transições entre turnos.
                Com um olhar sempre voltado para eficiência e inovação, participei de <span className="light">projetos estratégicos</span> dentro de <a href="https://www.tsacargo.com.br/" target="_blank" rel="noopener noreferrer">uma transportadora de médio para grande porte</a>, como:
                <ul>
                    <li>📦 <span className="light">Otimização da transferência de cargas entre filiais</span>, <span className="dark">melhorando a comunicação entre áreas administrativas e operacionais.</span></li>
                    <li>🚚 <span className="light">Implantação da central de frota</span>, <span className="dark">permitindo melhor planejamento e aproveitamento de viagens.</span></li>
                    <li>🌊 <span className="light">Estruturação do transporte marítimo</span> <span className="dark">em uma nova filial, garantindo um atendimento ao cliente mais eficiente.</span></li>
                </ul><br/>
                Ao longo desse caminho, percebi que <span className="light">a tecnologia era essencial para transformar processos logísticos</span>, e esse interesse me levou a uma <span className="light">transição para o setor de tecnologia e projetos</span>. Atualmente, atuo como <span className="light">Analista de Projetos</span> em <a href="https://www.sumaconnect.com/" target="_blank" rel="noopener noreferrer">uma startup focada na redução de custos de frotas</a>, onde desempenho papéis como:
                <ul>
                    <li>🛠 <span className="light">Implantação do setor de Customer Service</span>, <span className="dark">aprimorando o atendimento e suporte.</span></li>
                    <li>🔗 <span className="light">Integração de atendimento e desenvolvimento via Jira</span>, <span className="dark">conectando equipes de suporte e tecnologia.</span></li>
                    <li>💻 <span className="light">Desenvolvimento contínuo do sistema web e mobile</span>, <span className="dark">garantindo melhorias constantes e alinhadas às necessidades dos clientes.</span></li>
                </ul><br/>
                Minha experiência me permitiu unir <span className="light">logística</span>, <span className="light">gestão de projetos</span> e <span className="light">tecnologia</span>, criando soluções mais inteligentes e eficientes.
            
            </>
        )
    },

    skillsSection: {
        title: 'Habiidades',
        skills: [
            'Gestão de Projetos (Scrum, Kanban, PMBOK)',
            'Customer Service & Experiência do Usuário',
            'Data Analysis & Insights Estratégicos',
            'Inovação & Eficiência em Supply Chain',
        ],
    },

    projectsSection: {
        title: 'Projetos que geraram impacto',
        subtitle1: 'Projetos reais',
        subtitle2: 'Projetos acadêmicos',
        project: [
            {
                id: 1,
                category: 'real',
                tipo: 'logistica',
                summary: 'Otimização da transferência de cargas entre filiais (turno noturno)',
                description: 'Resolvi problemas críticos de comunicação entre administrativo e pátio, melhorando o fluxo de informações e a produtividade',
                duration: '6 meses',
                year: 2021,
            },
            {
                id: 2,
                category: 'real',
                tipo: 'logistica',
                summary: 'Implantação da Central de Frota',
                description: 'Centralização da estratégia de aproveitamento de viagens em um único ponto focal na matriz',
                duration: '8 meses',
                year: 2022,
            },
            {
                id: 3,
                category: 'real',
                tipo: 'logistica',
                summary: 'Expansão para uma nova filial (transporte marítimo)',
                description: 'Utilizei minha expertise para estruturar um atendimento ao cliente eficiente e garantir a excelência operacional',
                duration: '10 meses',
                year: 2023,
            },
            {
                id: 4,
                category: 'real',
                tipo: 'customer service',
                summary: 'Implantação do setor de Customer Service',
                description: 'Estruturando o atendimento ao cliente para melhorar a experiência do usuário e a eficiência nas interações',
                duration: '8 meses',
                year: 2023,
            },
            {
                id: 5,
                category: 'real',
                tipo: 'tecnologia',
                summary: 'Integração das filas de atendimento com a equipe de TI via Jira',
                description: 'Facilitando a comunicação entre suporte e desenvolvimento para acelerar a resolução de demandas técnicas',
                duration: '11 meses',
                year: 2024,
            },
            {
                id: 6,
                category: 'real',
                tipo: 'tecnologia',
                summary: 'Desenvolvimento contínuo do sistema web e mobile',
                description: 'Acompanhando e otimizando novas funcionalidades para aprimorar a plataforma da SUMA Connect',
                duration: '11 meses',
                year: 2024,
            },
            {
                id: 7,
                category: 'acadêmico',
                tipo: 'tecnologia',
                summary: 'Front-end web de um ecommerce de hortifruti',
                description: 'Esta foi minha primeira experiencia de construir um projeto apenas de front-end utilizando HTML, CSS e JavaScript puro',
                duration: '4 meses',
                year: 2023,
            },
            {
                id: 8,
                category: 'acadêmico',
                tipo: 'tecnologia',
                summary: 'Dashboard de Vendas com Power BI',
                description: 'Um dos meus primeiros Dashboards utilizando os dados disponibilizados pela Microsoft para efeitos academicos',
                duration: '1 mês',
                year: 2023,
            },
            {
                id: 9,
                category: 'acadêmico',
                tipo: 'tecnologia',
                summary: 'Front-end mobile de gestão de gastos para motoristas de aplicativo - Na faixa',
                description: 'Atuei principalmente no planejamento do projeto, utilizando boas práticas de engenharia de software e gestão de projetos. Na execução fui responsavel em criar o front-end mobile com React Native, testar os endpoints da API nos Postman e construir a integração adequado com o backend',
                duration: '11 meses',
                year: 2024,
            },
        ]
    },

    contactSection: {

    },

};

export default content;