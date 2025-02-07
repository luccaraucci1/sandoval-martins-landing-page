import {
  Review,
  ReviewsContainer,
  Text,
  Author,
  ArrowIcon,
  IconContainer,
} from './styles'
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react'

import ceoImg1 from '../../../public/images/reviews-1.png'
import ceoImg2 from '../../../public/images/reviews-2.png'
import quotes from '../../../public/images/reviews-icon.png'

export function Reviews() {
  return (
    <ReviewsContainer>
      <IconContainer>
        <ArrowIcon>
          <ArrowUpLeft />
        </ArrowIcon>
      </IconContainer>
      <Review>
        <Text>
          <h1>
            &quot;A Palestra De Sandoval Martins Foi Essencial Para O
            Crescimento Da Nossa Equipe E Desenvolvimento De Liderança.&quot;
          </h1>
          <Author>
            <h2>Cameron Williamson</h2>
            <span>CEO da Multiplus</span>
          </Author>
          <img src={quotes} alt="Imagem Representando Aspas" />
        </Text>
        <img src={ceoImg1} width={400} alt="Imagem do Ceo que fez a review" />
      </Review>

      <Review>
        <Text>
          <h1>
            &quot;Sandoval Martins Nos Ajudou A Superar Desafios E Melhorar
            Nossa Performance Com Suas Palestras Impactantes.&quot;
          </h1>
          <Author>
            <h2>Sakib Hasan</h2>
            <span>CFO do Banco Inter</span>
          </Author>
          <img src={quotes} alt="Imagem Representando Aspas" />
        </Text>
        <img src={ceoImg2} width={400} alt="Imagem do Ceo que fez a review" />
      </Review>
      <IconContainer>
        <ArrowIcon>
          <ArrowUpRight />
        </ArrowIcon>
      </IconContainer>
    </ReviewsContainer>
  )
}
