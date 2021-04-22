import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class ArtistsMenu extends Component {
  state = { activeItem: 'ALEMAGLIA' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Menu fluid vertical tabular color='pink'>
            <Menu.Item
              name='ALEMAGLIA'
              active={activeItem === 'ALEMAGLIA'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='BLANCAVIDAL'
              active={activeItem === 'BLANCAVIDAL'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='COINBOXTEES'
              active={activeItem === 'COINBOXTEES'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='DANDINGEROZ'
              active={activeItem === 'DANDINGEROZ'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='DRACULABYTE'
              active={activeItem === 'DRACULABYTE'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='DRMONEKERS'
              active={activeItem === 'DRMONEKERS'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='FUNTIMESTEES'
              active={activeItem === 'FUNTIMESTEES'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='GEEKYDOG'
              active={activeItem === 'GEEKYDOG'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='GLITCHYGORILLA'
              active={activeItem === 'GLITCHYGORILLA'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='MINION_FACTORY'
              active={activeItem === 'MINION_FACTORY'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='VPTRINIDAD'
              active={activeItem === 'VPTRINIDAD'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={10}>
          <Segment active={activeItem === 'ALEMAGLIA'}>
            Hey I'm Alessio Magliano aka Alemaglia, a designer and cartoonist from Italy. Lately I would call my style "A story in shadows". I love representing all the characters and events in even the smallest details of the design. MY inspiration comes from TV, Comics and animated films so "Be prepared" to find "A whole new world" "Under the sea" of my art!
          
          
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
