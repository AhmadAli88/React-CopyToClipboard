import  { useState } from 'react';

function NativeExample() {
    const [text, setText] = useState('Hello, this text will be copied!');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => alert('Text copied to clipboard!'))
            .catch((err) => alert('Failed to copy text: ' + err));
    };

    return (
        <div>
            <textarea 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                rows="4" 
                cols="50" 
            />
            <br />
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
    );
}

export default NativeExample;
