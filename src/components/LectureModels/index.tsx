import {
  Item,
  LectureModelsContainer,
  Content,
  Header,
  Icon,
  Title,
  Description,
  More,
  IconAndTitleMobile,
  IconMobile,
  TitleMobile,
} from './styles'
import collegeImg from '../../../public/images/lecture-models-1.png'
import calendarImg from '../../../public/images/lecture-models-2.png'
import statisticsImg from '../../../public/images/lecture-models-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'

export function LectureModels() {
  return (
    <LectureModelsContainer>
      <Header>
        <h2>MODELOS DE PALESTRAS</h2>
        <h1>Modelos De Palestras Personalizadas</h1>
      </Header>
      <Content>
        <Item>
          <Icon>
            <img
              src={collegeImg}
              width={65}
              alt="Icone representando Liderança Transformadora"
            />
          </Icon>
          <Title>
            <h1>Liderança Transformadora</h1>
            <p>2 horas</p>
          </Title>
          <IconAndTitleMobile>
            <IconMobile>
              <img
                src={collegeImg}
                width={65}
                alt="Icone representando Liderança Transformadora"
              />
            </IconMobile>
            <TitleMobile>
              <h1>Liderança Transformadora</h1>
              <p>2 horas</p>
            </TitleMobile>
          </IconAndTitleMobile>
          <Description>
            <span>
              Focada no desenvolvimento de habilidades de liderança, motivação
              de equipes e criação de uma cultura organizacional positiva e
              produtiva.
            </span>
          </Description>

          <More>
            <p>SAIBA +</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </More>
        </Item>
        <Item>
          <Icon>
            <img
              src={calendarImg}
              width={65}
              alt="Icone representando Liderança Transformadora"
            />
          </Icon>
          <Title>
            <h1>Inovação e Crescimento</h1>
            <p>4 horas</p>
          </Title>
          <IconAndTitleMobile>
            <IconMobile>
              <img
                src={calendarImg}
                width={65}
                alt="Icone representando Liderança Transformadora"
              />
            </IconMobile>
            <TitleMobile>
              <h1>Inovação e Crescimento</h1>
              <p>4 horas</p>
            </TitleMobile>
          </IconAndTitleMobile>
          <Description>
            <span>
              Apresenta de métodos práticos para impulsionar a inovação dentro
              das empresas e adotar estratégias que promovam o crescimento.
            </span>
          </Description>
          <More>
            <p>SAIBA +</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </More>
        </Item>
        <Item>
          <Icon>
            <img
              src={statisticsImg}
              width={65}
              alt="Icone representando Liderança Transformadora"
            />
          </Icon>
          <Title>
            <h1>Gestão de Mudanças</h1>
            <p>6 horas</p>
          </Title>
          <IconAndTitleMobile>
            <IconMobile>
              <img
                src={statisticsImg}
                width={65}
                alt="Icone representando Liderança Transformadora"
              />
            </IconMobile>
            <TitleMobile>
              <h1>Gestão de Mudanças</h1>
              <p>6 horas</p>
            </TitleMobile>
          </IconAndTitleMobile>
          <Description>
            <span>
              Aborda como as empresas podem lidar com mudanças organizacionais,
              crises e incertezas, desenvolvendo resiliência e eficiência
              operacional.
            </span>
          </Description>
          <More>
            <p>SAIBA +</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </More>
        </Item>
      </Content>
    </LectureModelsContainer>
  )
}
