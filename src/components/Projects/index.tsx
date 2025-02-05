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
import projectsImg1 from '../../../public/images/projects-1.png'
import { ArrowUpRight } from 'lucide-react'

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
            <img src={projectsImg1} width={500} alt="Imagem para Video" />
            <ProjectDescription>
              <ArrowIcon>
                <ArrowUpRight size={24} />
              </ArrowIcon>
              <Description>
                <h1>Transformação Digital e Inovação</h1>
                <span>
                  Projetos focados em digitalizar processos e implementar novas
                  tecnologias para otimizar operações e resultados.
                </span>
              </Description>
            </ProjectDescription>
          </Project>
          <Project>
            <img src={projectsImg1} width={500} alt="Imagem para Video" />
            <ProjectDescription>
              <ArrowIcon>
                <ArrowUpRight size={24} />
              </ArrowIcon>
              <Description>
                <h1>Transformação Digital e Inovação</h1>
                <span>
                  Projetos focados em digitalizar processos e implementar novas
                  tecnologias para otimizar operações e resultados.
                </span>
              </Description>
            </ProjectDescription>
          </Project>
        </ProjectsRow>
        <ProjectsRow>
          <Project>
            <img src={projectsImg1} width={500} alt="Imagem para Video" />
            <ProjectDescription>
              <ArrowIcon>
                <ArrowUpRight size={24} />
              </ArrowIcon>
              <Description>
                <h1>Transformação Digital e Inovação</h1>
                <span>
                  Projetos focados em digitalizar processos e implementar novas
                  tecnologias para otimizar operações e resultados.
                </span>
              </Description>
            </ProjectDescription>
          </Project>
          <Project>
            <img src={projectsImg1} width={500} alt="Imagem para Video" />
            <ProjectDescription>
              <ArrowIcon>
                <ArrowUpRight size={24} />
              </ArrowIcon>
              <Description>
                <h1>Transformação Digital e Inovação</h1>
                <span>
                  Projetos focados em digitalizar processos e implementar novas
                  tecnologias para otimizar operações e resultados.
                </span>
              </Description>
            </ProjectDescription>
          </Project>
        </ProjectsRow>
      </ProjectsContent>
    </ProjectsContainer>
  )
}
