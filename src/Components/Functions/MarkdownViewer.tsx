import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from "dompurify";
import parse, {Element} from 'html-react-parser';
import Player from '../UI/Player';
import "./MarkdownViewer.css"
import {  useNavigate } from 'react-router-dom';

interface MarkdownViewerProps {
    filepath: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filepath }) => {
    const [content, setContent] = useState<React.ReactNode>(null);
    const navigate = useNavigate()

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
            .then(text => {
                if (text.includes('<title>kip2.dev</title>')){
                    navigate('/404', { replace: true })
                    return null
                }
                return marked(text)})
            .then(markdown => {
                if (!markdown) return null
                return DOMPurify.sanitize(markdown)
            })
            .then(sanitizedHtml => {
                if (!sanitizedHtml) return 

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
                if (!sanitizedHtml) return

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
    }, [filepath, navigate]);


    return (
        <div className=" text-xl mx-auto w-fit mb-7 max-md:text-4xl">
            <div className="markdown-viewer">
                {content}
            </div>
        </div>
    );
};

export default MarkdownViewer;

