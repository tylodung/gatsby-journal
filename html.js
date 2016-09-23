import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
    displayName: 'HTML',
    propTypes: {
        body: React.PropTypes.string,
    },
    render() {
        const {body, route} = this.props
        const title = DocumentTitle.rewind()
        const font = <link href='https://fonts.googleapis.com/css?family=Merriweather:300,400' rel='stylesheet' type='text/css' />
        const emoji = <link href='https://afeld.github.io/emoji-css/emoji.css' rel='stylesheet' type='text/css'/>
        let css
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={ {    __html: require('!raw!./public/styles.css')} } />
        }

        return (
            <html lang="en">
            <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
              <title>
                { title }
              </title>
              { font }
              { emoji }
              { css }
            </head>
            <body>
              <div id="react-mount" dangerouslySetInnerHTML={ {    __html: this.props.body} } />
              <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) } />
              <script src="//twemoji.maxcdn.com/2/twemoji.min.js?2.2"></script>
            </body>
            </html>
        )
    },
})
