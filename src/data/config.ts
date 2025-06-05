const config = {
  title: "Natan Konig | Backend Developer & DevOps",
  description: {
    long: "Explore o portfólio de Natan Konig, desenvolvedor backend apaixonado por construir APIs escaláveis, soluções em Java e Python, e integrar práticas de DevOps com CI/CD e Docker. Descubra projetos como GaropaBus e sua atuação em ambientes de pesquisa e educação como o Eusably. Vamos desenvolver algo extraordinário juntos!",
    short:
      "Portfólio de Natan Konig, desenvolvedor backend com foco em APIs, CI/CD e soluções escaláveis com Java, Python e Docker.",
  },
  keywords: [
    "Natan Konig",
    "desenvolvedor backend",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "APIs RESTful",
    "CI/CD",
    "Docker",
    "DevOps",
    "PostgreSQL",
    "MySQL",
    "Eusably",
    "GaropaBus",
    "Open Source",
    "Cloud",
    "Oracle Cloud",
    "GitHub Actions",
  ],
  author: "Natan Konig",
  email: "natan.camargo8@gmail.com",
  site: "https://natan.is-a.dev",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    // twitter: "",
    linkedin: "https://www.linkedin.com/in/natan-konig/",
    // instagram: "",
    // facebook: "",
    github: "https://github.com/NatanKonig",
  },
};
export { config };
