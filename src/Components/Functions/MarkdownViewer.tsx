import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
// import DOMPurify from "dompurify";
import parse, {Element} from 'html-react-parser';
import Player from '../UI/Player';

interface MarkdownViewerProps {
    filepath: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filepath }) => {
    const [content, setContent] = useState<React.ReactNode>(null);

    useEffect(() => {
        fetch(filepath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(marked)
            // .then(markdown => DOMPurify.sanitize(markdown))
            .then(sanitizedHtml => {
                const transformedContent = parse(sanitizedHtml, {
                    replace: (domNode) => {
                        if (domNode instanceof Element && domNode.name === 'a') {
                            const href = domNode.attribs.href;
                            const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/i;
                            const match = href.match(youtubeRegex);
                            if (match) {
                                return <Player url={href} />;
                            }
                        }
                    }
                });

                setContent(transformedContent);
            })
            .catch(error => {
                console.error("Markdown file could not be loaded or parsed", error);
                setContent(<p>Error loading content...</p>);
            });
    }, [filepath]);


    return (
        <div>
            {content}
        </div>
    );
};

export default MarkdownViewer;

