import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di';
import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, title: "HTML (Linguagem de Marcação de HiperTexto)", text: "É o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web." },
    { id: "css", name: "CSS#", icon: <DiCss3 />, title: "CSS é chamado de linguagem Cascading Style Sheet", text: "É usado para estilizar elementos escritos em uma linguagem de marcação como HTML." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, title: "O JavaScript é uma linguagem de programação de alto nível", text: "É uma das principais tecnologias da web, permitindo a criação de páginas interativas com elementos dinâmicos e boa performance." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, title: "Node.JS é um ambiente de execução JavaScript", text: "Node.JS pode ser utilizado nas APIS Rest, web scrapping, chatbots, IoT, web servers, aplicações Desktop" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, title: "Banco de Dados relacional (Relational Database Management Systems) ", text: " É um software de código aberto ou serviço usado na criação e gerenciamento de bancos de dados" },
    { id: "react", name: "React", icon: <DiReact />, title: "O React é uma biblioteca que faz o uso da linguagem de programação JavaScript", text:" Além do alto desempenho, o React é flexível e permite que todos os códigos sejam separados e utilizados como componentes reutilizáveis." },
];

const TechnologiesContainer = () => {
    return (
        
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.title}</h3>
                        <p>{tech.text}</p>
                    </div>
                </div>
                ))}            
            </div>
            
        </section>
    )
}

export default TechnologiesContainer;