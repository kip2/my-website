import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown, {Components} from 'react-markdown'
import gfm from 'remark-gfm'
import DOMPurify from 'dompurify'
import Player from '../../UI/Player'
import Blank from '../../UI/Blanks/Blank'
import "./MarkdownViewer.css"
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import LittleBlank from '../../UI/Blanks/LittleBlank'

interface MarkdownViewerProps {
    filepath: string
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filepath }) => {
    const [markdown, setMarkdown] = useState<string>('')
    const navigate = useNavigate()

    useEffect(() => {
        fetch(filepath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.text()
            })
            .then(text => {
                if (text.includes('<title>kip2.dev</title>')){
                    navigate('/404', { replace: true })
                    return
                }
                const sanitized = DOMPurify.sanitize(text)
                setMarkdown(sanitized)
            })
            .catch(error => {
                console.error("Markdown file could not be loaded or parsed", error)
                setMarkdown("Error loading content...")
            })
    }, [filepath, navigate])

    const renderers: Partial<Components> = {
        a: ({ ...props}) => { 
            const href = props.href || ''
            const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/i
            if (href.match(youtubeRegex)) {
                return <Player url={href} />
            }
            return <a {...props}>{props.children}</a>
        },
        p: ({ node, ...props}) => {
            const text = node?.children[0] && node?.children[0].type === 'text' ? 
                            node.children[0].value
                            :
                            ''
            if (text.startsWith(":::Blank")) {
                return <Blank />
            }
            if (text.startsWith(":::LittleBlank")) {
                return <LittleBlank />
            }
            return <p {...props}>{props.children}</p>

        }
    }

    return (
        <div className="markdown-viewer text-xl-custom mx-auto w-full mb-7 max-md:text-4xl">
            <ReactMarkdown 
                remarkPlugins={[gfm]} 
                children={markdown} 
                components={{
                    code({children, className, ...rest}) {
                        console.log("className:", className)
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter
                        children={String(children).replace(/\n$/,'')}
                        style={ocean}
                        language={match[1]}
                        PreTag="div"
                        />
                    ) : (
                        <code className={className} {...rest}>
                        {children}
                        </code>
                    )
                    },
                    ...renderers 
                }}
            />
        </div>
    )
}

export default MarkdownViewer
