import { v4 as uuid } from 'uuid';

import {
  Card,
  CardHeader,
  Divider,

  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

const products = [
  {
    id: uuid(),
    name: 'Resources',
    imageUrl: '/static/images/resources/mtgs.png',
  },
  {
    id: uuid(),
    name: 'Homeworks',
    imageUrl: '/static/images/resources/mtgs.png',
  },
  {
    id: uuid(),
    name: 'Tests',
    imageUrl: '/static/images/resources/mtgs.png',
  }
];

const MenuBoard = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Class Menu"
    />
    <Divider />
    <List>
      {products.map((announcement, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={announcement.id}
        >
          <ListItemAvatar>
            <img
              alt={announcement.name}
              src={announcement.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={announcement.name}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
  </Card>
);

export default MenuBoard;
