import { OptionType } from "../../types/OptionType";
import "./Option.scss"

type Props = {
  option: OptionType,
}

export const Option: React.FC<Props> = ({ option }) => {
  return (
    <option value={option.id}>
      {option.name}
    </option>
  )
};
