interface RadioGroupProps {
  options: { label: string; value: string }[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const RadioGroup = ({ options, selectedOption, setSelectedOption }: RadioGroupProps) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
