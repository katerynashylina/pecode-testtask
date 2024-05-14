import { OptionType } from "../../types/OptionType";
import "./Selection.scss"

type Props = {
  options: OptionType[],
  text: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
}

export const Selection: React.FC<Props> = ({ options, text, value, setValue }) => {
  return (
    <label className="selection">
      <b>{text}</b>
      <select
        value={value}
        onChange={e => setValue(e.target.value)}
        className="selection__select"
      >
        {options.map(op => (
          <option value={op.name} key={op.id}>
            {op.name === '' ? 'all' : op.name}
          </option>
        ))}
      </select>
    </label>
  );
};
