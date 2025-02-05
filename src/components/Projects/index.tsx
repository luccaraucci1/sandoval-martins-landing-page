import {
  ArrowIcon,
  Description,
  HeaderDescription,
  Project,
  ProjectDescription,
  ProjectsContainer,
  ProjectsContent,
  ProjectsHeader,
  ProjectsRow,
} from './styles'

import { ArrowUpRight } from 'lucide-react'
import projectsImg1 from '../../../public/images/projects-1.png'
import projectsImg2 from '../../../public/images/projects-2.png'
import projectsImg3 from '../../../public/images/projects-3.png'
import projectsImg4 from '../../../public/images/projects-4.png'

export function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <h2>PROJETOS</h2>
        <h1>Transformando Ideias em Resultados Excepcionais</h1>
        <HeaderDescription>
          <span>
            Consultoria especializada que transforma ideias em soluções
            inovadoras, melhorando o desempenho, a eficiência e a organização
            das empresas.
          </span>
        </HeaderDescription>
      </ProjectsHeader>
      <ProjectsContent>
        <ProjectsRow>
          <Project>
            <img src={projectsImg1} width={550} alt="Imagem para Video" />
            <ProjectDescription>
              <div>
                <ArrowIcon>
                  <ArrowUpRight size={32} />
                </ArrowIcon>
                <Description>
                  <h1>Transformação Digital e Inovação</h1>
                  <span>
                    Projetos focados em digitalizar processos e implementar
                    novas tecnologias para otimizar operações e resultados.
                  </span>
                </Description>
              </div>
            </ProjectDescription>
          </Project>
          <Project>
            <img src={projectsImg2} width={550} alt="Imagem para Video" />
            <ProjectDescription>
              <div>
                <ArrowIcon>
                  <ArrowUpRight size={32} />
                </ArrowIcon>
                <Description>
                  <h1>Crescimento Sustentável</h1>
                  <span>
                    Projetos que visam expandir os negócios de forma
                    sustentável, com estratégias personalizadas para cada
                    empresa.
                  </span>
                </Description>
              </div>
            </ProjectDescription>
          </Project>
        </ProjectsRow>
        <ProjectsRow>
          <Project>
            <img src={projectsImg3} width={550} alt="Imagem para Video" />
            <ProjectDescription>
              <div>
                <ArrowIcon>
                  <ArrowUpRight size={32} />
                </ArrowIcon>
                <Description>
                  <h1>Gestão de Projetos Complexos</h1>
                  <span>
                    Planejamento e execução de projetos de grande porte, com
                    foco em eficiência, prazo e qualidade, para diversos
                    setores.
                  </span>
                </Description>
              </div>
            </ProjectDescription>
          </Project>
          <Project>
            <img src={projectsImg4} width={550} alt="Imagem para Video" />
            <ProjectDescription>
              <div>
                <ArrowIcon>
                  <ArrowUpRight size={32} />
                </ArrowIcon>
                <Description>
                  <h1>Desenvolvimento de Cultura Organizacional</h1>
                  <span>
                    Projetos para fortalecer a cultura empresarial, alinhando
                    valores, comportamentos e objetivos estratégicos.
                  </span>
                </Description>
              </div>
            </ProjectDescription>
          </Project>
        </ProjectsRow>
      </ProjectsContent>
    </ProjectsContainer>
  )
}
