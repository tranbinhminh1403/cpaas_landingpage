import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const sampleCode = `
// Example JavaScript function
function calculateSum(a, b) {
  const sum = a + b;
  console.log('Sum:', sum);
  return sum;
}

// Call the function
calculateSum(5, 3);
`;
export default function Test() {
  return (
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {sampleCode}
    </SyntaxHighlighter>
  );
}
