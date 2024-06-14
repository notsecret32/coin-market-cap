interface IModalProps {
  title: string
  isOpen: boolean
  children?: React.ReactNode
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Modal = ({ title, isOpen, children, onClose }: IModalProps) => {
  return (
    <div
      tabIndex={-1}
      className={`${isOpen ? 'block' : 'hidden'} fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen w-screen`}
    >
      {/* Backdrop */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50" />
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5 space-y-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
