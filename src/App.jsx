import { useState } from "react";
import { Button } from "./components/Button/Button";
import { ColoredRadio, Radio } from "./components/Radio";
import { SelectInput } from "./components/Select/Select";
import { TextInput } from "./components/TextInput";

function App() {
  const [dataForm, setDataForm] = useState({
    name: "",
    error: "",
    lang: [],
    gender: "",
    color: "",
  });

  const checkName = (e) => {
    if (e.target.value.length <= 3 || e.target.value.length >= 20) {
      setDataForm((prev) => ({
        ...prev,
        error: "Name must be between 3 and 20 characters",
      }));
    } else {
      setDataForm((prev) => ({
        ...prev,
        error: "",
      }));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <pre>{JSON.stringify(dataForm)}</pre>
      <form>
        <TextInput
          label="name"
          required
          error={dataForm?.error}
          onChange={(e) => checkName(e)}
          name="name"
          placeholder="Enter your name"
          value={dataForm?.name}
        />
        <SelectInput
          name="lang"
          onChange={(e) =>
            setDataForm({ ...dataForm, lang: e.map((option) => option.value) })
          }
          label="Language"
          options={[
            { label: "react", value: "react" },
            { label: "javascript", value: "javascript" },
            { label: "typescript", value: "typescript" },
            { label: "python", value: "python" },
            { label: "c++", value: "c++" },
            { label: "c#", value: "c#" },
          ]}
          required
          multiple
        />
        <Radio
          label="Gender"
          name="gender"
          options={[
            { label: "male", value: "male" },
            { label: "female", value: "female" },
          ]}
          required
          onChange={(e) => setDataForm({ ...dataForm, gender: e.target.value })}
          value={dataForm?.gender}
        />
        <ColoredRadio
          label="Colored Radio"
          name="color"
          options={[
            { label: "red", value: "red" },
            { label: "green", value: "green" },
            { label: "blue", value: "blue" },
          ]}
          required
          value={dataForm?.color}
          onChange={(e) => setDataForm({ ...dataForm, color: e.target.value })}
        />
      </form>
    </div>
  );
}

export default App;
