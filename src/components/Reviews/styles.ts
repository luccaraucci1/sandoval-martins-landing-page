import styled from 'styled-components'

export const ReviewsContainer = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  gap: 16px;
  margin-bottom: 8rem;
`

export const Review = styled.div`
  display: flex;
  position: relative;
  width: 700px;
  justify-content: center;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors['orange-300']};
  border-radius: 8px;
  width: 40px;
  height: 40px;
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
    font-size: 24pxs;
  }
`

export const Author = styled.div`
  margin: 2rem 0;
`
