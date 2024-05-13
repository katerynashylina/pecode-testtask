import "./Button.scss"

type Props = {
  onClick?: () => void,
  text: string,
}

export const Button: React.FC<Props> = ({ onClick, text }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
};
