import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from "dompurify"

interface MarkdownViewerProps {
    filepath: string
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filepath }) => {
    const [html, setHtml] = useState("");

    useEffect(() => {
        fetch(filepath)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => {
                return marked(text);
            })
            .then(markdownHtml => {
                const cleanHtml = DOMPurify.sanitize(markdownHtml)
                setHtml(cleanHtml);
            })
            .catch(error => {
                console.error("Markdown file could not be loaded or parsed", error);
            });
    }, [filepath]);

    console.log("html:", html)
    
    return <div dangerouslySetInnerHTML={{ __html: html }} />; 
};

export default MarkdownViewer;