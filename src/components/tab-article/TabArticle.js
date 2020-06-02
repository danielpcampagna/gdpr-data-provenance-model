import React from 'react'
import Menu from '@bit/semantic-org.semantic-ui-react.menu'
import Tab from '@bit/semantic-org.semantic-ui-react.tab'
import Icon from '@bit/semantic-org.semantic-ui-react.icon'
import Close from '../close/Close'

import './TabArticle.css'

const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

function TabArticle(props) {

    const key = props.key

    const panes = [
        {
            menuItem: (
                <Menu.Item key={`discussion-${key}`}>
                    Discussion
                    {/* <Icon link name='close' size="small" /> */}
                    <Close className="icon" size="small"/>
                </Menu.Item>
            ),
            render: () => <Tab.Pane>
                  <div className="article">
                      Discussion
                  </div>
              </Tab.Pane>,
        },
        {
            menuItem: (
                  <Menu.Item key={`gdpr-${key}`}>
                      GDPR
                      {/* <Icon link name='close' size='small' /> */}
                      <Close className="icon" size="small"/>
                  </Menu.Item>
              ),
          render: () => <Tab.Pane>
              <embed
                  className="article"
                  type="text/html"
                  src="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e2172-1-1"
                  // src="lex.html"
                  // width="100%"
                  // height="auto"
                  >
              </embed>
          </Tab.Pane>,
        }
    ]

    return <Tab panes={panes} />
}

export default () => (<div>{style}<TabArticle/></div>)