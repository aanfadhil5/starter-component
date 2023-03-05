import { useState } from "react";
import { Button } from "@/components/Button";
import { ColoredRadio, Radio } from "@/components/Radio";
import { SelectInput } from "@/components/Select";
import { TextInput } from "@/components/TextInput";

function App() {
  const initialData = {
    name: "",
    error: "",
    favorite: "",
    lang: [],
    gender: "",
    color: "",
  };

  const [dataForm, setDataForm] = useState(initialData);

  const checkName = (e) => {
    const { value } = e.target;
    if (value.length <= 3 || value.length >= 20) {
      setDataForm({
        ...dataForm,
        error: "Name must be between 3 and 20 characters",
        name: value,
      });
    } else {
      setDataForm({
        ...dataForm,
        error: "",
        name: value,
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex bg-gray-100 p-4 rounded-lg shadow-md sticky top-0 z-10 overflow-x-auto">
        <pre className="text-sm font-mono">{JSON.stringify(dataForm)}</pre>
      </div>
      <form>
        <div className="my-6 px-4 py-2 border-2 border-x-0">
          <h1 className="text-2xl font-medium text-gray-800">Text Input</h1>
          <hr className="mb-4" />
          <div className="border p-2">
            <TextInput
              label="name"
              required
              error={dataForm?.error}
              onChange={(e) => {
                checkName(e);
              }}
              name="name"
              placeholder="Enter your name"
              value={dataForm?.name}
            />
          </div>
        </div>
        <div className="my-6 px-4 py-2 border-2 border-x-0 flex flex-col gap-2">
          <h1 className="text-2xl font-medium text-gray-800">Select Input</h1>
          <hr className="mb-4" />
          <div className="border p-2">
            <h2 className="text-lg">Singular Value</h2>
            <SelectInput
              label="Favorite"
              name="favorite"
              required
              options={[
                { value: "mango", label: "Mango" },
                { value: "orange", label: "Orange" },
                { value: "banana", label: "Banana" },
              ]}
              value={{ value: dataForm?.favorite, label: dataForm?.favorite }}
              onChange={(selectedOption) =>
                setDataForm({ ...dataForm, favorite: selectedOption.value })
              }
            />
          </div>
          <div className="border p-2">
            <h2 className="text-lg">Multiple Value</h2>
            <SelectInput
              name="lang"
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  lang: e.map((option) => option.value),
                })
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
              value={dataForm?.lang.map((value) => ({
                label: value,
                value: value,
              }))}
            />
          </div>
        </div>
        <div className="my-6 px-4 py-2 border-2 border-x-0 flex flex-col gap-2">
          <h1 className="text-2xl font-medium text-gray-800">Radio</h1>
          <hr className="mb-4" />
          <div className="border p-2">
            <h2 className="text-lg">Normal</h2>

            <Radio
              label="Gender"
              name="gender"
              options={[
                { label: "male", value: "male" },
                { label: "female", value: "female" },
              ]}
              required
              onChange={(e) =>
                setDataForm({ ...dataForm, gender: e.target.value })
              }
              value={dataForm?.gender}
            />
          </div>
          <div className="border p-2">
            <h2 className="text-lg">Colored</h2>

            <ColoredRadio
              label="Color"
              name="color"
              options={[
                { label: "red", value: "red" },
                { label: "green", value: "green" },
                { label: "blue", value: "blue" },
              ]}
              required
              value={dataForm?.color}
              onChange={(e) =>
                setDataForm({ ...dataForm, color: e.target.value })
              }
            />
          </div>
        </div>

        <div className="my-6 px-4 py-2 border-2 border-x-0">
          <h1 className="text-2xl font-medium text-gray-800">Button</h1>
          <hr className="mb-4" />
          <div className="border p-2 flex gap-4">
            <Button type="submit" onClick={() => console.log(dataForm)}>
              Submit
            </Button>

            <Button type="reset" onClick={() => setDataForm(initialData)}>
              Reset
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
