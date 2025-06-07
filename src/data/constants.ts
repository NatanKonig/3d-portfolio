// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  HTML = "html",
  CSS = "css",
  PYTHON = "python",
  DJANGO = "django",
  JAVA = "java",
  SPRINGBOOT = "spring boot",
  POSTGRES = "postgresql",
  MYSQL = "mysql",
  POSTMAN = "postman",
  GIT = "git",
  GITHUB = "github",
  API = "api",
  VSCODE = "vscode",
  JWT = "jwt",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GITHUBACTIONS = "githubactions"
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Linguagem base para desenvolvimento web frontend.",
    color: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 2,
    name: "html",
    label: "HTML",
    shortDescription: "Linguagem de marcação usada para estruturar páginas web.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 3,
    name: "css",
    label: "CSS",
    shortDescription: "Folhas de estilo para design e layout de páginas web.",
    color: "#1572B6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 4,
    name: "python",
    label: "Python",
    shortDescription: "Linguagem versátil usada para automações e backend.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DJANGO]: {
    id: 5,
    name: "django",
    label: "Django",
    shortDescription: "Framework backend em Python para desenvolvimento web rápido.",
    color: "#092E20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 6,
    name: "java",
    label: "Java",
    shortDescription: "Linguagem robusta e orientada a objetos, amplamente usada em backend.",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SPRINGBOOT]: {
    id: 7,
    name: "springboot",
    label: "Spring Boot",
    shortDescription: "Framework Java para criação de APIs rápidas e produtivas.",
    color: "#6DB33F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 8,
    name: "postgresql",
    label: "PostgreSQL",
    shortDescription: "Banco de dados relacional avançado e open-source.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 9,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Sistema de gerenciamento de banco de dados relacional popular.",
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.POSTMAN]: {
    id: 10,
    name: "postman",
    label: "Postman",
    shortDescription: "Ferramenta para testar e documentar APIs REST.",
    color: "#FF6C37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  [SkillNames.GIT]: {
    id: 11,
    name: "git",
    label: "Git",
    shortDescription: "Sistema de controle de versão distribuído.",
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 12,
    name: "github",
    label: "GitHub",
    shortDescription: "Plataforma para hospedagem e colaboração em repositórios Git.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.API]: {
    id: 13,
    name: "api",
    label: "REST API",
    shortDescription: "Interface para comunicação entre sistemas via HTTP.",
    color: "#4A90E2",
    icon: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png", // ou outro SVG se preferir
  },
  [SkillNames.VSCODE]: {
    id: 14,
    name: "vscode",
    label: "VS Code",
    shortDescription: "Editor de código leve, rápido e extensível.",
    color: "#007ACC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.JWT]: {
    id: 15,
    name: "jwt",
    label: "JWT",
    shortDescription: "Método seguro para autenticação baseada em tokens.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg", // usar ícone customizado se quiser
  },
  [SkillNames.LINUX]: {
    id: 16,
    name: "linux",
    label: "Linux",
    shortDescription: "Sistema operacional open-source amplamente usado em servidores.",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 17,
    name: "docker",
    label: "Docker",
    shortDescription: "Plataforma para criação e gerenciamento de contêineres.",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 18,
    name: "nginx",
    label: "Nginx",
    shortDescription: "Servidor web e proxy reverso de alto desempenho.",
    color: "#009639",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 19,
    name: "aws",
    label: "AWS",
    shortDescription: "Plataforma de serviços de computação em nuvem da Amazon.",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  [SkillNames.GITHUBACTIONS]: {
    id: 20,
    name: "githubactions",
    label: "GitHub Actions",
    shortDescription: "Ferramenta de CI/CD integrada ao GitHub.",
    color: "#2088FF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", // ou usar ícone custom
  },
};


export const themeDisclaimers = {
  light: [
    "Aviso: O modo claro emite um zilhão de lúmens de pura radiação!",
    "Cuidado: Modo claro à frente! Por favor, não tente isso em casa.",
    "Apenas profissionais treinados conseguem lidar com tanto brilho. Use óculos escuros!",
    "Prepare-se! O modo claro vai deixar tudo mais brilhante que o seu futuro.",
    "Trocando para o modo claro... Tem certeza de que seus olhos estão prontos pra isso?",
  ],
  dark: [
    "Modo claro? Achei que você tinha enlouquecido... mas bem-vindo de volta ao lado sombrio!",
    "Alternando para o modo escuro... Como foi a vida do lado brilhante?",
    "Modo escuro ativado! Obrigado do fundo do meu coração — e dos meus olhos também.",
    "Bem-vindo de volta às sombras. Como foi viver naquela claridade toda?",
    "Modo escuro ligado! Finalmente alguém que entende o que é sofisticação de verdade.",
  ],
};

