'use client'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'ternary'
  onClick?: () => void
  link?: string
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  type = 'button',
  onClick,
  link,
}) => {
  const baseStyles = 'px-6 py-3 rounded-[10px] font-medium cursor-pointer inline-block'
  const variants = {
    primary: 'text-white bg-yellow-light',
    secondary: 'text-black bg-yellow-light',
    ternary: 'text-orange-light bg-white-light',
  }

  const className = `${baseStyles} ${variants[variant]}`

  if (link) {
    return (
      <a className={className} href={link}>
        {label}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  )
}
