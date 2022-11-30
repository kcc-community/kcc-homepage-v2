import styled, { css } from 'styled-components'

export const RawBox = styled.div`
  box-sizing: border-box;
  width: 100%;
`

export const FlexBox = styled.div`
  display: flex;
  width: 100%;
`

export const ColumnCenterBox = styled(FlexBox)<{
  justify?: string
  align?: string
}>`
  flex-flow: column nowrap;
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  align-items: ${({ align }) => align ?? 'center'};
`

export const RowCenterBox = styled(FlexBox)<{
  align?: string
  justify?: string
}>`
  flex-flow: row nowrap;
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  align-items: ${({ align }) => align ?? 'center'};
`

export const BetweenBox = styled(FlexBox)`
  justify-content: space-between;
  align-items: center;
`

export const CenterBox = styled(FlexBox)<{ dir?: string }>`
  flex-flow: ${({ dir }) => dir ?? 'column'} nowrap;
  justify-content: center;
  align-items: center;
`

export const MobileView = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

export const BrowserView = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) {
    display: block;
  }
`

export const Box = styled.div``
