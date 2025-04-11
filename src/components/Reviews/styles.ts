import styled from 'styled-components'

export const ReviewsContainer = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  gap: 16px;
  margin-bottom: 16rem;
  @media (max-width: 1024px) {
    margin: 0 1rem;
    margin-bottom: 16rem;
    flex-direction: column;
    gap: 128px;
    align-items: center;
  }
`

export const Review = styled.div`
  display: flex;
  position: relative;
  width: 700px;
  justify-content: center;

  @media (max-width: 768px) {
    width: auto;

    > img {
      width: 300px;
    }
  }
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
