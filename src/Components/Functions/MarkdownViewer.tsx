import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from "dompurify";
import parse, {Element} from 'html-react-parser';
import Player from '../UI/Player';
import "./MarkdownViewer.css"

interface MarkdownViewerProps {
    filepath: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filepath }) => {
    const [content, setContent] = useState<React.ReactNode>(null);

    useEffect(() => {

        marked.setOptions({
            breaks: true,
            gfm: true
        })

        fetch(filepath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => marked(text))
            .then(markdown => DOMPurify.sanitize(markdown))
            .then(sanitizedHtml => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(sanitizedHtml, 'text/html');

                doc.querySelectorAll("p a[href*='youtube.com'], p a[href*='youtu.be']").forEach(a => {
                    const p = a.parentElement;
                    if (p?.tagName === 'P') {
                        const div = doc.createElement('div');
                        while (p.firstChild) {
                            div.appendChild(p.firstChild);
                        }
                        p.parentNode?.replaceChild(div, p);
                    }
                });

                const newHtml = doc.body.innerHTML;
                return newHtml;
            })
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
        <div className=" text-xl mx-auto w-fit mb-7 max-md:text-4xl">
            <div className="markdown-viewer">
                {content}
            </div>
        </div>
    );
};

export default MarkdownViewer;

