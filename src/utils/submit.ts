import { message } from 'antd'
import { i18n } from 'next-i18next'
import { NFTStorage } from 'nft.storage'
import { CIDString } from 'nft.storage/dist/src/lib/interface'

export const limitUploadImageSize = (
  file: Blob,
  standardWidth: number,
  standardHeight: number
) => {
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
    reader.readAsDataURL(file)
  })
}

const limitUploadVolume = (size: number) => {
  return Number(size) / 1024
}

export const uploadImg = async (
  client: NFTStorage,
  file: Blob,
  limit: { width: number; height: number }
): Promise<CIDString | null> => {
  const sizeResult = await limitUploadImageSize(file, limit.width, limit.height)
  const volumeResult = limitUploadVolume(1024)

  if (!sizeResult || !volumeResult) {
    message.error(i18n?.t('Unacceptable img size'), 3)
    return null
  }
  i18n && message.info(i18n.t('Uploading'), 0)
  const metadata = await client.storeBlob(new Blob([file]))
  console.log('metadata.json contents with IPFS gateway URLs:\n', metadata)
  message.destroy()
  i18n && message.success(i18n.t('Upload success'))
  return metadata
}
