import styled from 'styled-components'

export const ReviewsContainer = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  gap: 16px;
  margin-bottom: 8rem;
  @media (max-width: 1024px) {
    margin: 0 1rem;
    margin-bottom: 4rem;
    flex-direction: column;
    gap: 128px;
  }
`
export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors['orange-300']};
  border-radius: 8px;
  width: 40px;
  height: 40px;
  @media (max-width: 1024px) {
    display: none;
  }
`
export const ArrowRightIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors['orange-300']};
  border-radius: 8px;
  width: 40px;
  height: 40px;
  top: 40%;
  left: 88%;
  @media (max-width: 1024px) {
    display: none;
  }
`

export const Review = styled.a`
  display: flex;
  position: relative;
  width: 700px;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  &:visited {
    text-decoration: none;
    color: white;
  }

  &:hover ~ ${ArrowIcon} {
    background-color: ${(props) => props.theme.colors['orange-300']};
  }

  @media (max-width: 768px) {
    width: auto;
    > img {
      width: 300px;
    }
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.div`
  position: absolute;
  width: 376px;
  top: 40px;
  left: 0;

  h1 {
    font-size: 32px;
    line-height: 130%;
  }

  h2 {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    width: 200px;

    img {
      display: none;
    }
    h1 {
      font-size: 24px;
      line-height: 130%;
    }

    h2 {
      font-size: 16px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    top: 40px;
    left: 100px;
  }
`

export const Author = styled.div`
  margin: 2rem 0;
`
