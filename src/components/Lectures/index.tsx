import {
  Feature,
  HeaderDescription,
  LecturesContainer,
  LecturesContent,
  LecturesHeader,
  PositiveFeatures,
} from './styles'
import lecturesImg from '../../../public/images/lectures-1.png'
import { CompanyLogos } from '../CompanyLogos'

export function Lectures() {
  return (
    <LecturesContainer id="lectures">
      <LecturesHeader>
        <h2>PALESTRAS</h2>
        <h1>Inspirando o Mundo com Cada Projeto</h1>
        <HeaderDescription>
          <span>
            Consultoria estratégica para melhorar desempenho, eficiência e
            organização empresarial.
          </span>
          <a href="https://wa.me/5511917192907">
            <span>Saiba +</span>
          </a>
        </HeaderDescription>
      </LecturesHeader>
      <LecturesContent>
        <PositiveFeatures>
          <Feature>
            <h1>01 Liderança Transformadora</h1>
            <span>
              Como liderar equipes com excelência, motivar pessoas e alcançar
              resultados extraordinários.
            </span>
            <a href="https://wa.me/5511917192907">
              <span>Saiba +</span>
            </a>
          </Feature>
          <Feature>
            <h1>02 Estratégias para o Sucesso Empresaria</h1>
            <span>
              Abordagens práticas para superar desafios, inovar e impulsionar o
              crescimento sustentável.
            </span>
            <a href="https://wa.me/5511917192907">
              <span>Saiba +</span>
            </a>
          </Feature>
          <Feature>
            <h1>03 Gestão de Mudanças e Inovação</h1>
            <span>
              Adaptação a novos cenários e criação de soluções disruptivas para
              se manter à frente no mercado.
            </span>
            <a href="https://wa.me/5511917192907">
              <span>Saiba +</span>
            </a>
          </Feature>
        </PositiveFeatures>
        <img src={lecturesImg} alt="Imagem para representar palestras" />
      </LecturesContent>
      <CompanyLogos />
    </LecturesContainer>
  )
}
