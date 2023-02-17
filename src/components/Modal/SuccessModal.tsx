import { Modal, ModalProps } from 'antd'
import Image from 'next/image'
import styled from 'styled-components'
import SuccessImage from 'assets/images/gas-revenue/success.png'
import { NormalButton } from 'components/Button'
import { useTranslation } from 'next-i18next'
import { useResponsive } from 'utils/responsive'

const StyledModal = styled(Modal)``

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const SuccessLogo = styled(Image)`
  margin-top: 100px;
`

const Text = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #040a2d;
  margin-top: 20px;
  max-width: 391px;
`

const SuccessModal: React.FC<
  ModalProps & {
    text?: string
  }
> = (props) => {
  const { t } = useTranslation()
  const { isMobile } = useResponsive()

  return (
    <StyledModal
      open={props.open}
      footer={null}
      width={isMobile ? 320 : 600}
      onCancel={props?.onCancel}
      centered
    >
      <Content>
        <SuccessLogo
          src={SuccessImage}
          width={100}
          height={100}
          alt="success-logo"
        />
        <Text>{props.text}</Text>
        <NormalButton
          style={{ marginTop: '43px', marginBottom: '40px', width: '200px' }}
          onClick={props?.onCancel as any}
        >
          {t('KCC_grants_list_ok')}
        </NormalButton>
      </Content>
    </StyledModal>
  )
}

export default SuccessModal
