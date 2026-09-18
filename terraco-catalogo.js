(function () {
const CORES_BOX = ['Dourado', 'Branco', 'Preto', 'Cromado', 'Rose gold'];

const PRODUTOS = [
  {
    cat: 'int', tag: 'Integração', foto: 'assets-min/catalogo/c1-p10.jpg',
    nome: 'Envidraçamento de varanda',
    resumo: 'Integra os ambientes e permite abertura praticamente total do vão.',
    descricao: 'O sistema de envidraçamento de varanda permite a integração de ambientes, oferecendo a possibilidade de abertura praticamente total do vão. Elegância e funcionalidade são as principais características dessa solução, que valoriza o imóvel e proporciona mais conforto e aproveitamento do espaço.',
    specs: [
      { k: 'Tipo de sistema', v: 'Retrátil deslizante, sem perfil vertical' },
      { k: 'Vidro', v: 'Temperado 8 mm (10 mm em vãos altos)' },
      { k: 'Perfis', v: 'Alumínio extrudado, trilho superior e inferior' },
      { k: 'Abertura útil', v: 'Praticamente todo o vão' },
      { k: 'Vedação', v: 'Borracha EPDM + escova antipoeira' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Perfil branco', 'Perfil preto', 'Perfil bronze', 'Perfil natural', 'Vidro incolor', 'Vidro verde', 'Vidro fumê'],
    aplicacoes: ['Varandas de apartamento', 'Sacadas com vista', 'Varanda gourmet', 'Entrega de empreendimentos com varandas prontas'],
    cuidados: ['Limpeza com pano macio e produto neutro', 'Manter trilhos livres de areia e poeira', 'Revisão preventiva anual das roldanas']
  },
  {
    cat: 'int', tag: 'Integração', foto: 'assets-min/catalogo/c2-p3.jpg',
    nome: 'Wall Glass',
    resumo: 'Painéis de vidro que deslizam sobre trilhos embutidos ou sobrepostos.',
    descricao: 'O Wall Glass é um sistema de painéis de vidro que deslizam suavemente sobre trilhos, que podem ser embutidos ou sobrepostos. A versatilidade nas opções de movimentação das folhas de vidro proporciona funcionalidade e conforto, tornando este sistema um diferencial elegante para qualquer ambiente.',
    specs: [
      { k: 'Tipo de sistema', v: 'Painéis deslizantes sobre trilho' },
      { k: 'Trilho', v: 'Embutido no piso/forro ou sobreposto' },
      { k: 'Vidro', v: 'Temperado 8 mm / 10 mm' },
      { k: 'Movimentação', v: 'Configurável conforme o projeto' },
      { k: 'Vedação', v: 'Escova + borracha entre folhas' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Perfil branco', 'Perfil preto', 'Perfil bronze', 'Perfil natural', 'Vidro incolor', 'Vidro fumê'],
    aplicacoes: ['Salas integradas à varanda', 'Ambientes de alto padrão', 'Áreas de lazer', 'Espaços corporativos'],
    cuidados: ['Manter o trilho embutido livre de detritos', 'Limpeza com produto neutro', 'Lubrificação anual das roldanas']
  },
  {
    cat: 'int', tag: 'Integração', foto: 'assets-min/catalogo/c2-p5.jpg',
    nome: 'Division',
    resumo: 'Divisórias com sustentação apenas superior — sem trilho no piso.',
    descricao: 'O Division é um sistema de divisórias que possibilita a abertura praticamente total do vão, promovendo a integração harmoniosa dos ambientes. Com sustentação exclusiva na parte superior, elimina a necessidade de trilhos inferiores, facilitando a instalação e adaptando-se facilmente ao seu projeto, sem a necessidade de alterações estruturais.',
    specs: [
      { k: 'Tipo de sistema', v: 'Divisória suspensa, sem trilho inferior' },
      { k: 'Sustentação', v: 'Exclusivamente superior' },
      { k: 'Vidro', v: 'Temperado 8 mm / 10 mm' },
      { k: 'Abertura útil', v: 'Praticamente todo o vão' },
      { k: 'Obra', v: 'Sem alterações estruturais' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Perfil branco', 'Perfil preto', 'Perfil natural', 'Vidro incolor', 'Vidro jateado', 'Faixa de privacidade'],
    aplicacoes: ['Escritórios e salas de reunião', 'Clínicas e consultórios', 'Divisão de ambientes residenciais', 'Reformas sem quebra-quebra'],
    cuidados: ['Não pendurar peso nas folhas', 'Limpeza com produto neutro nas duas faces', 'Reaperto anual da fixação superior']
  },
  {
    cat: 'int', tag: 'Integração', foto: 'assets-min/catalogo/c2-p9.jpg',
    nome: 'Sistema Stanley',
    resumo: 'Todas as folhas móveis, abrindo cerca de 90% do vão.',
    descricao: 'O Sistema Stanley é uma excelente opção para divisórias de ambientes, permitindo a abertura de aproximadamente 90% do vão. Com todas as folhas móveis e deslizantes ao longo dos trilhos, oferece maior mobilidade, flexibilidade de layout e melhor aproveitamento do espaço.',
    specs: [
      { k: 'Tipo de sistema', v: 'Divisória deslizante, todas as folhas móveis' },
      { k: 'Abertura útil', v: 'Aproximadamente 90% do vão' },
      { k: 'Vidro', v: 'Temperado 8 mm / 10 mm' },
      { k: 'Trilhos', v: 'Superior e inferior em alumínio' },
      { k: 'Layout', v: 'Folhas reposicionáveis conforme o uso' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Perfil branco', 'Perfil preto', 'Perfil bronze', 'Vidro incolor', 'Vidro jateado', 'Vidro fumê'],
    aplicacoes: ['Divisão de salas e varandas', 'Ambientes que mudam de layout', 'Espaços comerciais', 'Áreas de eventos'],
    cuidados: ['Manter trilhos limpos', 'Deslizar as folhas sem forçar', 'Revisão anual de roldanas e guias']
  },
  {
    cat: 'int', tag: 'Grandes vãos', foto: 'assets-min/catalogo/c2-p1.jpg',
    nome: 'Roll Door',
    resumo: 'Esquadria de design clean com alta vedação contra a chuva.',
    descricao: 'O Roll Door é um sistema de esquadria resistente com design clean, que proporciona alta performance de vedação contra a chuva, garantindo proteção e conforto. Perfeito para o fechamento de grandes vãos, alia funcionalidade e elegância em uma solução prática e moderna.',
    specs: [
      { k: 'Tipo de sistema', v: 'Esquadria de enrolar para grandes vãos' },
      { k: 'Vedação', v: 'Alta performance contra chuva e vento' },
      { k: 'Estrutura', v: 'Alumínio de alta resistência' },
      { k: 'Indicação', v: 'Fechamento de grandes vãos' },
      { k: 'Design', v: 'Perfil clean, recolhimento discreto' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Perfil branco', 'Perfil preto', 'Perfil bronze', 'Perfil natural'],
    aplicacoes: ['Varandas expostas a chuva de vento', 'Áreas gourmet e churrasqueiras', 'Garagens e vãos amplos', 'Fachadas comerciais'],
    cuidados: ['Manter as guias limpas', 'Acionar o sistema sem forçar', 'Revisão preventiva anual']
  },
  {
    cat: 'int', tag: 'Corporativo', foto: 'assets-min/catalogo/c1-p14.jpg',
    nome: 'Painel de vidro',
    resumo: 'Painéis com estrutura em alumínio conectando ambientes com elegância.',
    descricao: 'Os painéis de vidro com estrutura em alumínio proporcionam a conexão harmoniosa entre ambientes, unindo elegância, versatilidade e durabilidade. Uma solução atemporal e sofisticada, ideal para valorizar espaços corporativos com design moderno e funcional.',
    specs: [
      { k: 'Tipo de sistema', v: 'Painel fixo ou modulado' },
      { k: 'Estrutura', v: 'Perfil de alumínio' },
      { k: 'Vidro', v: 'Temperado 8 mm / 10 mm' },
      { k: 'Configuração', v: 'Piso-teto ou parcial' },
      { k: 'Privacidade', v: 'Película ou faixa jateada opcional' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Perfil branco', 'Perfil preto', 'Perfil natural', 'Vidro incolor', 'Vidro jateado', 'Vidro refletivo'],
    aplicacoes: ['Escritórios e coworkings', 'Clínicas e recepções', 'Lojas', 'Divisão de ambientes residenciais'],
    cuidados: ['Limpeza com produto neutro', 'Cuidado com abrasivos sobre película', 'Inspeção anual dos perfis']
  },
  {
    cat: 'esq', tag: 'Esquadrias', foto: 'assets-min/catalogo/c1-p12.jpg',
    nome: 'Esquadrias de alumínio',
    resumo: 'Alta resistência, durabilidade e acabamento premium em portas e janelas.',
    descricao: 'Combinando alta resistência, durabilidade e um acabamento premium, as esquadrias de alumínio são ideais para projetos que priorizam funcionalidade, design moderno e sofisticação. Uma escolha versátil e elegante para valorizar todos os ambientes.',
    specs: [
      { k: 'Tipagem', v: 'Correr, abrir, pivotante, maxim-ar' },
      { k: 'Estrutura', v: 'Alumínio de alta resistência' },
      { k: 'Vidro', v: 'Temperado 8 mm / 10 mm; laminado sob pedido' },
      { k: 'Ferragens', v: 'Dimensionadas para o peso da folha' },
      { k: 'Vedação', v: 'Borracha perimetral + soleira' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Perfil branco', 'Perfil preto', 'Perfil bronze', 'Perfil natural', 'Vidro incolor', 'Vidro fumê'],
    aplicacoes: ['Portas de entrada social e serviço', 'Janelas de quarto e sala', 'Obras novas e reformas', 'Fachadas comerciais'],
    cuidados: ['Limpar trilhos e drenos das janelas de correr', 'Evitar bater as folhas', 'Reaperto de ferragens a cada 12 meses']
  },
  {
    cat: 'esq', tag: 'Segurança', foto: 'assets-min/catalogo/c2-p7.jpg',
    nome: 'Guarda-corpo',
    resumo: 'Torres de inox: segurança, durabilidade e design contemporâneo.',
    descricao: 'O guarda-corpo com torres de inox é uma opção que combina segurança, durabilidade e design contemporâneo, agregando valor e sofisticação ao seu projeto.',
    specs: [
      { k: 'Vidro', v: 'Laminado temperado 8+8 mm ou 10+10 mm' },
      { k: 'Fixação', v: 'Torres de inox (ou sapata de alumínio)' },
      { k: 'Altura', v: 'Conforme norma aplicável' },
      { k: 'Corrimão', v: 'Opcional, alumínio ou inox' },
      { k: 'Ambiente externo', v: 'Componentes resistentes à maresia' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Torres em inox', 'Sapata branca', 'Sapata preta', 'Corrimão inox', 'Vidro incolor', 'Vidro fumê'],
    aplicacoes: ['Sacadas e mezaninos', 'Escadas internas', 'Bordas de piscina e deck', 'Áreas comerciais'],
    cuidados: ['Enxágue frequente em áreas de maresia', 'Limpeza do inox com produto específico', 'Inspeção visual anual das fixações']
  },
  {
    cat: 'box', tag: 'Box de banheiro', foto: 'assets-min/catalogo/c2-p13.jpg',
    nome: 'Box Elegance',
    resumo: 'Roldanas aparentes como diferencial estético — sofisticação no banheiro.',
    descricao: 'O Box Elegance é a escolha ideal para complementar seu projeto. Suas roldanas aparentes são o grande diferencial estético, proporcionando um toque de sofisticação e modernidade ao ambiente do banheiro.',
    specs: [
      { k: 'Tipo', v: 'Box de correr com roldanas aparentes' },
      { k: 'Vidro', v: 'Temperado 8 mm' },
      { k: 'Ferragens', v: 'Roldanas aparentes, acabamento em cor' },
      { k: 'Indicação', v: 'Projetos que valorizam o detalhe metálico' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: CORES_BOX,
    aplicacoes: ['Banheiros de suíte', 'Lavabos e banheiros sociais', 'Reformas de alto padrão', 'Projetos assinados por arquitetos'],
    cuidados: ['Secar o vidro após o banho', 'Limpeza com produto neutro, sem abrasivos', 'Manter o trilho livre de resíduos de sabão']
  },
  {
    cat: 'box', tag: 'Box de banheiro', foto: 'assets-min/catalogo/c2-p14.jpg',
    nome: 'Box Flex',
    resumo: 'Folhas articuladas que abrem praticamente 100% do vão.',
    descricao: 'O Box Flex é a opção ideal para vãos pequenos. Com folhas articuladas, permite a abertura de praticamente 100% do vão, otimizando o espaço disponível.',
    specs: [
      { k: 'Tipo', v: 'Box articulado (folhas dobráveis)' },
      { k: 'Abertura útil', v: 'Praticamente 100% do vão' },
      { k: 'Vidro', v: 'Temperado 8 mm' },
      { k: 'Indicação', v: 'Vãos pequenos e banheiros compactos' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: CORES_BOX,
    aplicacoes: ['Banheiros compactos', 'Lavabos', 'Apartamentos com pouca área', 'Reformas com espaço limitado'],
    cuidados: ['Dobrar as folhas sem forçar as articulações', 'Secar o vidro após o banho', 'Limpeza com produto neutro']
  },
  {
    cat: 'box', tag: 'Box de banheiro', foto: 'assets-min/catalogo/c2-p15.jpg',
    nome: 'Box convencional (de correr)',
    resumo: 'Modelo reto ou boleado, com uma folha fixa e uma móvel.',
    descricao: 'O Box Convencional oferece as opções de modelo reto ou boleado, com uma folha fixa e uma móvel que desliza sobre o trilho. A escolha pode ser feita conforme o projeto de ambientação.',
    specs: [
      { k: 'Tipo', v: 'Box de correr' },
      { k: 'Modelos', v: 'Reto ou boleado' },
      { k: 'Configuração', v: 'Uma folha fixa + uma móvel' },
      { k: 'Vidro', v: 'Temperado 8 mm' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: CORES_BOX,
    aplicacoes: ['Banheiros residenciais', 'Empreendimentos e obras em série', 'Reformas rápidas', 'Banheiros de serviço'],
    cuidados: ['Manter o trilho inferior limpo', 'Secar o vidro após o banho', 'Limpeza com produto neutro']
  },
  {
    cat: 'box', tag: 'Box de banheiro', foto: 'assets-min/catalogo/c3-p2.jpg',
    nome: 'Box de abrir',
    resumo: 'Abertura mais ampla para vãos pequenos, com praticidade no dia a dia.',
    descricao: 'O Box de Abrir é uma excelente opção para vãos pequenos, oferecendo a possibilidade de uma abertura mais ampla. Assim, proporciona praticidade e funcionalidade para o seu dia a dia.',
    specs: [
      { k: 'Tipo', v: 'Box de abrir (folha pivotante)' },
      { k: 'Indicação', v: 'Vãos pequenos' },
      { k: 'Abertura', v: 'Mais ampla que a de correr' },
      { k: 'Vidro', v: 'Temperado 8 mm' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Preto', 'Branco', 'Cromado'],
    aplicacoes: ['Lavabos e banheiros pequenos', 'Nichos de chuveiro', 'Reformas pontuais', 'Banheiros de hóspedes'],
    cuidados: ['Não pendurar peso na folha', 'Secar o vidro após o banho', 'Reaperto anual das dobradiças']
  },
  {
    cat: 'comp', tag: 'Complementos', foto: 'assets-min/catalogo/c2-p11.jpg',
    nome: 'Persianas',
    resumo: 'Proteção, privacidade e decoração — manuais ou motorizadas.',
    descricao: 'Funcionais e elegantes, as persianas são a escolha ideal para quem busca proteção, privacidade e um toque de sofisticação na decoração. Com uma ampla variedade de modelos, elas se adaptam a diferentes estilos de ambientes, valorizando o projeto do seu lar.',
    specs: [
      { k: 'Acionamento', v: 'Manual ou motorizado com automação' },
      { k: 'Modelos', v: 'Ampla variedade — definida em projeto' },
      { k: 'Função', v: 'Controle de luz, privacidade e proteção' },
      { k: 'Integração', v: 'Combinável com o envidraçamento' },
      { k: 'Garantia', v: 'Materiais e instalação (ver proposta)' }
    ],
    acabamentos: ['Manual', 'Motorizada', 'Motorizada com automação', 'Tecidos e lâminas sob consulta'],
    aplicacoes: ['Quartos e salas', 'Varandas envidraçadas', 'Escritórios', 'Ambientes com muita incidência solar'],
    cuidados: ['Limpeza a seco ou conforme o tecido', 'Não forçar o acionamento manual', 'Revisão do motor conforme o fabricante']
  },
  {
    cat: 'serv', tag: 'Serviço', foto: 'assets-min/fotos/IMG_0342.jpg',
    nome: 'Manutenção e troca de peças',
    resumo: 'Revisão, regulagem e substituição — inclusive em vidros de terceiros.',
    descricao: 'Serviço de manutenção para qualquer sistema de vidro: regulagem das folhas, lubrificação, troca de roldanas, borrachas, escovas, ferragens e vidros. Atendemos também instalações feitas por outras empresas, com peças compatíveis com o sistema existente.',
    specs: [
      { k: 'Escopo', v: 'Revisão, regulagem, lubrificação e troca de peças' },
      { k: 'Sistemas atendidos', v: 'Terraço e outras marcas' },
      { k: 'Peças', v: 'Roldanas, borrachas, escovas, ferragens, vidros' },
      { k: 'Diagnóstico', v: 'Visita técnica com laudo do sistema' },
      { k: 'Revisão preventiva', v: 'Recomendada a cada 12 meses' },
      { k: 'Cobertura', v: 'Aracaju e região' }
    ],
    acabamentos: ['Peças originais do sistema', 'Peças compatíveis homologadas'],
    aplicacoes: ['Sistemas travando ou desalinhados', 'Ruído e arraste no trilho', 'Infiltração por vedação gasta', 'Vidro trincado ou quebrado'],
    cuidados: ['Evitar forçar folhas travadas', 'Manter trilhos limpos entre as visitas', 'Registrar a data da última revisão']
  }
];

const OBRAS = [
  { tipo: 'Condomínio', nome: 'Mandarim Residence', foto: 'assets-min/catalogo/c1-p7.jpg' },
  { tipo: 'Edifício', nome: 'Garden Tower', foto: 'assets-min/catalogo/c1-p9.jpg' },
  { tipo: 'Edifício', nome: 'Edith Piaff', foto: 'assets-min/catalogo/c1-p8.jpg' },
  { tipo: 'Condomínio', nome: 'Jardim Residence', foto: 'assets-min/catalogo/c1-p5.jpg' },
  { tipo: 'Condomínio', nome: 'Horto da Sementeira', foto: 'assets-min/catalogo/c1-p6.jpg' },
  { tipo: 'Mansão', nome: 'Constâncio Vieira', foto: 'assets-min/catalogo/c1-p3.jpg' },
  { tipo: 'Condomínio', nome: 'Guilhermino Resende', foto: 'assets-min/catalogo/c2-p2.jpg' },
  { tipo: 'Condomínio', nome: 'L’Essence Jardins', foto: 'assets-min/catalogo/c2-p4.jpg' },
  { tipo: 'Residencial', nome: 'Brisas', foto: 'assets-min/catalogo/c2-p6.jpg' },
  { tipo: 'Residencial', nome: 'Damha', foto: 'assets-min/catalogo/c2-p8.jpg' },
  { tipo: 'Residencial', nome: 'Varandas do Garcia', foto: 'assets-min/catalogo/c2-p10.jpg' },
  { tipo: 'Mansão', nome: 'Gentil Barbosa', foto: 'assets-min/catalogo/c2-p12.jpg' },
  { tipo: 'Residencial', nome: 'Infinity Residence', foto: 'assets-min/catalogo/c3-p3.jpg' },
  { tipo: 'Mansão', nome: 'Otávio Martins Penalva', foto: 'assets-min/catalogo/c3-p4.jpg' },
  { tipo: 'Mansão', nome: 'Prime Park', foto: 'assets-min/catalogo/c3-p5.jpg' },
  { tipo: 'Mansão', nome: 'Cartier', foto: 'assets-min/catalogo/c3-p8.jpg' },
  { tipo: 'Corporativo', nome: 'Clínica Horto', foto: 'assets-min/catalogo/c1-p15.jpg' },
  { tipo: 'Residencial', nome: 'Varanda sobre o mangue', foto: 'assets-min/catalogo/c3-p7.jpg' }
];

const FILTROS = [
  { id: 'todos', label: 'Todos' },
  { id: 'int', label: 'Envidraçamento e integração' },
  { id: 'esq', label: 'Esquadrias e segurança' },
  { id: 'box', label: 'Box de banheiro' },
  { id: 'comp', label: 'Complementos' },
  { id: 'serv', label: 'Serviços' }
];

  function slugify(s) {
    return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  var LISTA = PRODUTOS.map(function (p, i) {
    return Object.assign({}, p, { slug: slugify(p.nome), codigo: String(i + 1).padStart(2, '0') });
  });

  window.TERRACO_CATALOGO = { PRODUTOS: LISTA, OBRAS: OBRAS, FILTROS: FILTROS, slugify: slugify };
})();
