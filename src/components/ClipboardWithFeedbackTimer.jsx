import { useState } from 'react';

function FeedbackClipboard() {
    const [copied, setCopied] = useState(false);
    const text = "Copy this text!";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            })
            .catch((err) => alert('Failed to copy text: ' + err));
    };

    return (
        <div>
            <p>{text}</p>
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
            {copied && <span style={{ marginLeft: '10px', color: 'green' }}>Copied!</span>}
        </div>
    );
}

export default FeedbackClipboard;
