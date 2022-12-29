import { Input, message } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { RowCenterBox } from 'components'

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const OperateButton = styled.div<{ disabled: boolean }>`
  width: auto;
  height: 36px;
  background: #fffefe;
  border-radius: 4px;
  display: flex;
  padding: 0 18px;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  cursor: ${({ disabled }) => {
    if (disabled) {
      return 'not-allowed'
    }
    return 'pointer'
  }};
  pointer-events: ${({ disabled }) => {
    if (disabled) {
      return 'none'
    }
    return ''
  }};
  user-select: none;
  color: ${({ disabled }) => {
    if (disabled) {
      return '#7F8393'
    }
    return '#000000'
  }};
  &:hover {
    color: ${({ disabled }) => {
      if (disabled) {
        return '#7F8393'
      }
      return '#21C397'
    }};
  }
`

const StyledInput = styled(Input)`
  width: 36px;
  height: 36px;
  font-size: 16px;
`

const TotalPageText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #040a2d;
  margin-left: 8px;
`

type Props = {
  currentPage: number
  total: number
  perPage: number
  setCurrentPage: any
}

const Pagination: React.FC<Props> = ({
  currentPage,
  total,
  perPage,
  setCurrentPage,
}) => {
  const { t } = useTranslation()
  const totalPage = React.useMemo(() => {
    if (total < perPage) return 1
    return Math.ceil(total / perPage)
  }, [total, perPage])

  const [inputPage, setInputPage] = React.useState<string>('')
  React.useEffect(() => {
    setInputPage(() => `${currentPage}`)
  }, [currentPage])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (
          !Number.isNaN(inputPage) &&
          Number(inputPage) > 0 &&
          Number(inputPage) <= totalPage
        ) {
          setCurrentPage(() => inputPage)
        } else {
          message.warning('Please enter a valid page number')
          setInputPage(() => '')
        }
      }
    },
    [inputPage, setCurrentPage, totalPage]
  )

  return (
    <Wrap>
      <OperateButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p: number) => p - 1)}
      >
        {t('Page up')}
      </OperateButton>
      <RowCenterBox style={{ width: 'auto', margin: '0 15px' }}>
        <StyledInput
          value={inputPage}
          onChange={(e) => setInputPage(() => e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <TotalPageText>/ {totalPage}</TotalPageText>
      </RowCenterBox>
      <OperateButton
        disabled={currentPage === totalPage}
        onClick={() => setCurrentPage((p: number) => p + 1)}
      >
        {t('Page down')}
      </OperateButton>
    </Wrap>
  )
}

export default Pagination
