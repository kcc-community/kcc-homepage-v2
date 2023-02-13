import { message } from 'antd'
import { i18n } from 'next-i18next'
export const limitUploadImageSize = (
  file: any,
  standardWidth: number,
  standardHeight: number
) => {
  console.log('file', file)
  return new Promise(function (resolve) {
    const reader = new FileReader()
    reader.onload = function (e: ProgressEvent<FileReader>) {
      const data = e.target?.result as string
      const image = new Image()
      image.onload = function () {
        const width = image.width
        const height = image.height
        if (width !== standardWidth || height !== standardHeight) {
          resolve(false)
        } else {
          resolve(true)
        }
      }
      image.src = data
    }
    reader.readAsDataURL(file?.originFileObj as any)
  })
}

const limitUploadVolume = (size: number) => {
  return Number(size) / 1024
}

export const getBase64 = (file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file?.originFileObj as any)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

export const uploadImg = async (
  file: any,
  limit: { width: number; height: number }
): Promise<string | null> => {
  const sizeResult = await limitUploadImageSize(file, limit.width, limit.height)
  const volumeResult = limitUploadVolume(1024)

  if (!sizeResult || !volumeResult) {
    message.error(i18n?.t('Unacceptable img size'), 3)
    return null
  }
  i18n && message.info(i18n.t('Uploading'), 0)
  const metadata = await getBase64(file)
  message.destroy()
  i18n && message.success(i18n.t('Upload success'))
  return metadata
}
