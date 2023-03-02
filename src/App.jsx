import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "./components/Button/Button";
import { SelectInput } from "./components/Select/Select";
import { TextInput } from "./components/TextInput";

function App() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    lang: [],
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
    <div className="App">
      <pre>{JSON.stringify(dataForm)}</pre>
      <form>
        <TextInput
          label="name"
          required
          error={dataForm?.error}
          onChange={(e) => checkName(e)}
          name="name"
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
        <Button type="submit" loading={true}>
          Test
        </Button>
      </form>
    </div>
  );
}

export default App;
