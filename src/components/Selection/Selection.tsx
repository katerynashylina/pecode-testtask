import { ChangeEvent } from "react";
import { OptionType } from "../../types/OptionType";
import { Option } from "../Option/Option";
import "./Selection.scss"

type Props = {
  options: OptionType[],
  text: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
}

export const Selection: React.FC<Props> = ({ options, text, value, onChange }) => {
  return (
    <label className="selection">
      <b>{text}</b>
      <select value={value} onChange={onChange} className="selection__select">
        {options.map(option => (
          <Option option={option} key={option.id} />
        ))}
      </select>
    </label>
  )
};
