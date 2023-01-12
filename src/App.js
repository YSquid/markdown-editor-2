import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function App() {
const defaultPreview = `# H1
## H2
### H3

Here is a link to [Google](https://google.com)

Here is some \`inline code\`


\`\`\`
This is a fenced code block

  const fruit = apple

  if(fruit === apple) {
    return true
  }
\`\`\`


- list item

> Block Quote


**Here is some bolded text**

Here is an image of a penguin! 

![Penguin](https://cdn.download.ams.birds.cornell.edu/api/v1/asset/362635561/900)





`;

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(defaultPreview);
  },[defaultPreview]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div id="wrapper" className="App">
      {/*notice that the card title is in the same context as card-text (both inside card-body)*/}
      <div id="editor" className="card-body">
        <h2 className="card-title">Editor</h2>
        <div class="grow-wrap">
        <textarea
          className="card-text"
          value={inputValue}
          onChange={handleChange}
          onInput="this.parentNode.dataset.replicatedValue = this.value"
          spellcheck='true'
        />
        </div>
      </div>

      <div id="previewer" className="card-body">
        <h2 className="card-title">Markdown Preview</h2>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="card-text">
          {inputValue}
        </ReactMarkdown>
      </div>
    </div>
  );
}
export default App;
