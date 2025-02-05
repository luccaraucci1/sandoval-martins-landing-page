import { CompanyLogosContainer, Company } from './styles'
import AmazonLogo from '../../../public/images/company-logos/Amazon.png'
import AsanaLogo from '../../../public/images/company-logos/Asana.png'
import FramerLogo from '../../../public/images/company-logos/Framer.png'
import LinearLogo from '../../../public/images/company-logos/Linear.png'
import MediumLogo from '../../../public/images/company-logos/Medium.png'
import NotionLogo from '../../../public/images/company-logos/Notion.png'
import SlackLogo from '../../../public/images/company-logos/Slack.png'
import UpworkLogo from '../../../public/images/company-logos/Upwork.png'

export function CompanyLogos() {
  return (
    <CompanyLogosContainer>
      <Company>
        <img src={LinearLogo} alt="Logo da Lienar" />
      </Company>

      <Company>
        <img src={FramerLogo} alt="Logo da Framer" />
      </Company>

      <Company>
        <img src={NotionLogo} alt="Logo da Notion" />
      </Company>
      <Company>
        <img src={SlackLogo} alt="Logo da Slack" />
      </Company>

      <Company>
        <img src={MediumLogo} alt="Logo da Medium" />
      </Company>

      <Company>
        <img src={UpworkLogo} alt="Logo da Upwork" />
      </Company>
      <Company>
        <img src={AmazonLogo} alt="Logo da Amazon" />
      </Company>
      <Company>
        <img src={AsanaLogo} alt="Logo da Asanas" />
      </Company>
    </CompanyLogosContainer>
  )
}
