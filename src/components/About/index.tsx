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
            Capacidade de definir metas claras, tomar decisões importantes e
            inspirar equipes a alcançar resultados.
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
            Habilidade de prever tendências, identificar oportunidades e traçar
            caminhos para o crescimento sustentável da empresa.
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
            Facilidade para se ajustar a mudanças no mercado, gerenciar crises e
            encontrar soluções inovadoras.
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
            <h1>25</h1>
            <h2>Anos de Experiência</h2>
          </YearsHeader>
          <span>
            Com 25 anos de experiência, ofereço insights estratégicos para
            impulsionar eficiência e performance empresarial.
          </span>
        </Years>
        <ExperienceRecord>
          <ExperienceRecordCard>
            <h1>+20k</h1>
            <span>Horas do que?</span>
          </ExperienceRecordCard>
          <ExperienceRecordCard>
            <h1>+10k</h1>
            <span>Fazendo?</span>
          </ExperienceRecordCard>
          <ExperienceRecordCard>
            <h1>+200</h1>
            <span>Alguma coisa</span>
          </ExperienceRecordCard>
          <ExperienceRecordCard>
            <h1>+2k</h1>
            <span>Satisfeitos com algo</span>
          </ExperienceRecordCard>
        </ExperienceRecord>
      </Experience>
    </AboutContainer>
  )
}
