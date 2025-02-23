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
                Ao longo desse caminho, percebi que <span className="light">a tecnologia era essencial para transformar processos logísticos</span>, e esse interesse me levou a uma <span className="light">transição para o setor de tecnologia e projetos</span>. Atualmente, atuo como <span className="light">Analista de Projetos</span> em <a href="https://www.sumaconnect.com/" target="_blank" rel="noopener noreferrer">uma startup focada na redução de custos de frotas</a>, onde minhas principais atuações incluem:
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
                followup: 'logistica',
                projecttype: 'Melhoria',
                summary: 'Otimização da transferência de cargas entre filiais (turno noturno)',
                description: 'Resolvi problemas críticos de comunicação entre administrativo e pátio, melhorando o fluxo de informações e a produtividade',
                duration: '6 meses',
                year: 2021,
            },
            {
                id: 2,
                category: 'real',
                followup: 'logistica',
                projecttype: 'Melhoria',
                summary: 'Implantação da Central de Frota',
                description: 'Centralização da estratégia de aproveitamento de viagens em um único ponto focal na matriz',
                duration: '8 meses',
                year: 2022,
            },
            {
                id: 3,
                category: 'real',
                followup: 'logistica',
                projecttype: 'Implantação',
                summary: 'Expansão para uma nova filial (transporte marítimo)',
                description: 'Utilizei minha expertise para estruturar um atendimento ao cliente eficiente e garantir a excelência operacional',
                duration: '10 meses',
                year: 2023,
            },
            {
                id: 4,
                category: 'real',
                followup: 'customer service',
                projecttype: 'Implantação',
                summary: 'Implantação do setor de Customer Service',
                description: 'Estruturando o atendimento ao cliente para melhorar a experiência do usuário e a eficiência nas interações',
                duration: '8 meses',
                year: 2023,
            },
            {
                id: 5,
                category: 'real',
                followup: 'tecnologia',
                projecttype: 'Melhoria',
                summary: 'Integração das filas de atendimento com a equipe de TI via Jira',
                description: 'Facilitando a comunicação entre suporte e desenvolvimento para acelerar a resolução de demandas técnicas',
                duration: '11 meses',
                year: 2024,
            },
            {
                id: 6,
                category: 'real',
                followup: 'tecnologia',
                projecttype: 'Evolução de produto',
                summary: 'Desenvolvimento contínuo do sistema web e mobile',
                description: 'Acompanhando e otimizando novas funcionalidades para aprimorar a plataforma',
                duration: '11 meses',
                year: 2024,
            },
            {
                id: 7,
                category: 'acadêmico',
                followup: 'tecnologia',
                projecttype: 'Desenvolvimento de software',
                summary: 'Front-end web de um ecommerce de hortifruti',
                description: 'Esta foi minha primeira experiencia de construir um projeto apenas de front-end utilizando HTML, CSS e JavaScript puro',
                duration: '4 meses',
                year: 2023,
                linkedinUrl:'https://www.linkedin.com/posts/guilherme-duarte-5ab2b9201_frontend-inicianteemprogramacao-desenvolvimentodesistemas-activity-7143933236530917377-wNs1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADN64xMBT1R0Gpwluiml8SMxkSFDLo-Vx60',
                githubUrl: 'https://github.com/GuilhermeDuarte95/E-commerce---Hortifruti.git',// Link dinâmico do GitHub
                modalUrl:'https://guilhermeduarte95.github.io/E-commerce---Hortifruti/', // Link dinâmico do Modal
            },
            {
                id: 8,
                category: 'acadêmico',
                followup: 'tecnologia',
                summary: 'Análise de dados',
                description: 'Um dos meus primeiros Dashboards utilizando os dados disponibilizados pela Microsoft para efeitos academicos',
                summary: 'Dashboard de Vendas com Power BI',
                description: 'Um dos meus primeiros Dashboards utilizando os dados disponibilizados pela Microsoft para efeitos academicos',
                duration: '1 mês',
                year: 2023,
                linkedinUrl:'https://www.linkedin.com/posts/guilherme-duarte-5ab2b9201_dados-powerbi-dashboard-activity-7141728666916470784-hD5H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADN64xMBT1R0Gpwluiml8SMxkSFDLo-Vx60',
                youTubeUrl: 'https://youtu.be/YuVsT3oD7HA',
            },
            {
                id: 9,
                category: 'acadêmico',
                followup: 'tecnologia',
                projecttype: 'Desenvolvimento de software',
                summary: 'Front-end mobile de gestão de gastos para motoristas de aplicativo - Na faixa',
                description: 'Atuei principalmente no planejamento do projeto, utilizando boas práticas de engenharia de software e gestão de projetos. Na execução fui responsavel em criar o front-end mobile com React Native, testar os endpoints da API no Postman e construir a integração adequada com o backend',
                duration: '11 meses',
                year: 2024,
                linkedinUrl:'https://www.linkedin.com/posts/guilherme-duarte-5ab2b9201_desenvolvimentodesistemas-desenvolvedormobile-activity-7279117167030095872-z5kQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADN64xMBT1R0Gpwluiml8SMxkSFDLo-Vx60',
                youTubeUrl: 'https://youtu.be/OLt5ZF7gOPc?si=QEwfLXTF8C1_10fh',
            },
        ]
    },

    contactSection: {
        title: 'Contato',
        description: (
            <>
                🚀 <span className="light">Curtiu meu trabalho?</span> Vamos transformar desafios em oportunidades. Me mande uma mensagem e vamos acelerar o seu próximo projeto!
            </>
        ),
        buttonTextContato: 'Entre em contato',
    },

    footer: {
        textRights: '© Todos os direito reservados',
        textDesigned: 'Projetado e construído por Guilherme Duarte',
    },

};

export default content;