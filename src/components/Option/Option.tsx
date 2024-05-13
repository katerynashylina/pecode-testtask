import { OptionType } from "../../types/OptionType";

type Props = {
  option: OptionType,
}

export const Option: React.FC<Props> = ({ option }) => {
  return (
    <option value={option.name}>
      {option.name}
    </option>
  )
};
