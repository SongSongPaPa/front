interface RadioGroupProps {
  options: { label: string; value: string | number }[];
  selectedOption: string | number;
  setSelectedOption: (option: string | number) => void;
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
