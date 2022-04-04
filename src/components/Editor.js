import { Controlled } from "react-codemirror2";

function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O/C</button>
      </div>
      <Controlled 
        onBeforeChange={handleChange}
        valye={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers:true
        }}
      />
    </div>
  );
}

export default Editor;
