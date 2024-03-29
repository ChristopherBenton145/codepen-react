import { useState } from "react";
import { Controlled } from "react-codemirror2";

function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props;

  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container  ${open ? '' : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen(prevOpen => !prevOpen)}>O/C</button>
      </div>
      <Controlled 
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers:true
        }}
      />
    </div>
  );
}

export default Editor;
