import React, { Component } from 'react'
import './markdown.scss'
let marked = require("marked");

export default class MarkdownPreviewer extends Component {

    state = {
        editorText: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
          
Heres some code, \`<div></div>\`, between 2 backticks.
        
\`\`\`
// this is multi-line code:
        
function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`
          
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
        
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
        
And if you want to get really crazy, even tables:
        
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
        
- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.
        
        
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
        
![React Logo w/ Text](https://goo.gl/Umyytc)
        `,
        hideEditer: false,
        hidePreview: false,
    }

    maximizeEditor = () => {
        this.setState({
            hidePreview: !this.state.hidePreview,
        })
    }

    maximizePreview = () => {
        this.setState({
            hideEditer: !this.state.hideEditer,
        })
    }

    handleChangeContent = (event) => {
        console.log(event)
        this.setState({
            editorText: event,
        })
    }

    render() {
        return (
            <div className="mardownPreviewer">
                <div className={`editorWrap ${this.state.hidePreview ? 'maximized' : ''} ${this.state.hideEditer ? 'd-none' : 'd-block'}`}>
                    <div className="toolbar">
                        <div className="toolbar__left">
                            <i className="fab fa-free-code-camp"></i>
                            Editor
                        </div>
                        <button className="toolbar__right" onClick={this.maximizeEditor}>
                            <i className={`fa fa-expand-arrows-alt ${this.state.hidePreview ? 'd-none' : 'd-block'}`}></i>
                            <i className={`fa fa-compress-arrows-alt ${this.state.hidePreview ? 'd-block' : 'd-none'}`}></i>
                        </button>
                    </div>
                    <textarea id="editor" type="text" value={this.state.editorText}
                        onChange={(e) => {
                            this.handleChangeContent(e.target.value)
                        }}></textarea>
                </div>
                <div className={`previewWrap ${this.state.hideEditer ? 'maximized' : ''} ${this.state.hidePreview ? 'd-none' : 'd-block'}`}>
                    <div className="toolbar">
                        <div className="toolbar__left">
                            <i className="fab fa-free-code-camp"></i>
                            Previewer
                        </div>
                        <button className="toolbar__right" onClick={this.maximizePreview}>
                            <i className={`fa fa-expand-arrows-alt ${this.state.hideEditer ? 'd-none' : 'd-block'}`}></i>
                            <i className={`fa fa-compress-arrows-alt ${this.state.hideEditer ? 'd-block' : 'd-none'}`}></i>
                        </button>
                    </div>
                    {/* <div id="preview"></div> */}
                    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.editorText) }}></div>
                </div>

                {/* <div id = "preview" dangerouslySetInnerHTML={{__html:marked('You can also make text **bold**... whoa!')}}></div> */}
            </div>
        )
    }
}
