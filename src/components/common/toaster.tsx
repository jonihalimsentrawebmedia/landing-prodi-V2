import { toast } from 'sonner'
import { MdWarning } from '@react-icons/all-files/md/MdWarning'
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle'
import { MdInfo } from '@react-icons/all-files/md/MdInfo'
import { MdError } from '@react-icons/all-files/md/MdError'

export const Toaster = {
  success: (msg: string) =>
    toast(msg, {
      className: '!bg-green-500 !text-sm !text-white !border-white',
      icon: <FaCheckCircle className={'size-4'} />,
      dismissible: true,
    }),
  warning: (msg: string) =>
    toast(msg, {
      className: '!bg-yellow-500 !text-white border-white',
      icon: <MdWarning className={'size-4'} />,
      dismissible: true,
    }),
  info: (msg: string) =>
    toast(msg, {
      className: '!bg-blue-500 !text-white !border-white',
      icon: <MdInfo className={'size-4'} />,
      dismissible: true,
    }),
  error: (msg: string) =>
    toast(msg, {
      className: '!bg-red-500 !text-white !border-white',
      icon: <MdError className={'size-4'} />,
      dismissible: true,
    }),
}
