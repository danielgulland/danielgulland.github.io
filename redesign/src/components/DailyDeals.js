import { Button, Card, Image } from 'semantic-ui-react';
import daily1 from "./assets/daily1.jpeg";
import daily2 from "./assets/daily2.jpeg";
import daily3 from "./assets/daily3.jpeg";
import daily4 from "./assets/daily4.png";

const DailyDeals = () => (
    <Card.Group>
          <Card>
            <Image src ={daily1} size='mini'/>
            <Card.Content>
              <Card.Header>Legend Of The Smoking Bowls</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <Card.Description>

              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='details buttons'>
                <Button basic color='pink'>
                  Details
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Image src ={daily2}  alt="daily2"/>
            <Card.Content>
              <Card.Header>Crossing The Blunt Bridge</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <Card.Description>

              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='details buttons'>
                <Button basic color='pink'>
                  Details
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Image src ={daily3}  alt="daily3"/>
            <Card.Content>
              <Card.Header>Painting For Dummies</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <Card.Description>

              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='details buttons'>
                <Button basic color='pink'>
                  Details
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Image src ={daily4}  alt="daily4"/>
            <Card.Content>
              <Card.Header>Alrighty Then!</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <Card.Description>

              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='details buttons'>
                <Button basic color='pink'>
                  Details
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
)

export default DailyDeals
