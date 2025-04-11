import {
  AboutContainer,
  Experience,
  ExperienceRecord,
  ExperienceRecordCard,
  Skill,
  SoftSkills,
  Years,
  YearsHeader,
} from './styles'
import leadImg from '../../../public/images/about-1.png'
import magnifierImg from '../../../public/images/about-2.png'
import ideasImg from '../../../public/images/about-3.png'
import keyImg from '../../../public/images/about-4.png'

export function About() {
  return (
    <AboutContainer id="about">
      <SoftSkills>
        <Skill>
          <img
            src={leadImg}
            alt="Imagem representando liderança estratégica"
            width={54}
          />
          <h1>Liderança Estratégica</h1>
          <span>
            Voce sabe liderar seu time para entregar crescimento sustentável?
            Criar metas e executa las imediatamente?
          </span>
        </Skill>
        <Skill>
          <img
            src={magnifierImg}
            alt="Imagem representando Visão de Longo Prazo"
            width={54}
          />
          <h1>Visão de Longo Prazo</h1>
          <span>
            Qual é o caminho futuro que você tem que seguir? Voce sabe executar
            seu plano de transformação e capturar as alavancas de crescimento?
          </span>
        </Skill>
        <Skill>
          <img
            src={ideasImg}
            alt="Imagem representando Adaptabilidade"
            width={54}
          />
          <h1>Adaptabilidade</h1>
          <span>
            &quot;Se alguém pesquisasse seu nome hoje no Google, encontraria um
            líder pronto?&quot; <br />
            &quot;Qual o caminho do sucesso através do eu desenvolvimento?&quot;{' '}
            <br />
            &quot;Qual o primeiro passo?&quot;
          </span>
        </Skill>
        <Skill>
          <img
            src={keyImg}
            alt="Imagem representando Habilidade de Comunicação"
            width={54}
          />
          <h1>Habilidade de Comunicação</h1>
          <span>
            Competência para transmitir ideias de forma clara e eficaz,
            influenciando colaboradores, parceiros e investidores.
          </span>
        </Skill>
      </SoftSkills>
      <Experience>
        <Years>
          <YearsHeader>
            <h1>30</h1>
            <h2>Anos de Experiência</h2>
          </YearsHeader>
          <span>
            Com 30 anos de experiencia ajudando empresas, empresários,
            investidores e executivos a transformar seu negócio e carreira
            através de entrega de resultados exponenciais de crescimento. Ajudei
            a criar a Multiplus Fidelidade do zero ao valuation de R$5bilhões
          </span>
        </Years>
        <ExperienceRecord>
          <ExperienceRecordCard>
            <h1>10 anos Conseheiros</h1>
            <span>
              Banco Original, CVC Viagens, Banco BMG, Aviva Hotelaria e mais 10
              empresas
            </span>
          </ExperienceRecordCard>
          <ExperienceRecordCard>
            <h1>10 anos Mentor Endeavor</h1>
            <span>
              Mentor de algumas empresas que hoje são unicórnios e outras com
              grande crescimento exponencial
            </span>
          </ExperienceRecordCard>
          <ExperienceRecordCard>
            <h1>30 mil seguidores e conexões</h1>
            <span>
              no LinkedIn com grandes executivos, emopreendedores, conselheiros
              criando um dos melhores network
            </span>
          </ExperienceRecordCard>
          <ExperienceRecordCard>
            <span>
              Já participei de 4 IPOs, comprei e vendi mais de 20 empresas. Sou
              investidor em 5 startups promissoras
            </span>
          </ExperienceRecordCard>
        </ExperienceRecord>
      </Experience>
    </AboutContainer>
  )
}
