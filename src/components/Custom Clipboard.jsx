import { useRef } from 'react';

function CustomClipboard() {
    const textRef = useRef(null);

    const copyToClipboard = () => {
        const text = textRef.current.value;
        navigator.clipboard.writeText(text)
            .then(() => alert('Text copied to clipboard!'))
            .catch((err) => alert('Failed to copy text: ' + err));
    };

    return (
        <div>
            <textarea 
                ref={textRef} 
                defaultValue="Hello, this text will be copied!" 
                rows="4" 
                cols="50" 
            />
            <br />
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
    );
}

export default CustomClipboard;
